import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const addToList = createAsyncThunk("todoList/addToList", async (obj)=>{

})

const getAllList = createAsyncThunk("todoList/getAllList", async () => {

    const response = await fetch("http://localhost:5000/todos", {
        method : "GET"
    })

    if(!response.ok){
        console.log("createAsyncThunk -> getAllList faild"); 
    }

    return await response.json()
})

const todoSlice = createSlice({
    name : "todoSlice",
    initialState : {
        list : []
    },
    reducers : {

    },
    extraReducers : (builder) => {
        builder.addCase(addToList.fulfilled, (preState, action) => {

        }).addCase(getAllList.fulfilled, (preState, action) => {
            preState.list = action.payload
        })
    }

})

export default todoSlice.reducer
export const{} = todoSlice.actions
export {addToList, getAllList}