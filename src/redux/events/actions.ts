export const GET_EVENTS_REQUESTED = "events/GET_EVENTS_REQUESTED";
export const GET_EVENTS_SUCCESS = "events/GET_EVENTS_SUCCESS";
export const GET_EVENTS_FAILURE = "events/GET_EVENTS_FAILURE";
export const CREATE_EVENT = "events/CREATE_EVENT";
export const UPDATE_EVENT = "events/UPDATE_EVENT";
export const DELETE_EVENT = "events/DELETE_EVENT";

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

export const updateEvent = (event) => ({
  type: UPDATE_EVENT,
  payload: event,
});

export const deleteEvent = (id) => ({
  type: DELETE_EVENT,
  payload: id,
});

export const createEvent = (event) => ({
  type: CREATE_EVENT,
  payload: event,
});
