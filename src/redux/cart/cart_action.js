import { createAction } from '@reduxjs/toolkit';

export const getAllProductsRequest = createAction('user/getAllProductsRequest');
export const getAllProductsSuccess = createAction('user/getAllProductsSuccess');
export const getAllProductsError = createAction('user/getAllProductsError');
