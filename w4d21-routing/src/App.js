import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Mainpage from './components/Mainpage/Mainpage'
import { Provider } from 'react-redux';
import todoStore from './Redux/todoStore'

function App() {
  return (
    <Provider store={todoStore}>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Mainpage/>}/>
        </Routes>
      </BrowserRouter>   
    </Provider>
 
  );
}

export default App;
