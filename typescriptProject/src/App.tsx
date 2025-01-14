// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Mainpage from './components/Mainpage/Mainpage';
import { Provider } from "react-redux";
import todoStore from "./Redux/todoStore";
// import DetailPage from './components/DetailPage/DetailPage';

// import Parent from './components/SelfPractice/Parent'
// import Child from './components/SelfPractice/Child'

import List from "./components/SelfPractice/List";
import FeedbackSystem from "./components/VoteCard/FeedbackSystem";
import Practice from "./components/Practice/Practice";
import Dashboard from './components/Practice/Child'
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

    <Provider store={todoStore}>
      <div style={displayStyle()}>
        {/* <List /> */}
        {/* <FeedbackSystem/> */}
        <Practice/>
      </div>
    </Provider>

    // <div style={{margin : "100px"}}>
    //   <Parent>
    //   </Parent>
    //   <Child></Child>
    // </div>
  );
};

export default App;

const displayStyle = (): React.CSSProperties => {
  return {
    marginLeft: "50px",
    marginRight: "50px",
    display: "flex",
    flexWrap: "wrap", 
    gap: "20px",
    justifyContent: "center",
  };
};
