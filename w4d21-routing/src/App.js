import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Mainpage from './components/Mainpage/Mainpage'
import { Provider } from 'react-redux';
import todoStore from './Redux/todoStore'
import DetailPage from './components/DetailPage/DetailPage'
import General from './components/General/General'
import Assistant from './components/General/Assistant'

function App() {
  return (
    <Provider store={todoStore}>
      <BrowserRouter>
        <Routes>
          {/* <Route path = "/" element = {<Mainpage/>}/> */}
                    <Route path = "/" element ={<General person = {{name: "Danny", age : 23}} career = "software" school = "long beach"/>}/>
          <Route path = "/details/:detailsId" element = {<DetailPage/>}/>

          <Route path='assistant' element ={<Assistant/>}/>
            
        </Routes>
      </BrowserRouter>   
    </Provider>
 
  );
}

export default App;
