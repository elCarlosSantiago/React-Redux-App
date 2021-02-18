import { combineReducers } from 'redux';

import jokeReducer from './jokeReducer';
import picReducer from './picReducer';

export default combineReducers({
  jokeReducer: jokeReducer,
  picReducer: picReducer,
});
