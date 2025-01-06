import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  saveToDatabase,
  deleteFromDatabase,
  getAll,
  changeInputStatus,
  deleteAllChecked,
  editCurrentData,
  setEditingId,
} from "../Ohter/Redux/TodoListSlice";

import ProgressBar from "./ProgressBar";

export default function TodoList() {
  const [textVal, settextVal] = useState("");
  const [editingBox, setEditingBox] = useState("")
  const selector = useSelector((state) => {
    return state.todoSlice;
  });
  const dispatcher = useDispatch();

  function handleChange(e) {
    settextVal(e.target.value);
  }

  const handleAdd = () => {
    if (textVal.trim() === "") return;

    dispatcher(saveToDatabase({ text: textVal, completed: false }));

    settextVal("");
  };

  function handleDelete(idx) {
    const obj = selector.list.find((obj) => {
      return obj.id === idx;
    });

    if (!obj.completed) {
      return;
    }

    dispatcher(deleteFromDatabase(idx));
  }

  function handleEdit( idx, text) {

    const obj = selector.list.find((obj) => {
      return obj.id === idx;
    });

    if (!obj.completed) {
      return;
    }

    if(selector.editingId !== idx){
      setEditingBox(text)
      dispatcher(setEditingId(idx))
    }else{   
    
      dispatcher(editCurrentData({id : idx, text: editingBox}))
      dispatcher(setEditingId(null))
    }
  

  
  }

  useEffect(() => {
    dispatcher(getAll());
  }, []);

  const handleInputStatus = (e, newStatus) => {
    dispatcher(changeInputStatus({ id: e, completed: newStatus }));
  };

  const handleDelteAll = () => {
    dispatcher(deleteAllChecked());
  };

  return (
    <div>
      <h1>TODOLIST</h1>
      <div>
        <input type="text" value={textVal} onChange={(e) => handleChange(e)} />
        <button onClick={handleAdd}> + </button>
      </div>

      <ul>
        {selector.list.map((obj) => {
          const { id, text, completed } = obj;

          return (
            <li
              key={id}
              style={{
                display: "flex",
                justifyContent: "space-between", // 两端对齐
                alignItems: "center", // 垂直居中
                listStyle: "none", // 移除小圆点
                padding: "10px", // 内边距
                borderBottom: "1px solid #ccc", // 添加分隔线
                margin: "5px 0", // 上下间距
              }}
            >
              <input
                type="checkbox"
                checked={completed}
                onChange={() => handleInputStatus(id, !completed)}
              />

              {selector.editingId !== id ? (
                <span
                  style={{
                    textDecoration: completed ? "line-through" : "none",
                  }}
                >
                  {text}
                </span>
              ) : (
                <input
                  type="text"
                  value={editingBox}
                  onChange={(e) => setEditingBox(e.target.value)}
                />
              )}

              <div style={{ display: "inline" }}>
                <button onClick={() => handleEdit(id, text)}> {selector.editingId === id ? "save" : "edit"}</button>
                <button onClick={() => handleDelete(id)}>delete</button>
              </div>
            </li>
          );
        })}

        <ProgressBar
          completedTasks={selector.checked}
          totalTasks={selector.total}
        />
        <button onClick={handleDelteAll}>remove checked</button>
      </ul>
    </div>
  );
}
