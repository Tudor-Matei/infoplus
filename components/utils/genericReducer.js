export default function genericReducer(state, action) {
    return { ...state, [action.type]: action.value };
}
