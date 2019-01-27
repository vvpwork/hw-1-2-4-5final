import types from './actionType';
import { normalize } from 'normalizr';
//assets
import * as schema from '../../../assets/schema';

const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchSuccess = menuItems => {
  const normMenu = normalize(menuItems, [schema.menuSchema]);

  return {
    type: types.FETCH_SUCCESS,
    payload: {
      ids: Object.keys(normMenu.entities.menu),
      entities: normMenu.entities,
    },
  };
};

const fetchItemById = item => {
  const normItem = normalize([].concat(item), [schema.menuIdSchema]);

  return {
    type: types.ITEM_ID,
    payload: {
      ids: Object.keys(normItem.entities.itemsById),
      entities: normItem.entities,
    },
  };
};

const fetchError = error => ({
  type: types.FETCH_ERROR,
  payload: error,
});

export default { fetchError, fetchRequest, fetchSuccess, fetchItemById };
