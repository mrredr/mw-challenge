import { combineReducers } from "redux";
import events from './events/reducer';
import search from './search/reducer';
import modal from './modal/reducer';


const rootState = combineReducers({
  events,
  search,
  modal,
});

export type RootState = Readonly<Pick<ReturnType<typeof rootState>, 'events' |'search' | 'modal'>>;
export default rootState;