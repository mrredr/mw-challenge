import { createSelector } from "reselect";
import { State as EventsState } from "./reducer";
import { State as SearchState } from "../search/reducer";
import { State as ModalState } from "../modal/reducer";

export const baseSelector = ({ events }) => events;

export const eventsSelector = createSelector(
  baseSelector,
  ({ events }) => events
);

const stringIncludesString = (a: string, b: string) => {
  return a.toLowerCase().includes(b.toLocaleLowerCase());
};

export const filtredEventsSelector = createSelector(
  ({ events }: { events: EventsState }) => events,
  ({ search }: { search: SearchState }) => search,
  ({ events }, { value }) =>
    events.filter((event) => {
      return (
        stringIncludesString(event.title, value) ||
        stringIncludesString(event.address, value)
      );
    })
);

export const selectedEventSelector = createSelector(
  ({ events }: { events: EventsState }) => events,
  ({ modal }: { modal: ModalState }) => modal,
  ({ events }, { id }) => events.find((event) => event.id === id)
);

export const getNewId = createSelector(
  ({ events }: { events: EventsState }) => events,
  ({ events }) => Math.max(...events.map((event) => event.id)) + 1,
);