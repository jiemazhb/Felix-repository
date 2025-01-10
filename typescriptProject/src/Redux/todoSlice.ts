import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

// 定义 Todo 的数据结构
interface Todo {
  id: string;
  task: string;
  completed: boolean;
  date: string;
  description: string;
}

// 定义 Slice 的初始状态类型
interface TodoState {
  list: Todo[];
  selectedData: Todo | null;
}

// 初始化状态
const initialState: TodoState = {
  list: [],
  selectedData: null,
};

// 异步操作：添加任务
const addToList = createAsyncThunk<Todo, Partial<Todo>>(
  'todoList/addToList',
  async (obj) => {
    const response = await fetch('http://localhost:5000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });

    if (!response.ok) {
      console.error('addToList -> POST failed');
    }

    return await response.json();
  }
);

// 异步操作：获取所有任务
const getAllList = createAsyncThunk<Todo[]>(
  'todoList/getAllList',
  async () => {
    const response = await fetch('http://localhost:5000/todos', {
      method: 'GET',
    });

    if (!response.ok) {
      console.error('getAllList -> GET failed');
    }

    return await response.json();
  }
);

// 异步操作：获取任务详情
const fetchTaskDetails = createAsyncThunk<Todo, string>(
  'todoList/fetchTaskDetails',
  async (id) => {
    const response = await fetch(`http://localhost:5000/todos/${id}`, {
      method: 'GET',
    });

    if (!response.ok) {
      console.error('fetchTaskDetails -> GET failed');
    }

    return await response.json();
  }
);

// 异步操作：删除任务
const deleteCurrentData = createAsyncThunk<string, string>(
  'todoList/deleteCurrentData',
  async (id) => {
    const response = await fetch(`http://localhost:5000/todos/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      console.error('deleteCurrentData -> DELETE failed');
    }

    return id; // 返回被删除任务的 id
  }
);

// 创建 Slice
const todoSlice = createSlice({
  name: 'todoSlice',
  initialState,
  reducers: {
    fetchDetails: (state, action: PayloadAction<string>) => {
      state.selectedData = state.list.find((val) => val.id === action.payload) || null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToList.fulfilled, (state, action: PayloadAction<Todo>) => {
        state.list.unshift(action.payload);
      })
      .addCase(getAllList.fulfilled, (state, action: PayloadAction<Todo[]>) => {
        state.list = action.payload;
      })
      .addCase(fetchTaskDetails.fulfilled, (state, action: PayloadAction<Todo>) => {
        state.selectedData = action.payload;
      })
      .addCase(deleteCurrentData.fulfilled, (state, action: PayloadAction<string>) => {
        state.selectedData = null;
        state.list = state.list.filter((val) => val.id !== action.payload);
      });
  },
});

// 导出 Reducer 和 Action
export default todoSlice.reducer;
export const { fetchDetails } = todoSlice.actions;
export { addToList, getAllList, fetchTaskDetails, deleteCurrentData };
