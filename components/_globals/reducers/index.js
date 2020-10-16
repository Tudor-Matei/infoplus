export const alertNotification = {
  initialState: {
    isVisible: false,
    ofType: "success",
    saying: "Operațiunea a fost efectuată cu success!",
    onClose: null,
  },
  reducer(state, action) {
    switch (action.ofType) {
      case "success":
        return {
          ...state,
          isVisible: true,
          ofType: action.ofType,
          saying: "Operațiunea a fost efectuată cu success!",
          onClose: action.onClose || null,
        };
      case "error":
        return {
          ...state,
          isVisible: true,
          ofType: action.ofType,
          saying: action.saying,
          onClose: action.onClose || null,
        };
      case "":
        return { ...state, isVisible: false };
      default:
        throw new Error("Actiune invalida");
    }
  },
};
