export const exerciseStatsReducer = {
    initialState: {
        isSolved: userSolutions.some(({ testsPoints }) => testsPoints === 100),
        sentSolutions: exerciseData.sentSolutions,
        needsHint: userSolutions.length > 1,
        userSolutions: userSolutions.length,
    },
    reducer(state, action) {
        return { ...state, [action.type]: action.value };
    },
};
