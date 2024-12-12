import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
export default function TodoList() {
  const [content, setContent] = useState("");
  const [list, setList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAdd = () => {
    if (content.trim() === "") {
      return;
    }

    if (editingIndex !== null) {
      const updatedList = [...list];
      updatedList[editingIndex] = content;
      setList(updatedList);
      setEditingIndex(null);
    } else {
      setList([...list, content]);
    }

    setContent(" ");
  };

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleDelete = (inx) => {
    const updatedList = list.filter((_, index) => index !== inx);
    setList(updatedList);
  };

  const handleEdit = (index) => {
    const val = list[index];
    setContent(val);
    setEditingIndex(index);
  };

  return (
    <>
      <h1>TODO LIST</h1>
      <hr></hr>

      <TextField
        label="task"
        id="outlined-size-small"
        placeholder="placeholder"
        size="small"
        value={content}
        onChange={handleChange}
      />

      <Button variant="contained" onClick={handleAdd}>
        ADD
      </Button>

      <ul>
        {list.map((task, index) => {
          return (
            <li
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>{task}</span>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </Button>
              </Box>
            </li>
          );
        })}
      </ul>
    </>
  );
}
