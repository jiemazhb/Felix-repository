import { createSlice } from "@reduxjs/toolkit";

const ColorSlice = createSlice({
    name : "theme",
    initialState : "black",
    reducers : {
        switchColor : (state) => state === "black" ? "white" : "black"
    }
})

export default ColorSlice.reducer
export const {switchColor} = ColorSlice.actions



