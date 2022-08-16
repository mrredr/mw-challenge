import { EventType } from "../../types/event";
import * as actions from "./actions";

export type State = {
  events: EventType[];
  isLoading: boolean;
  error: any;
};

const initialState: State = {
  events: [],
  isLoading: false,
  error: undefined,
};

const reducer = (state = initialState, action): State => {
  switch (action.type) {
    case actions.GET_EVENTS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: undefined,
      };
    case actions.GET_EVENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        events: action.payload,
      };
    case actions.GET_EVENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case actions.UPDATE_EVENT:
      return {
        ...state,
        events: state.events.map((event) =>
          event.id === action.payload.id
            ? { ...event, ...action.payload }
            : event
        ),
      };
    case actions.DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.payload),
      };
    case actions.CREATE_EVENT:
      return {
        ...state,
        events: [action.payload, ...state.events],
      };
    default:
      return state;
  }
};

export default reducer;
