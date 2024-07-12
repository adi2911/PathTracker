export const locationReducer = (state, action) => {
  switch (action.type) {
    case "add_location":
      return { ...state, currentLocation };
    default:
      return state;
  }
};
