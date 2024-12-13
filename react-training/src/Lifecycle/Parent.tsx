import React, { useState } from "react";
import { ClassChild } from "./Child";

export default function Parent() {
  const [shown, setShown] = useState(false);

  const handleClick = () => {
    setShown(!shown);
  };
  return (
    <div
      // inline style in jsx, the value has to be string
      style={{
        border: "1px solid red",
        padding: "20px",
      }}
    >
      <h2>Parent component</h2>
      <button onClick={handleClick}>
        {shown ? "Hide Child" : "Show Child"}
      </button>
      {/* {shown && <FunctionChild />} */}
      {shown && <ClassChild />}
    </div>
  );
}
