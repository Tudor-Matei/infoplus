import genericReducer from "../utils/genericReducer";

export const exerciseStatsReducer = {
    initialState: (state) => state,
    reducer: genericReducer,
};

export const userSolutionsReducer = {
    initialState: (state) => state,
    reducer(state, action) {
        return [...state, action.value];
    },
};

export const testsStatsReducer = {
    initialState: { testsPoints: 0, testsResults: [] },
    reducer: genericReducer,
};

export const hiddenExerciseDataReducer = {
    initialState: null,
    reducer(_, action) {
        return { ...action.value };
    },
};
