import chapters from "../../utils/chapters";

export const initialState = {
    title: "",
    grade: "ix",
    category: { title: chapters.ix[0].titleAlias, index: 0 },
    subcategory: "0",
    difficulty: 1,
    maxExecutionTime: 100,
    maxMemory: 4,
    source: "",
    content: "",
    mentions: "",
    hints: "",
    officialSolution: "",
    inputData: "",
    outputData: "",
    exampleInputData: "",
    exampleOutputData: "",
};

export function reducer(state, action) {
    switch (action.type) {
        case "multiple":
            return { ...state, ...action.updateTheseFields() };
        case "title":
            return { ...state, title: action.value };
        case "grade":
            return { ...state, grade: action.value };
        case "category":
            return { ...state, category: action.value };
        case "subcategory":
            return { ...state, subcategory: action.value };
        case "difficulty":
            return { ...state, difficulty: action.value };
        case "maxExecutionTime":
            return { ...state, maxExecutionTime: action.value };
        case "maxMemory":
            return { ...state, maxMemory: action.value };
        case "source":
            return { ...state, source: action.value };
        case "content":
            return { ...state, content: action.value };
        case "mentions":
            return { ...state, mentions: action.value };
        case "hints":
            return { ...state, hints: action.value };
        case "officialSolution":
            return { ...state, officialSolution: action.value };
        case "inputData":
            return { ...state, inputData: action.value };
        case "outputData":
            return { ...state, outputData: action.value };
        case "exampleInputData":
            return { ...state, exampleInputData: action.value };
        case "exampleOutputData":
            return { ...state, exampleOutputData: action.value };
        default:
            throw new Error("Invalid form.");
    }
}
