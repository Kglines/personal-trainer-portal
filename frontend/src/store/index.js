// frontend/src/store/index.js
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './session';
import announcementsReducer from './announcement';
import clientsReducer from './client';
import machinesReducer from './machine';
import commentsReducer from './comment';
import problemReducer from './problem';
import usersReducer from './user';

const rootReducer = combineReducers({
    session: sessionReducer,
    announcements: announcementsReducer,
    clients: clientsReducer,
    machines: machinesReducer,
    comments: commentsReducer,
    problems: problemReducer,
    users: usersReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
