import axios from 'axios';

export const FETCH_JOKE_LOADING = 'FETCH_JOKE_LOADING';
export const FETCH_JOKE_SUCCESS = 'FETCH_JOKE_SUCCESS';
export const FETCH_JOKE_FAILURE = 'FETCH_JOKE_FAILURE';

export const getJoke = () => (dispatch) => {
  dispatch(fetchJokeLoading());

  axios
    .get('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    })
    .then((res) => {
        dispatch(fetchJokeSuccess(res.data))
    })
    .catch((err) => {
      dispatch(fetchJokeFailure(err.Response.code))
    });
};

export const fetchJokeLoading = () => {
  return { type: FETCH_JOKE_LOADING };
};

export const fetchJokeSuccess = (joke) => {
  return { type: FETCH_JOKE_SUCCESS, payload: joke };
};

export const fetchJokeFailure = (joke) => {
  return { type: FETCH_JOKE_FAILURE, payload: joke };
};
