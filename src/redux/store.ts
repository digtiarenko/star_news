import { configureStore } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux';
import { articlesApi, oneArticleApi } from './articleAPI';
import { pageSlice } from './paginationSlice';
import { filterSlice } from './filterSlice';

const store = configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer,
    [oneArticleApi.reducerPath]: oneArticleApi.reducer,
    pages: pageSlice.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(articlesApi.middleware)
      .concat(oneArticleApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
