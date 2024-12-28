import React from "react";
import BackGroundProvider from "./BackGroundProvider";
import MainWindow from "./MainWindow";
import TodoList from "./homework/TodoList";
import { TodoProvider } from "./homework/TodoContext";


export default function Day18() {
  return (
    <>
    
      <BackGroundProvider>
        <MainWindow />
      </BackGroundProvider>

      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </>
  );
}

// export default function Day18() {
//   return (
//     <TodoProvider>
//       <BackGroundProvider>
//         <MainWindow />
//         <CalTodo />
//       </BackGroundProvider>
//     </TodoProvider>
//   );
// }
