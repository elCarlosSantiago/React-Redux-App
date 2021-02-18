import {
  FETCH_JOKE_LOADING,
  FETCH_JOKE_SUCCESS,
  FETCH_JOKE_FAILURE,
} from './../actions/jokeActions';

const initialState = {
  joke: '',
  jokeId: '',
  isFetching: false,
  error: '',
};

const jokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOKE_LOADING:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_JOKE_SUCCESS:
      return {
        ...state,
        joke: action.payload.joke,
        jokeId: action.payload.id,
        isFetching: false,
      };
    case FETCH_JOKE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default jokeReducer;
