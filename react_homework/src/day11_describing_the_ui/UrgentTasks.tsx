export interface TaskType {
  id: number;
  name: string;
  priority: "normal" | "urgent";
}

// const exampleTasks: TaskType[] = [
//   { id: 1, name: "Take out the trash", priority: "normal" },
//   { id: 2, name: "Prepare project presentation", priority: "urgent" },
//   { id: 3, name: "Book flight tickets", priority: "urgent" },
//   { id: 4, name: "Water the plants", priority: "normal" },
//   { id: 5, name: "Complete React tutorial", priority: "urgent" },
// ];

export default function UrgentTasks({ tasks }: { tasks: TaskType[] }) {
  return (
    <div>
      <h1>Urgent Tasks</h1>
      {/* 仅显示优先级为 "urgent" 的任务 */}
      <ul>
        {tasks
          .filter((task) => task.priority === "urgent") // 筛选任务
          .map((task) => ( // 遍历任务并生成 <li> 元素
            <li key={task.id}>
            {task.name} {/* 保证任务名称是独立的 */}
          </li>
          ))}
      </ul>
    </div>
  );
}
