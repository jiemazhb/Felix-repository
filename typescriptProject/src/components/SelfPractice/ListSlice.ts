import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Content{
    id : string,
    task : string,
    completed : boolean,
    description : string,
    date : string
}

const addToList = createAsyncThunk<Content, Partial<Content>>("ListSlice/addToList", async(obj)=>{
    const response = await fetch("http://localhost:5000/todos", 
        {   method : "POST", 
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(obj)
        })

        if(!response.ok){
            console.log("ListSlice/addToList faild");
        }

    return await response.json()
})

const getAll = createAsyncThunk<Content[]>("ListSlice/getAll", async () => {
    
    const response = await fetch("http://localhost:5000/todos", 
        {   method : "GET" })

        if(!response.ok){
            console.log("ListSlice/getAll faild");
        }

    return await response.json()
})

interface List {
    list : Content[],
    selected: Content | null
}

const initialState : List = {
    list : [],
    selected : null
}

const todoSlice = createSlice({
    name : "todoSlice",
    initialState,
    reducers : {

    },
    extraReducers : (builder) => {
        builder.addCase(addToList.fulfilled, (state, action : PayloadAction<Content>) =>{
            state.list.unshift(action.payload)
        }).addCase(getAll.fulfilled, (state, action : PayloadAction<Content[]>) => {           
            state.list = action.payload
        })
    }

})


export default  todoSlice.reducer
export {addToList, getAll}