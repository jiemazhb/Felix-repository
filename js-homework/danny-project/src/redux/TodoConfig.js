import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from './TodoSlice'

const myConfig = configureStore({
    reducer : {
        todoReducer : TodoSlice
    }
})

export default myConfig