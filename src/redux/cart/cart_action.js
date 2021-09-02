import { createAction } from '@reduxjs/toolkit';

export const getAllProductsRequest = createAction('cart/getAllProductsRequest');
export const getAllProductsSuccess = createAction('cart/getAllProductsSuccess');
export const getAllProductsError = createAction('cart/getAllProductsError');
