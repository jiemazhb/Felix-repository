import React, { useContext, useState } from 'react';
import { todoListContext } from '../contextExample/MyProvider';

export default function ToDoList() {
  const { state, addToList, deleteList } = useContext(todoListContext); 
  const [textVal, setTextVal] = useState("");

  const handleAdd = () => {
    if (textVal.trim() === "") return;

    addToList(textVal)
    setTextVal("")
  };

  const handleChange = (e) => {
    setTextVal(e.target.value);
  };

  function handleDelete(e){
    if (e === null) {
      return
    }
    console.log(e);
    
    deleteList(e)
  }

  return (
    <>
        <input type='text' value={textVal} onChange={(e) => handleChange(e)}></input>
        <button onClick={handleAdd}>Add</button>

        <ul>
          {
            state.list.map((val, index)=>{
              return (
              
                  <li key={index}>{val}
                    <button onClick={() => handleDelete(index)} style={{marginLeft: "20px"}}>delete</button>
                  </li>
              
              )
            })
          }
        </ul>
    </>
  )
}
