export const initialState = {
  notifications: [],
};
// useReducer thì cho phép chúng ta cập nhật giá trị mới cho state.
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_NOTIFICATIONS":
      //Logic
      return {
        ...state,
        notifications: [...state.notifications, action.item],
      };
    // break;
    default:
      return;
  }
};

export default reducer;