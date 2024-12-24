import HomePage from './MainPageLayout'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Day11 from './Day11/Day11'
import Day12 from './Day12/Day12'
import Day13 from './Day13/Day13'
import Other from './Ohter/Other'
import Day16 from './Day16/Day16'
import Day18 from './Day18/Day18'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}>
          <Route index element = {<Day11/>} />
          <Route path='day12' element = {<Day12/>} />
          <Route path='day13' element = {<Day13/>} />
          <Route path='other' element = {<Other/>} />
          <Route path='day16' element = {<Day16/>} />
          <Route path='day18' element = {<Day18/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
