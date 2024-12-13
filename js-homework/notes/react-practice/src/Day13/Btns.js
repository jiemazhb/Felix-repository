import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function Btns() {
    const[startBtnStatus, setstartBtnStatus] = useState(false)
    const[pauseBtnStatus, setpauseBtnStatus] = useState(true)
    const[countVal, setcountVal] = useState(0)
    const intervalRef = useRef(null); 

    const handleStart = () =>{
        let num = countVal;
        
        setstartBtnStatus(true)
        setpauseBtnStatus(false)

        intervalRef.current = setInterval(() => {
            setcountVal(++num)
        }, 1000);
    }

    const handleReset = () => {
        setstartBtnStatus(false)
        setpauseBtnStatus(true)

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null; 
          }

        setcountVal(0);
    }

    const handlePause = () => {
        setstartBtnStatus(false);
        setpauseBtnStatus(true);
      
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      };

  return (
    <>
      <ButtonGroup sx={{ gap: 2}} variant="contained" aria-label="Basic button group">
        <Button>{countVal}</Button>
        <Button onClick={handleStart} disabled = {startBtnStatus}>start</Button>
        <Button onClick={handlePause} disabled = {pauseBtnStatus}>pause</Button>
        <Button onClick={handleReset}>reset</Button>
      </ButtonGroup>
    </>
  );
}
