import { createSlice } from "@reduxjs/toolkit";

const MySlice = createSlice({
    name: "Danny",
    initialState : 30,
    reducers: {
        firstReducer : (state) => state + 1,
        secondReducer: (state) => state - 1
    }
})

export const { firstReducer, secondReducer} = MySlice.actions;
export default MySlice.reducer