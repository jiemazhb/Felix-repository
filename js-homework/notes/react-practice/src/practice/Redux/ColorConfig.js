import { configureStore } from "@reduxjs/toolkit";
import ColorSlice from './ColorSlice'
import persistedReducer from './rootReducer'
import { persistStore } from 'redux-persist';
import logger from 'redux-logger'

// const ColorStore = configureStore({
//     reducer : {
//         myColorSlice : ColorSlice
//     }
// })

const ColorStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'], // 忽略特定的 action
          ignoredPaths: ['register', 'rehydrate'], // 忽略 action 或 state 中的路径
        },
      }),
        //}).concat(logger),
  });

  const persistor = persistStore(ColorStore);


export {persistor}
export default ColorStore