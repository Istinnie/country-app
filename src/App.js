
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Logo from './components/Logo';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';

function App() {
  return (
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/logo" element={<Logo/>}></Route>
      <Route path="/*" element={<ErrorPage/>}></Route>
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
