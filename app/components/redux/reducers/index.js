/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import langReducer from './langReducer';

import history from 'utils/history';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    langReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
