import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { fetchDetails, fetchTaskDetails, deleteCurrentData } from "../../Redux/todoSlice";
export default function DetailPage() {
  //const location = useLocation()
  // const {id, task, completed} = location.state

  const dispatcher = useDispatch();
  const selector = useSelector((state) => {
    return state.todoStore;
  });

  const { detailsId } = useParams();

  useEffect(() => {
    if (selector.list.length > 0) {
      dispatcher(fetchDetails(detailsId)); // 从现有列表中查找
    } else {     
      dispatcher(fetchTaskDetails(detailsId)); // 从后端获取数据
    }
  }, [detailsId, selector.list.length]);

  const handleDelete = () => {
    dispatcher(deleteCurrentData(detailsId))
  }
  
  if (!selector.selectedData) {   
    return 
  }
  const {id, task, completed, date, description } = selector.selectedData;

  return (
    <div style={{ margin: "50px" }}>
      <h1>Task Details</h1>

      <p>
        <strong>ID:</strong> {id}
      </p>
      <p>
        <strong>Task:</strong> {task}
      </p>
      <p>
        <strong>Status:</strong> {completed ? "Completed" : "Todo"}
      </p>
      <p>
        <strong>DATE:</strong> {date}
      </p>
      <p>
        <strong>DISCRIPTION:</strong> {description}
      </p>

      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <button style={{ marginRight: "20px" }} onClick={handleDelete}>delete</button>
        <button>Update</button>
      </div>

      <Link to="/">back to main page</Link>
    </div>
  );
}
