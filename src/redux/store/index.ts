import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {useDispatch ,useSelector} from 'react-redux';
import { rootReducer } from '../rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;

