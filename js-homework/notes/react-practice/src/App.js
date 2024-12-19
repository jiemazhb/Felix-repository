import logo from './logo.svg';
import HomePage from './MainPageLayout'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Day11 from './Day11/Day11'
import Day12 from './Day12/Day12'
import Day13 from './Day13/Day13'
import Other from './Ohter/Other'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}>
          <Route index element = {<Day11/>} />
          <Route path='day12' element = {<Day12/>} />
          <Route path='day13' element = {<Day13/>} />
          <Route path='other' element = {<Other/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
