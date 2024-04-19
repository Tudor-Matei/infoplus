import { useRouter } from "next/router";
import { createContext, useContext } from "react";

import getAuthInfo from "../../utils/getAuthInfo";
import { getHiddenExerciseData, getSingleExerciseData } from "../../utils/getExerciseData";
import performDatabaseOperation from "../../utils/performDatabaseOperation";

import ExerciseData from "../../components/IndividualExercise/ExerciseData";
import useComponentDidMount from "../../components/_hooks/componentDidMount";
import { ShowAlertContext } from "../_app";

function propsWithError(err) {
  return { props: { exerciseData: null, authenticated: null, userData: null, err } };
}

export async function getServerSideProps({ req, res, params }) {
  if (/[^a-zA-Z0-9]/g.test(params.title)) return propsWithError("Titlul exercițiului este invalid.");

  const { authenticated, userData, err: authErr } = await getAuthInfo(req, res);
  if (authErr) console.error(authErr); // nu vom stopa randarea paginii, deoarece vom lasa si cei nelogati sa vada exercitiul

  const { data: singleExerciseData, err: singleExerciseErr } = await getSingleExerciseData({
    title: params.title,
  });
  if (singleExerciseErr) return propsWithError(singleExerciseErr);

  const { data: tests, err: errGettingTests } = await getHiddenExerciseData({
    exerciseId: singleExerciseData._id,
    fieldsToExclude: { tests: 1, _id: 0 },
  });
  if (errGettingTests) return propsWithError(errGettingTests);

  const { data: userSolutions, err: userSolutionsErr } = authenticated
    ? await performDatabaseOperation(async (db) => {
        const userSolutions = await db
          .collection("solutions")
          .find({
            username: userData.username,
            exerciseId: singleExerciseData._id,
          })
          .project({ _id: 0, exerciseId: 0 })
          .toArray();

        return { data: userSolutions, err: null };
      })
    : { data: [], err: null };

  if (userSolutionsErr) return propsWithError(userSolutionsErr);

  return {
    props: {
      exerciseData: {
        ...singleExerciseData,
        _id: null,
        exerciseId: singleExerciseData._id.toHexString(),
        tests,
      },
      userSolutions,
      authenticated,
      userData,
      err: null,
    },
  };
}

export const SolutionAreaContext = createContext(null);
export const ExerciseInfoData = createContext(null);

export default function Exercitiu(props) {
  const createAlert = useContext(ShowAlertContext);
  const router = useRouter();

  if (props.err) {
    useComponentDidMount(() => {
      createAlert({
        ofType: "error",
        saying: props.err,
        onClose: () => router.push("/exercitii"),
      });
    });
    return null;
  }

  return <ExerciseData {...props} />;
}
