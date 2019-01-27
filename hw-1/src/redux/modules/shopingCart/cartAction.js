import types from './typeasCartAction';

const addToCart = id => {
  return {
    type: types.ADD_TO_CART,
    payload: id,
  };
};

const cartDecrement = id => ({
  type: types.DECREMENT_CART_ITEM,
  payload: id,
});

const deletIdCart = id => ({
  type: types.DELET_CART,
  payload: id,
});

export default { addToCart, deletIdCart, cartDecrement };
