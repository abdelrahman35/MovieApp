const INITIAL_STATE = {
  moviesArray: [],
};

export default function moviesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_MOVIES_ARRAY":
      return {
        ...state,
        moviesArray: action.payload,
      };
    default:
      return state;
  }
}
