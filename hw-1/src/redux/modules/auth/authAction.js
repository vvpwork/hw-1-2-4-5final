import actions from './actionType';

export const signUpRequest = () => ({
  type: actions.SIGN_UP_REQUEST,
});

export const signUpSuccess = data => ({
  type: actions.SIGN_UP_SUCCESS,
  payload: data,
});

export const signUpError = error => ({
  type: actions.ERROR,
  payload: error,
});

export const signInRequest = () => ({
  type: actions.SIGN_IN_REQUEST,
});

export const signInSuccess = data => ({
  type: actions.SIGN_IN_SUCCESS,
  payload: data,
});

export const signOutRequest = () => ({
  type: actions.SIGN_OUT_REQUEST,
});

export const signOutSuccess = () => ({
  type: actions.SIGN_OUT_SUCCESS,
});

export const signInError = error => ({
  type: actions.ERROR,
  payload: error,
});

export const refreshUserStart = () => ({
  type: actions.REFRESH_CURRENT_USER_START,
});

export const refreshUserSuccess = user => ({
  type: actions.REFRESH_CURRENT_USER_SUCCESS,
  payload: { user },
});

export const changeUserRequest = () => ({
  type: actions.CHANGE_USER_REQUEST,
});

export const changeUserSuccess = user => ({
  type: actions.CHANGE_USER_SUCCES,
  payload: { user },
});
export const changeUserError = error => ({
  type: actions.ERROR,
  payload: error,
});
