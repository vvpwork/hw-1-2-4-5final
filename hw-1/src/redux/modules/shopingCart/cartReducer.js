import types from './typeasCartAction';
import { combineReducers } from 'redux';

function ids(state = [], { type, payload }) {
  switch (type) {
    case types.ADD_TO_CART:
      return state.includes(payload) ? state : [...state, payload];
    case types.DELET_CART:
      return state.filter(id => payload !== id);
    default:
      return state;
  }
}

function amount(state = {}, { type, payload }) {
  switch (type) {
    case types.ADD_TO_CART:
      return {
        ...state,
        [payload]: state[payload] ? state[payload] + 1 : 1,
      };
    case types.DECREMENT_CART_ITEM:
      return {
        ...state,
        [payload]: state[payload] > 1 ? state[payload] - 1 : state[payload],
      };

    case types.DELET_CART: {
      const { [payload]: _, ...newState } = state;
      return newState;
    }
    default:
      return state;
  }
}

export default combineReducers({
  ids,
  amount,
});
