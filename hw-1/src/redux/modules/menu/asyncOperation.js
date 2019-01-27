import { getAllMenuItems, getItemsById } from '../../../assets/axiosApi';

import action from './actionMenu';

const fetchMenuItems = () => dispatch => {
  dispatch(action.fetchRequest());

  getAllMenuItems()
    .then(Items => dispatch(action.fetchSuccess(Items)))
    .catch(error => dispatch(action.fetchError(error)));
};

const fetchMenuItemsById = id => dispatch => {
  dispatch(action.fetchRequest());
  getItemsById(id)
    .then(item => dispatch(action.fetchItemById(item)))
    .catch(error => dispatch(action.fetchError(error)));
};

export default { fetchMenuItems, fetchMenuItemsById };
