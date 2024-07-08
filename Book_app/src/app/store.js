import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from './Features/product/product';

export const store = configureStore({
  reducer: {
    ProductstoreReducer: ProductReducer
  },
})

export default store;