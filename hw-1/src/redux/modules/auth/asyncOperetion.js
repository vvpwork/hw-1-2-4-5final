import axios from 'axios';
import * as action from './authAction';

import selector from './authSelectors';

const signUp = user => dispatch => {
  dispatch(action.signUpRequest());
  axios
    .post('http://localhost:4040/auth/signup', user)
    .then(({ data }) => dispatch(action.signUpSuccess(data)))
    .catch(
      error =>
        dispatch(action.signUpError(error)) &&
        alert(error.response.data.message),
    );
};
const signIn = user => dispatch => {
  dispatch(action.signUpRequest());
  return axios
    .post('http://localhost:4040/auth/signin', user)
    .then(({ data }) => dispatch(action.signInSuccess(data)))
    .catch(
      error =>
        dispatch(action.signInError(error)) &&
        alert(error.response.data.message),
    );
};
const signOut = () => (dispatch, getState) => {
  dispatch(action.signOutRequest());
  const userToken = selector.token(getState());
  axios
    .post(
      'http://localhost:4040/auth/signout',
      {},
      { headers: { Authorization: userToken } },
    )
    .then(() => dispatch(action.signOutSuccess()))
    .catch(error => console.log(error));
};

const refreshUser = () => (dispatch, getState) => {
  const userToken = selector.token(getState());
  if (!userToken) return;
  dispatch(action.refreshUserStart());

  axios
    .get('http://localhost:4040/auth/current', {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
    .then(({ data }) => dispatch(action.refreshUserSuccess(data.user)))
    .catch(error => console.log(error));
};

const changeUserInfo = user => dispatch => {
  dispatch(action.changeUserRequest());

  return axios
    .patch('http://localhost:4040/auth/change', user)
    .then(({ data }) => dispatch(action.changeUserSuccess(data.user)))
    .catch(error => dispatch(action.changeUserError(error)));
};

export default { signUp, signIn, signOut, refreshUser, changeUserInfo };
