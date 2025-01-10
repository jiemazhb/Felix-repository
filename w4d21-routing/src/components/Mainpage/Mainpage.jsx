import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addToList, getAllList, detailPageData} from "../../Redux/todoSlice"
import { Link } from "react-router-dom";

export default function Mainpage() {
  const selector = useSelector((state) => state.todoStore);

  const dispatcher = useDispatch();
  const [content, setContent] = useState("")
  const [textAreaVal, setTextAreaVal] = useState("")

  function handleAddToList(){
    if(content.trim() === "" && textAreaVal.trim() === "") return 
    dispatcher(addToList({task : content, completed: false, date: new Date(), description: textAreaVal}))
    setContent("")
    setTextAreaVal("")
  }

  // const handleDetailPageData = (obj) => {  
  //   dispatcher(detailPageData(obj))
  // }
 
  useEffect(() => {
      dispatcher(getAllList())
  },[])

  return (
    <div style={{margin : "100px"}}>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input placeholder="name of the list" type="text" value={content} onChange={(e) => {setContent(e.target.value)}}/>
        <textarea placeholder="Discription" value={textAreaVal} onChange={(e) => {setTextAreaVal(e.target.value)}}></textarea>
        <button onClick={handleAddToList}>add</button>
      </div>

      <ul>
        {selector.list.map((obj) => {
          const {id, task, completed } = obj;
          
          return (
            <li key={id}>
                {/* <Link to= "/details" state={{id, task, completed}}> */}
                {/* <Link to= "/details" onClick={() => {handleDetailPageData(obj)}}> */}
                <Link to = {`/details/${id}`} >
                  <span style={{marginRight : "40px"}}>{task}</span>
                  <span>{completed? "completed" : "todo"}</span>
                </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
