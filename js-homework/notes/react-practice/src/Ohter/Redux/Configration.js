import { configureStore } from "@reduxjs/toolkit";
import MySlice from './MySlice'
import TodoListSlice from "../Redux/TodoListSlice";

const MyConfig = configureStore({
    reducer : {
        slice1 : MySlice,
        todoSlice : TodoListSlice
    }
})

export default MyConfig