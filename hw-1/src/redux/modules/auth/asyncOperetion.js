import * as action from './authAction';
import axios from 'axios';

import selector from './authSelectors'

const signUp = user => dispatch => {
  dispatch(action.signUpRequest());
  axios
    .post('http://localhost:4040/auth/signup', user)
    .then(({data}) => dispatch(action.signUpSuccess(data)))
    .catch(error =>console.log(error) || dispatch(action.signUpError(error)));
};
const signIn = user => dispatch => {
  dispatch(action.signUpRequest());
  axios
    .post('http://localhost:4040/auth/signin', user)
    .then(({data}) => dispatch(action.signInSuccess(data)))
    .catch(error =>console.log(error) || dispatch(action.signInError(error)));
};
const signOut = () => (dispatch, getState) => {
  dispatch(action.signOutRequest());
  const userToken = selector.token(getState())
  axios
    .post('http://localhost:4040/auth/signout', {},{headers:{Authorization:userToken}})
    .then(() => dispatch(action.signOutSuccess()))
    .catch(error=>console.log(error))
};

export default { signUp, signIn, signOut};
