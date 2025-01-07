import HomePage from './MainPageLayout'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Day11 from './Day11/Day11'
import Day12 from './Day12/Day12'
import Day13 from './Day13/Day13'
import Other from './Ohter/Other'
import Day16 from './Day16/Day16'
import Day18 from './Day18/Day18'
import Practice from './practice/Practice'
import TodoList from './TodoList/TodoList'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}>
          <Route index element = {<Day11/>} />
          <Route path='day12' element = {<Day12/>} />
          <Route path='day13' element = {<Day13/>} />
          <Route path='day16' element = {<Day16/>} />
          <Route path='day18' element = {<Day18/>} />
          <Route path='practice' element = {<Practice/>} />
          <Route path='TodoList' element = {<TodoList/>}/>
        </Route>
        <Route path='other' element = {<Other/>} />
      </Routes>
    </Router>
  );
}

export default App;
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector} from 'react-redux';
// import { fetchTodos } from './Day18/redux/slices/todosSlice';
// import ThemeSwitcher from './Day18/redux/components/ThemeSwitcher';
// import TodoList from './Day18/redux/components/TodoList'
// import TodoForm from './Day18/redux/components/TodoForm'

// function App() {
//   const dispatch = useDispatch();
//   const theme = useSelector((state) => state.theme);

//   useEffect(() => {
//     dispatch(fetchTodos());
//   }, [dispatch]);

//   return (
//     <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
//       <ThemeSwitcher />
//       <TodoForm />
//       <TodoList />
//     </div>
//   );
// }

// export default App;

