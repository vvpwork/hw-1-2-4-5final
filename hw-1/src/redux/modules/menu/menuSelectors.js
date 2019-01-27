import { createSelector } from 'reselect';

const entityMenu = state => state.entity.menu;
const getMenuId = state => state.menu.menuIds;
const entityItemsById = state => state.entity.itemsById;
const itemId = state => state.menu.itemById;

const getMenu = createSelector(
  [entityMenu, getMenuId],
  (menu, ids) => {
    return ids.map(id => menu[id]);
  },
);
const getItemById = createSelector(
  [itemId, entityItemsById],
  (ids, itemId) => {
    return ids.map(id => itemId[id]);
  },
);

export default { getMenu, getItemById };
