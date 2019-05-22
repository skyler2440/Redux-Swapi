import { FETCHING, SUCCESS, FAILURE } from "../actions/exports";
const initialState = {
  characters: [
    {
      // id: null,
      name: null,
      // skinColor: null,
      // gender: null,
      // isLoading: false
    }
  ]
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        error: "",
        isLoading: true
      };
    case SUCCESS:
      return {
        characters: [
          ...state.characters,
          {
            // id: Date.now(),
            name: action.payload,
            // skinColor: action.payload,
            // gender: action.payload
          }
        ]
      };
    case FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
export default charsReducer;
