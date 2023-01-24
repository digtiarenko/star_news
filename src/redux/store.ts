import { configureStore } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux';
import { articleApi } from './articles/articleAPI';
import { pageSlice } from './pagination/paginationSlice';

const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
    pages: pageSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(articleApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
