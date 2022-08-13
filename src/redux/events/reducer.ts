import * as actions from "./actions";

const initialState = {
  events: [],
  isLoading: false,
  error: undefined
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_EVENTS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: undefined
      }
    case actions.GET_EVENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        events: action.payload
      }
    case actions.GET_EVENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
