export const GET_EVENTS_REQUESTED = "events/GET_EVENTS_REQUESTED";
export const GET_EVENTS_SUCCESS = "events/GET_EVENTS_SUCCESS";
export const GET_EVENTS_FAILURE = "events/GET_EVENTS_FAILURE";

export const getEventsRequest = () => ({
  type: GET_EVENTS_REQUESTED,
});

export const getEventsSuccess = (data) => ({
  type: GET_EVENTS_SUCCESS,
  payload: data,
});

export const getEventsFailure = (error) => {
  return {
    type: GET_EVENTS_FAILURE,
    payload: error
  };
};