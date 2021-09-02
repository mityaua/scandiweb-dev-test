import {
  getAllCategoriesRequest,
  getAllCategoriesSuccess,
  getAllCategoriesError,
} from './categories_action'; // Импорт экшенов из контактов в операции

// Операция получения информации о юзере
export const getCategories = array => async dispatch => {
  console.log('Hello!');

  dispatch(getAllCategoriesRequest());

  try {
    dispatch(getAllCategoriesSuccess(array));
  } catch (error) {
    dispatch(getAllCategoriesError(error.message));
  }
};
