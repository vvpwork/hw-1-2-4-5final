import { createSelector } from 'reselect';

const getCartId = state => state.shopingCart.ids;
const getCartAmount = state => state.shopingCart.amount;
const menu = state => state.entity.menu;
const itemMenu = state => state.entity.itemsById;

const getCartProducts = createSelector(
  [getCartId, getCartAmount, menu, itemMenu],
  (ids, amount, products, item) =>
    ids.map(id => {
      const realProduct = products || item;
      return {
        ...realProduct[id],
        amount: amount[id],
      };
    }),
);

export default { getCartProducts, getCartId };
