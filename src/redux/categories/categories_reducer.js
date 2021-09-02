import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  getAllCategoriesRequest,
  getAllCategoriesSuccess,
  getAllCategoriesError,
} from './categories_action';

const list = createReducer([], {
  [getAllCategoriesSuccess]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [getAllCategoriesRequest]: () => false,
  [getAllCategoriesSuccess]: () => false,
  [getAllCategoriesError]: () => true,
});

const isLoading = createReducer(false, {
  [getAllCategoriesRequest]: () => true,
  [getAllCategoriesSuccess]: () => false,
  [getAllCategoriesError]: () => false,
});

export default combineReducers({
  list,
  error,
  isLoading,
});
