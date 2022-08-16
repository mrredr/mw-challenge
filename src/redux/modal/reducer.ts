import * as actions from "./actions";

export type State = {
  visible: boolean;
  id: number;
};

const initialState: State = {
  visible: false,
  id: NaN
};

const reducer = (state = initialState, action): State => {
  switch (action.type) {
    case actions.SET_HIDE_MODAL:
      return {
        ...state,
        visible: false,
        id: NaN,
      };
    case actions.SET_SHOW_MODAL:
      return {
        ...state,
        visible: true,
        id: action.id,
      };
    default:
      return state;
  }
};

export default reducer;
