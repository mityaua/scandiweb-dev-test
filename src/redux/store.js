// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import cart from './cart/cart_reducer';
import categories from './categories/categories_reducer';

// const cartConfig = {
//   key: 'cart',
//   storage,
//   whitelist: ['token'],
// };

const store = configureStore({
  reducer: {
    cart,
    categories,
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),

  devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);
// eslint-disable-next-line import/no-anonymous-default-export
export default { store };
// export default store;
