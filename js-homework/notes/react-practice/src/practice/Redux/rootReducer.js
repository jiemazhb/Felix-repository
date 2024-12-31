import { combineReducers } from 'redux';
import { persistReducer, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // 使用 localStorage
import ColorSlice from './ColorSlice';


const colorTransform = createTransform(

    (State) => ({
      color: State.color,
    }),

    (State) => State,
    { whitelist: ['myColorSlice'] } 
  );

const persistConfig = {
  key: 'userName', // 存储的 key
  storage,     // 存储方式
  whitelist: ['myColorSlice'], // 需要持久化的 slice
  transforms: [colorTransform]
};

// 合并 reducers
const rootReducer = combineReducers({
  myColorSlice: ColorSlice, // 添加你的 slice
});

// 持久化 reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
