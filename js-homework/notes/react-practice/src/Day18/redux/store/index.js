import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../slices/todosSlice';
import themeReducer from '../slices/themeSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    theme: themeReducer,
  },
});

export default store;
