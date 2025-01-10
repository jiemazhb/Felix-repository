// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Mainpage from './components/Mainpage/Mainpage';
// import { Provider } from 'react-redux';
// import todoStore from './Redux/todoStore';
// import DetailPage from './components/DetailPage/DetailPage';
import Parent from './components/SelfPractice/Parent'
import Child from './components/SelfPractice/Child'

const App: React.FC = () => {
  return (
    // <Provider store={todoStore}>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Mainpage />} />
    //       <Route path="/details/:detailsId" element={<DetailPage />} />
    //     </Routes>
    //   </BrowserRouter>
    // </Provider>
    <div style={{margin : "100px"}}>
      <Parent>

      </Parent>
      <Child></Child>      
    </div>

  );
};

export default App;
