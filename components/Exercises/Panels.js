import ExercisesPanel from "../Account/ExercisesPanel";
import {
    exercisesGradeIX,
    exercisesGradeX,
    exercisesGradeXI
} from "../utils/exercisesGradesData";

export function ExercisesGradeIX() {
    return exercisesGradeIX.map(({ title, accent, grade, description }, i) => (
        <ExercisesPanel
            key={`exercises-panel_${grade}-${i}`}
            title={title}
            accent={accent}
            grade={grade}
        >
            {description}
        </ExercisesPanel>
    ));
}

export function ExercisesGradeX() {
    return exercisesGradeX.map(({ title, accent, grade, description }, i) => (
        <ExercisesPanel
            key={`exercises-panel_${grade}-${i}`}
            title={title}
            accent={accent}
            grade={grade}
        >
            {description}
        </ExercisesPanel>
    ));
}

export function ExercisesGradeXI() {
    return exercisesGradeXI.map(({ title, accent, grade, description }, i) => (
        <ExercisesPanel
            key={`exercises-panel_${grade}-${i}`}
            title={title}
            accent={accent}
            grade={grade}
        >
            {description}
        </ExercisesPanel>
    ));
}
