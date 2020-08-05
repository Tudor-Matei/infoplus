import ExercisesPanel from "./Panel";
import {
    exercisesGradeIX,
    exercisesGradeX,
    exercisesGradeXI,
} from "../../utils/exercisesGradesData";
import { createContext } from "react";

const CapitolURLContext = createContext("");
export function ExercisesGradeIX() {
    return exercisesGradeIX.map(({ title, accent, grade, description, capitolURL }, i) => (
        <CapitolURLContext.Provider value={capitolURL}>
            <ExercisesPanel
                key={`exercises-panel_${grade}-${i}`}
                title={title}
                accent={accent}
                grade={grade}
            >
                {description}
            </ExercisesPanel>
        </CapitolURLContext.Provider>
    ));
}

export function ExercisesGradeX() {
    return exercisesGradeX.map(({ title, accent, grade, description, capitolURL }, i) => (
        <CapitolURLContext.Provider value={capitolURL}>
            <ExercisesPanel
                key={`exercises-panel_${grade}-${i}`}
                title={title}
                accent={accent}
                grade={grade}
                link={capitolURL}
            >
                {description}
            </ExercisesPanel>
        </CapitolURLContext.Provider>
    ));
}

export function ExercisesGradeXI() {
    return exercisesGradeXI.map(({ title, accent, grade, description, capitolURL }, i) => (
        <CapitolURLContext.Provider value={capitolURL}>
            <ExercisesPanel
                key={`exercises-panel_${grade}-${i}`}
                title={title}
                accent={accent}
                grade={grade}
                link={capitolURL}
            >
                {description}
            </ExercisesPanel>
        </CapitolURLContext.Provider>
    ));
}

export { CapitolURLContext };
