import logo from './logo.svg';
import HomePage from './MainPageLayout'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Day11 from './Day11/Day11'
import Day12 from './Day12/Day12'
import Day13 from './Day13/Day13'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}>
          <Route path='day11' element = {<Day11/>} />
          <Route path='day12' element = {<Day12/>} />
          <Route path='day13' element = {<Day13/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
