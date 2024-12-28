import { configureStore } from "@reduxjs/toolkit";
import MySlice from './MySlice'

const MyConfig = configureStore({
    reducer : {
        slice1 : MySlice
    }
})

export default MyConfig