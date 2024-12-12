import React from "react";
import NavBar from "./NavBar/ResponsiveAppBar";
import { Box, Container, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function MainPageLayout() {
  return (
    <>
      <NavBar />

      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{ p: 2 }}>
              <Outlet />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
