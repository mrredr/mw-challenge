import * as actions from "./actions";

export type State = {
  value: string;
};

const initialState: State = {
  value: "",
};

const reducer = (state = initialState, action): State => {
  switch (action.type) {
    case actions.SET_SEARCH_INPUT:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
