import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  getAllProductsRequest,
  getAllProductsSuccess,
  getAllProductsError,
} from './cart_action';

const initial = {
  products: [],
};

const products = createReducer(initial.products, {
  [getAllProductsSuccess]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [getAllProductsRequest]: () => false,
  [getAllProductsSuccess]: () => false,
  [getAllProductsError]: () => true,
});

const isLoading = createReducer(false, {
  [getAllProductsRequest]: () => true,
  [getAllProductsSuccess]: () => false,
  [getAllProductsError]: () => false,
});

export default combineReducers({
  products,
  error,
  isLoading,
});
