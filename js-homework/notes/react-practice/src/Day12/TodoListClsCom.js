import React, { Component } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default class TodoListClsCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "", 
      list: [], 
      editingIndex: null, 
    };
  }

  handleAdd = () => {
    const { content, list, editingIndex } = this.state;

    if (content.trim() === "") {
      return;
    }

    if (editingIndex !== null) {

      const updatedList = [...list];
      updatedList[editingIndex] = content;
      this.setState({ list: updatedList, editingIndex: null, content: "" });
    } else {

      this.setState({ list: [...list, content], content: "" });
    }
  };

  handleChange = (e) => {
    this.setState({ content: e.target.value });
  };

  handleDelete = (indexToDelete) => {
    const { list } = this.state;
    const updatedList = list.filter((_, index) => index !== indexToDelete);
    this.setState({ list: updatedList });
  };

  handleEdit = (indexToEdit) => {
    const { list } = this.state;
    const task = list[indexToEdit];
    this.setState({ content: task, editingIndex: indexToEdit });
  };

  render() {
    const { content, list } = this.state;

    return (
      <>
        <h1>TODO LIST</h1>
        <hr />

        <TextField
          sx={{ display: "flex", marginBottom: 2 }}
          label="task"
          id="outlined-size-small"
          placeholder="placeholder"
          size="small"
          value={content}
          onChange={this.handleChange}
        />

        <Button variant="contained" onClick={this.handleAdd}>
          {this.state.editingIndex !== null ? "Save" : "Add"}
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
                    onClick={() => this.handleDelete(index)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => this.handleEdit(index)}
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
}
