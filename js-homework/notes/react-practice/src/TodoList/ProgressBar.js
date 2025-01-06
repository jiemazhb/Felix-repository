import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function ProgressBar({ completedTasks, totalTasks }) {
  // 计算进度百分比
  //const progress = (completedTasks / totalTasks) * 100;
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  
  //if (progress === 0) return null;
  
  return (
    <Box display="flex" alignItems="center" width="100%">
      {/* 自定义进度条 */}
      <Box width="80%" mr={1}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 10,
            borderRadius: 5,
            "& .MuiLinearProgress-bar": {
              backgroundColor: "limegreen", // 自定义进度条颜色
            },
          }}
        />
      </Box>

      {/* 文本描述 */}
      <Box>
      <Typography variant="body2" color="textSecondary">
          {totalTasks > 0
            ? `${completedTasks} of ${totalTasks} tasks done`
            : "No tasks to show"}
        </Typography>
      </Box>
    </Box>
  );
}
