import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const initialState = {};
const enhancers = [];
const middlewares = [thunk];

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

const composedEnhancers = composeEnhancers(applyMiddleware(...middlewares), ...enhancers);

export default createStore(rootReducer, initialState, composedEnhancers);
