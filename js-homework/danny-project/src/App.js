import MyProvider from "./contextExample/MyProvider";
import ToDoList from "./contextExample/ToDoList";
import TodoConfig from "./redux/TodoConfig";
import { Provider } from "react-redux";
import ReduxTodoList from './redux/ReduxTodoList'

function App() {
  return (
    <Provider store = {TodoConfig}>
      <MyProvider>
        <ToDoList />
        <ReduxTodoList/>
      </MyProvider>
    </Provider>
  );
}

export default App;
