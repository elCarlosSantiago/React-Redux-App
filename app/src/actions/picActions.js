import axios from 'axios';

export const FETCH_DOGGO_LOADING = 'FETCH_DOGGO_LOADING';
export const FETCH_DOGGO_SUCCESS = 'FETCH_DOGGO_SUCCESS';
export const FETCH_DOGGO_FAILURE = 'FETCH_DOGGO_FAILURE';

export const getDog = () => (dispatch) => {
  dispatch(fetchDoggoLoading());

  axios
    .get('https://dog.ceo/api/breeds/image/random')
    .then((res) => {
      dispatch(fetchDoggoSuccess(res.data.message));
      debugger
    })
    .catch((err) => {
      dispatch(fetchDoggoFailure(err.Response.code));
    });
};

export const fetchDoggoLoading = () => {
  return { type: FETCH_DOGGO_LOADING };
};

export const fetchDoggoSuccess = (picture) => {
  return { type: FETCH_DOGGO_SUCCESS, payload: picture };
};

export const fetchDoggoFailure = (error) => {
  return { type: FETCH_DOGGO_FAILURE, payload: error };
};
