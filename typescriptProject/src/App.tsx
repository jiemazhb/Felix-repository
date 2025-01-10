import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './components/Mainpage/Mainpage';
import { Provider } from 'react-redux';
import todoStore from './Redux/todoStore';
import DetailPage from './components/DetailPage/DetailPage';

const App: React.FC = () => {
  return (
    <Provider store={todoStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/details/:detailsId" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
