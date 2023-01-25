import { AppDispatch, RootState } from './store';
import { createSlice } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

interface PageState {
  value: number;
}
const initialState: PageState = {
  value: 9,
};

export const pageSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    increment: state => {
      state.value += 9;
    },
  },
});

export const { increment } = pageSlice.actions;
export const getPage = (state: RootState) => state.pages.value;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
