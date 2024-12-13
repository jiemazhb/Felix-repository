import React from "react";
import TodoList from "./TodoList";
import { Box, Grid } from "@mui/material";
import TodoListClsCom from './TodoListClsCom'

export default function Day12() {
  return (
    <>
      <Grid container spacing={2}>
        {/* 第一行 */}
        <Grid item xs={12}>
          <Box sx={{p: 2 }}>
            <h1>Homework: Adding Interactivity</h1>
            <h3>write a todolist with add, delete, edit feature</h3>
          </Box>
        </Grid>

        {/* 第二行 */}
        <Grid item xs={12}>
          <Box sx={{ p: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box sx={{p: 2 }}>
                  <TodoList />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{p: 2 }}>
                  <TodoListClsCom/>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
