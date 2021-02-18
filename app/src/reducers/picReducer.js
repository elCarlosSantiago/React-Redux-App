import { FETCH_JOKE_FAILURE, FETCH_JOKE_SUCCESS } from '../actions/jokeActions';
import {
  FETCH_DOGGO_FAILURE,
  FETCH_DOGGO_LOADING,
  FETCH_DOGGO_SUCCESS,
} from './../actions/picActions';

const initialState = {
  imgUrl: '',
  isFetching: false,
  error: '',
};

const picReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOGGO_LOADING:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_DOGGO_SUCCESS:
      return {
        ...state,
        imgUrl: action.payload,
        isFetching: false,
      };
    case FETCH_DOGGO_FAILURE:
      return {
          ...state,
          error:action.payload,
          isFetching:false,
      };
    default:
      return state;
  }
};

export default picReducer