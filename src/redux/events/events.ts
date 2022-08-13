import { getEventsFailure, getEventsRequest, getEventsSuccess } from "./actions";

export const getEvents = () => {
  return async (dispatch) => {
    try {
      dispatch(getEventsRequest());
      const result = await fetch("events.json");
      const json = await result.json();
      return dispatch(getEventsSuccess(json));
    } catch (e) {
      dispatch(getEventsFailure(e));
    }
  };
};