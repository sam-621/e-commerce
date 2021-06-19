import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { MODE } from '../config/envVars';
import cart from './reducers/cart';

const ignoredLogs: string[] = [];

const logger = createLogger({
  predicate: (_, action) => {
    if (typeof window === 'undefined') {
      return false;
    }
    return !ignoredLogs.includes(action.type);
  },
  level: 'info',
  collapsed: () => true,
});

const store = createStore(
  combineReducers({
    cart,
  }),
  {},
  MODE === 'DEV' ? applyMiddleware(thunk, logger) : applyMiddleware(thunk)
);

export default store;
