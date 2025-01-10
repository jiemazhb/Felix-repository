import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const addToList = createAsyncThunk("todoList/addToList", async (obj)=>{

    const response = await fetch("http://localhost:5000/todos", {
        method : "POST",
        headers : {
            "Content-Type": "application/json"
        },
        body : JSON.stringify(obj),
    })

    if(!response.ok){
        console.log("addToList = createAsyncThunk faild")   
    }

    return await response.json()

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

const fetchTaskDetails = createAsyncThunk(
    'todoList/fetchTaskDetails',
    async (id) => {
      const response = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'GET',
      });
  
      if (!response.ok) {
        console.log('fetchTaskDetails -> GET failed');
      }
  
      return await response.json();
    }
  );

  const deleteCurrentData = createAsyncThunk("todoList/deleteCurrentData", async (id) => {
    const response = await fetch(`http://localhost:5000/todos/${id}`, {
        method : "DELETE"
    })

    if(!response.ok){
        console.log("todoList/deleteCurrentData failed");
    }

    return await response.json()

  })

const todoSlice = createSlice({
    name : "todoSlice",
    initialState : {
        list : [],
        selectedData : null,
    },
    reducers : {
        // detailPageData : (state, action) =>{
        //     state.selectedData = action.payload
        // },
        fetchDetails : (state, action) => {                 
           
            state.selectedData = state.list.find((val, idx) => val.id === action.payload);
        }
    },
    extraReducers : (builder) => {
        builder.addCase(addToList.fulfilled, (State, action) => {
            State.list.unshift(action.payload)
            
        }).addCase(getAllList.fulfilled, (State, action) => {
            State.list = action.payload
        }).addCase(fetchTaskDetails.fulfilled, (state, action) => {
            state.selectedData = action.payload;
          }).addCase(deleteCurrentData.fulfilled, (state, action) => {

            state.selectedData = null;
            state.list = state.list.filter((val, idx) => {return val.id === action.payload.id})

          })
    }

})

export default todoSlice.reducer
export const{detailPageData, fetchDetails} = todoSlice.actions
export {addToList, getAllList, fetchTaskDetails, deleteCurrentData}