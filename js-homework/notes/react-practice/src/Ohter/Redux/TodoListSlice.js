import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const saveToDatabase = createAsyncThunk(
  "todoList/saveToDatabase",
  async (item) => {
    const response = await fetch("http://localhost:3001/todoList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    if (!response.ok) {
      throw new Error("Failed to save to database");
    }

    return await response.json();
  }
);

const deleteFromDatabase = createAsyncThunk(
  "todoList/deleteFromDatabase",
  async (idx) => {
    const response = await fetch(`http://localhost:3001/todoList/${idx}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("couldn't delete");
    }

    return await response.json();
  }
);

const getAll = createAsyncThunk("todoList/getAll", async () => {
  const response = await fetch("http://localhost:3001/todoList", {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("counldn't fetch the data");
  }

  return await response.json();
});

const changeInputStatus = createAsyncThunk(
  "todoList/changeInputStatus",
  async (obj) => {
    const { id, completed } = obj;

    const response = await fetch(`http://localhost:3001/todoList/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed }),
    });
    if (!response.ok) {
      throw new Error("update failed");
    }

    return await response.json();
  }
);

const editCurrentData = createAsyncThunk("todoList/editCurrentData", async(obj)=>{

  const {id, text} = obj
  
  const response = await fetch(`http://localhost:3001/todoList/${id}`, {
    method : "PATCH",
    headers : {
      "Content-Type" : "application/json",
    },
    body : JSON.stringify({text})
  })

  if(!response.ok){   
    throw new Error("update failed")
  }

  return await response.json()
})

const deleteAllChecked = createAsyncThunk(
  "todoList/deleteAllChecked",
  async (paramFromCaller, obj) => {
          //{ getState, dispatch }
    const {getState} = obj
    const state = getState();
    const todoList = state.todoSlice.list;

    const completedTasks = todoList.filter((item) => item.completed);

    console.log("tesdddding");
    console.log(...completedTasks);


    const deleteRequests = completedTasks.map((task) =>
      fetch(`http://localhost:3001/todoList/${task.id}`, {
        method: "DELETE",
      })
    );


    await Promise.all(deleteRequests);

    return completedTasks.map((task) => task.id)
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    list: [],
    total: 0,
    checked: 0,
    editingId : null
  },
  reducers : {
    setEditingId : (state, action)=>{
      state.editingId = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveToDatabase.fulfilled, (state, action) => {
        state.list.unshift(action.payload);
        state.total++;
      })
      .addCase(deleteFromDatabase.fulfilled, (state, action) => {
        state.list = state.list.filter((objs) => {
          return objs.id !== action.payload.id;
        });
        state.checked = state.list.filter((item) => item.completed).length;
        state.total--;
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.list = action.payload.map((obj) => {
          const { id, text, completed } = obj;
          return { id, text, completed };
        });

        state.total = action.payload.length;
        state.checked = action.payload.filter((item) => {
          return item.completed;
        }).length;
      })
      .addCase(changeInputStatus.fulfilled, (state, action) => {
        const { id, completed } = action.payload;

        const target = state.list.find((val, ind, obj) => {
          return val.id === id;
        });

        if (target) {
          target.completed = completed;
        }

        state.checked = state.list.filter((item) => item.completed).length;
      })
      .addCase(deleteAllChecked.fulfilled, (state, action) => {
        const deletedIds = action.payload;
        state.list = state.list.filter((item) => !deletedIds.includes(item.id));
        state.checked = 0
      }).addCase(editCurrentData.fulfilled, (state, action) => {
        const obj = state.list.find((element) => {
          return element.id === action.payload.id
        })

        obj.text = action.payload.text

      });
  },
});

export default todoSlice.reducer;
export const {setEditingId} = todoSlice.actions
export {
  saveToDatabase,
  deleteFromDatabase,
  getAll,
  changeInputStatus,
  deleteAllChecked,
  editCurrentData
};
