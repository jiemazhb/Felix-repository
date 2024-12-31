import React, { useContext } from "react";
import { UserContext } from "./UserInfoProvider";
import { useDispatch, useSelector } from "react-redux";
//import { switchColor } from "../Redux/ColorSlice";
import { asyncSwitchColor } from "../Redux/ColorSlice";

export default function User() {
  const { obj, handleUserInfo } = useContext(UserContext);

  const objState = useSelector((state) => state.myColorSlice)
  
  const myDispatch = useDispatch();

  function handleName() {
    handleUserInfo();
  }

  // const handleColor = () => {
  //   myDispatch(switchColor())
  // }

  const handleSwitchColor = () => {
    myDispatch(asyncSwitchColor()); // 调用异步切换颜色操作
  };

  const fontColor = objState.color === "black" ? "white" : "black";

  return (
    <div style={{backgroundColor : objState.color, color: fontColor}}>
      <h1>useReducer</h1>
      <h3>{obj.name}</h3>
      <button onClick={handleName}>context - change name</button>
      <button onClick={handleSwitchColor}>redux - change back ground</button>
    </div>
  );
}
