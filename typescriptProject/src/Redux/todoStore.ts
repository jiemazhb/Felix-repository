import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './todoSlice';

// 定义 RootState 和 AppDispatch 类型
export type RootState = ReturnType<typeof todoStore.getState>;
export type AppDispatch = typeof todoStore.dispatch;

const todoStore = configureStore({
  reducer: {
    todoStore: todoSlice,
  },
});

export default todoStore;
