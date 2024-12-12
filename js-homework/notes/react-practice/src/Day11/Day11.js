import React from "react";
import { Box, Grid } from "@mui/material";
import Paragraph from './paragraph'
import UnclickableBtn from './unclickableBtn'
export default function Day11() {
  return (
    <>
      <Grid container spacing={2}>
        {/* 第一行 */}
        <Grid item xs={12}>
          <Box sx={{ bgcolor: "secondary.light", p: 2 }}>
            <h1>Homework ： Describing the UI</h1>
          </Box>
        </Grid>

        {/* 第二行 */}
        <Grid item xs={12}>
          <Box sx={{ bgcolor: "info.light", p: 2 }}>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box sx={{ bgcolor: "primary.light", p: 2 }}>
                  <UnclickableBtn />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ bgcolor: "secondary.light", p: 2 }}>
                  <Paragraph />
                </Box>
              </Grid>
            </Grid>
            
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
