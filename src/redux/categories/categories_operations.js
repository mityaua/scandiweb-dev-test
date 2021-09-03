import {
  getAllCategoriesRequest,
  getAllCategoriesSuccess,
  getAllCategoriesError,
} from './categories_action';

export const getCategories = array => async dispatch => {
  console.log('Hello!');

  dispatch(getAllCategoriesRequest());

  try {
    dispatch(getAllCategoriesSuccess(array));
  } catch (error) {
    dispatch(getAllCategoriesError(error.message));
  }
};
