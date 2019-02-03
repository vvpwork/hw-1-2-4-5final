import axios from 'axios';
import * as action from './authAction';

import selector from './authSelectors';

const signUp = user => dispatch => {
  dispatch(action.signUpRequest());
  axios
    .post('http://localhost:4040/auth/signup', user)
    .then(({ data }) => dispatch(action.signUpSuccess(data)))
    .catch(error => console.log(error) || dispatch(action.signUpError(error)));
};
const signIn = user => dispatch => {
  dispatch(action.signUpRequest());
  axios
    .post('http://localhost:4040/auth/signin', user)
    .then(({ data }) => dispatch(action.signInSuccess(data)))
    .catch(error => console.log(error) || dispatch(action.signInError(error)));
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
  console.log(userToken);
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

export default { signUp, signIn, signOut, refreshUser };
