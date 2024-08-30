import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import todoReducer from './todoSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;