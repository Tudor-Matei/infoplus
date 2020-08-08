import chapters from "../../utils/chapters";

export const composeExercisesView = {
    initialState: false,
    reducer(_, action) {
        switch (action.type) {
            case "normal":
                return false;
            case "compose_exercises":
                return true;
            default:
                throw new Error("Invalid view change action.");
        }
    },
};

export const steps = {
    initialState: 1,
    reducer(step, action) {
        switch (action.type) {
            case "increment":
                return step + 1;
            case "decrement":
                return step - 1;
            default:
                throw new Error("Invalid step modifying action.");
        }
    },
};

export const fields = {
    generalDataPart: {
        title: "",
        grade: "ix",
        category: { title: chapters.ix[0].titleAlias, index: 0 },
        subcategory: "0",
        difficulty: 1,
        maxExecutionTime: 100,
        maxMemory: 4,
        source: "",
    },
    contentPart: {
        content: "",
        mentions: "",
        hints: "",
        officialSolution: "",
    },

    inputDataPart: {
        inputData: "",
        outputData: "",
        exampleInputData: "",
        exampleOutputData: "",
    },

    reducer(state, action) {
        if (action.type === "multiple") return { ...state, ...action.updateTheseFields() };
        return { ...state, [action.type]: action.value };
    },
};

export const tests = {
    initialState: [{ input: "", expectedOutput: "" }],
    reducer(state, action) {
        switch (action.type) {
            case "add":
                return [...state, { input: "", expectedOutput: "" }];
            case "populate":
                const newState = state;
                newState[action.number - 1][action.inputType] = action.value;
                return newState;
            case "remove":
                return state.filter((_, i) => action.number !== i);
            default:
                throw new Error("stoopid, invalid tests removal operation");
        }
    },
};
