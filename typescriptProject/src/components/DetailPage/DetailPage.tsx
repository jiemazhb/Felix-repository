import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchDetails, fetchTaskDetails, deleteCurrentData } from "../../Redux/todoSlice";
import { AppDispatch, RootState } from "../../Redux/todoStore";

const DetailPage: React.FC = () => {
  // 使用 AppDispatch 类型来强类型化 dispatcher
  const dispatcher: AppDispatch = useDispatch();

  // 使用 RootState 类型为 selector 提供类型支持
  const selector = useSelector((state: RootState) => state.todoStore);

  // 获取路由参数的类型
  const { detailsId } = useParams<{ detailsId: string }>();

  useEffect(() => {
    if (detailsId) {
      if (selector.list.length > 0) {
        dispatcher(fetchDetails(detailsId)); // 从现有列表中查找
      } else {
        dispatcher(fetchTaskDetails(detailsId)); // 从后端获取数据
      }
    }
  }, [detailsId, selector.list.length, dispatcher]);

  const handleDelete = (): void => {
    if (detailsId) {
      dispatcher(deleteCurrentData(detailsId));
    }
  };

  // 如果 selectedData 为空，直接返回 null
  if (!selector.selectedData) {
    return null;
  }

  const { id, task, completed, date, description } = selector.selectedData;

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
        <strong>DESCRIPTION:</strong> {description}
      </p>

      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <button style={{ marginRight: "20px" }} onClick={handleDelete}>
          delete
        </button>
        <button>Update</button>
      </div>

      <Link to="/">back to main page</Link>
    </div>
  );
};

export default DetailPage;
