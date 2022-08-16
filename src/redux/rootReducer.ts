import { combineReducers } from "redux";
import events from './events/reducer';

const rootState = combineReducers({
  events,
});

export type RootState = Readonly<Pick<ReturnType<typeof rootState>, 'events'>>;
export default rootState;