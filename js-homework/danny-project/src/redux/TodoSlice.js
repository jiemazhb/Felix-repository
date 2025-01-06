import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const mySlice = createSlice({
    name : "todoList",
    initialState : {
        list : [],
        isEmpty : true
    },
    reducers : {
        addList : (state, action) => {
            return {...state, list : [...state.list, action.payload]}
            // state.list.push(action.payload); 
            // state.isEmpty = state.list.length === 0;
        },
        deleteList: () => {
            
        }
    }
})

console.log(mySlice.actions);

export const { addList } = mySlice.actions;
export default mySlice.reducer;

