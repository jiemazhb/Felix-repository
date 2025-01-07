import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addToList, getAllList} from "../../Redux/todoSlice"

export default function Mainpage() {
  const selector = useSelector((state) => state.todoStore);
  const dispatcher = useDispatch();
  const [content, setContent] = useState("")

  function handleAddToList(){
    dispatcher(addToList({task : content}))
  }

  useEffect(() => {
    dispatcher(getAllList())
  },[])

  return (
    <div style={{margin : "100px"}}>
      <div>
        <input type="text" value={content} onChange={(e) => {setContent(e.target.value)}}/>
        <button onClick={handleAddToList}>add</button>
      </div>
      <ul>
        {selector.list.map((obj) => {
          const {id, task, completed } = obj;
          
          return (
            <li key={id}>
              <span style={{marginRight : "40px"}}>{task}</span>
              <span>{!completed? "completed" : "todo"}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
