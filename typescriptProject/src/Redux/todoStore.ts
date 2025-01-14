import { configureStore } from '@reduxjs/toolkit';
import TodoReducer from './todoSlice';
import ListReducer from '../components/SelfPractice/ListSlice'


const myStore = configureStore({
  reducer: {
    todoStore: TodoReducer,
    listStore: ListReducer
  },
});

export default myStore;
export type RootState = ReturnType<typeof myStore.getState>;
export type AppDispatch = typeof myStore.dispatch;
