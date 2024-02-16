const reducer = (state, action) => {
  console.log(action.type);
  console.log(action.payload.name);
  console.log(action.payload.value);
  switch (action.type) {
    case "SET_INPUT":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};
const reducer1 = (state, action) => {
  switch (action.type) {
    case "WISH":
      return {
        ...state,
        wish: [...state.wish, action.payload],
      };
    case "DELETE":
      return {
        ...state,
        wish: state.wish.filter((item) => item.id !== action.payload),
      };
    case "COMPLETE":
      return {
        ...state,
        wish: state.wish.map((item) =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item
        ),
      };

    default:
      return state;
  }
};
export { reducer, reducer1 };
