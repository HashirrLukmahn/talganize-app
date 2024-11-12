import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import * as AppRoutes from './app-routes/AppRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={AppRoutes.Home} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
