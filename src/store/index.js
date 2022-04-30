import { legacy_createStore, combineReducers } from 'redux';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  cashReducer,
  customerReducer
})

export const store = legacy_createStore(rootReducer, composeWithDevTools());