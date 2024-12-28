import { configureStore } from "@reduxjs/toolkit";
import ColorSlice from './ColorSlice'

const ColorStore = configureStore({
    reducer : {
        myColorSlice : ColorSlice
    }
})

export default ColorStore