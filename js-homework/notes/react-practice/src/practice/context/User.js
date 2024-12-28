import React, { useContext } from "react";
import { UserContext } from "./UserInfoProvider";
import { useDispatch, useSelector } from "react-redux";
import { switchColor } from "../Redux/ColorSlice";

export default function User() {
  const { obj, handleUserInfo } = useContext(UserContext);

  const color = useSelector((state) => state.myColorSlice)
  const myDispatch = useDispatch();

  function handleName() {
    handleUserInfo();
  }

  const handleColor = () => {
    myDispatch(switchColor())
  }

  const fontColor = color === "black" ? "white" : "black";

  return (
    <div style={{backgroundColor : color, color: fontColor}}>
      <h1>useReducer</h1>
      <h3>{obj.name}</h3>
      <button onClick={handleName}>context - change name</button>
      <button onClick={handleColor}>redux - change back ground</button>
    </div>
  );
}
