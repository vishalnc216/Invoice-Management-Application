export const initialState = {
  Receiptno: "",
};
const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "SET_Receiptno":
      return {
        ...state,
        Receiptno: action.Receiptno,
      };

    default:
      return state;
  }
};

export default reducer;
