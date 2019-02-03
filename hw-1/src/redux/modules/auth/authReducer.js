import { combineReducers } from 'redux';
import action from './actionType';

const user = (state = null, { type, payload }) => {
  switch (type) {
    case action.SIGN_UP_SUCCESS:
    case action.SIGN_IN_SUCCESS:
    case action.REFRESH_CURRENT_USER_SUCCESS:
      return payload.user;

    case action.SIGN_OUT_SUCCESS:
      return null;
    default:
      return state;
  }
};
const token = (state = null, { type, payload }) => {
  switch (type) {
    case action.SIGN_UP_SUCCESS:
    case action.SIGN_IN_SUCCESS:
      return payload.token;
    case action.ERROR:
    case action.SIGN_OUT_SUCCESS:
      return null;
    default:
      return state;
  }
};
const isAuthenticated = (state = null, { type }) => {
  switch (type) {
    case action.SIGN_UP_SUCCESS:
    case action.SIGN_IN_SUCCESS:
    case action.REFRESH_CURRENT_USER_SUCCESS:
      return true;
    case action.ERROR:
    case action.SIGN_OUT_SUCCESS:
      return false;
    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case action.ERROR:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  user,
  token,
  isAuthenticated,
  error,
});
