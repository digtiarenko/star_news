import { AppDispatch, RootState } from '../store';
import { createSlice } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

interface CounterState {
  value: number;
}
const initialState: CounterState = {
  value: 9,
};

export const pageSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    increment: state => {
      state.value += 9;
    },
    reset: state => {
      state.value = 0;
    },
  },
});

export const { increment, reset } = pageSlice.actions;
export const selectCount = (state: RootState) => state.pages.value;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
