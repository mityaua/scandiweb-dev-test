import { createAction } from '@reduxjs/toolkit';

export const getAllCategoriesRequest = createAction(
  'categories/getAllCategoriesRequest',
);
export const getAllCategoriesSuccess = createAction(
  'categories/getAllCategoriesSuccess',
);
export const getAllCategoriesError = createAction(
  'categories/getAllCategoriesError',
);
