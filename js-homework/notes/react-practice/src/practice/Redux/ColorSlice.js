// import { createSlice } from "@reduxjs/toolkit";

// const ColorSlice = createSlice({
//   name: "theme",
//   initialState: "black",
//   reducers: {
//     switchColor: (state) => (state === "black" ? "white" : "black"),
//   },
// });

// // 导出异步 Thunk 操作
// const asyncSwitchColor = () => async (dispatch, getState) => {
//   console.log("Current State:", getState().myColorSlice); // 打印当前状态
//   setTimeout(() => {
//     dispatch(switchColor()); // 模拟异步操作后切换颜色
//   }, 1000);
// };

// export {asyncSwitchColor}
// export default ColorSlice.reducer;
// export const { switchColor } = ColorSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
    name: "theme",
    initialState: {
      color: "black", 
      users: [], 
      loading: false, 
      error: null, 
    },
    reducers: {
      switchColor: (state) => {
        state.color = state.color === "black" ? "white" : "black";
      },
      fetchUsersStart: (state) => {
        state.loading = true;
        state.error = null;
      },
      fetchUsersSuccess: (state, action) => {
        state.loading = false;
        state.users = action.payload; 
      },
      fetchUsersError: (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      },
    },
  });
  
  // 导出异步 Thunk 操作
  const asyncSwitchColor = () => {
    return async (dispatch, getState) => {

      dispatch(fetchUsersStart());
  
      try {

        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
  
        const users = await response.json();
        console.log("Fetched Users:", users);
  
        dispatch(fetchUsersSuccess(users));
  
        dispatch(switchColor());
      } catch (error) {

        console.error("Error fetching users:", error.message);
        dispatch(fetchUsersError(error.message));
      }
    };
  };
  

export {asyncSwitchColor}
export default colorSlice.reducer;
export const { switchColor, fetchUsersStart, fetchUsersSuccess, fetchUsersError} = colorSlice.actions;
