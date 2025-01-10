import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToList, getAllList } from "../../Redux/todoSlice";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../Redux/todoStore";

interface Todo {
  id: string;
  task: string;
  completed: boolean;
  date: string;
  description: string;
}

export default function Mainpage(): JSX.Element {
  // 使用 RootState 类型来推断 state 的类型
  const selector = useSelector((state: RootState) => state.todoStore);

  // 使用 AppDispatch 类型来推断 dispatcher 的类型
  const dispatcher: AppDispatch = useDispatch();

  // 定义局部状态的类型
  const [content, setContent] = useState<string>("");
  const [textAreaVal, setTextAreaVal] = useState<string>("");

  function handleAddToList(): void {
    if (content.trim() === "" && textAreaVal.trim() === "") return;
    dispatcher(
      addToList({
        task: content,
        completed: false,
        date: new Date().toISOString(),
        description: textAreaVal,
      })
    );
    setContent("");
    setTextAreaVal("");
  }

  useEffect(() => {
    dispatcher(getAllList());
  }, [dispatcher]);

  return (
    <div style={{ margin: "100px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          placeholder="name of the list"
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <textarea
          placeholder="Description"
          value={textAreaVal}
          onChange={(e) => {
            setTextAreaVal(e.target.value);
          }}
        ></textarea>
        <button onClick={handleAddToList}>add</button>
      </div>

      <ul>
        {selector.list.map((obj: Todo) => {
          const { id, task, completed } = obj;

          return (
            <li key={id}>
              <Link to={`/details/${id}`}>
                <span style={{ marginRight: "40px" }}>{task}</span>
                <span>{completed ? "completed" : "todo"}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
