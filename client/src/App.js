import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import * as AppRoutes from './app-routes/AppRoutes';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import ResetPassword from './pages/resetPassword/ResetPassword';
import Content from './components/content/Content';
import Profile from './components/jobseeker/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.Home} element={<Home />} />
          <Route path={AppRoutes.Login} element={<Login />} />
          <Route path={AppRoutes.Register} element={<Register />} />
          <Route path={AppRoutes.ForgotPassword} element={<ForgotPassword />} />
          <Route path={AppRoutes.ResetPassword} element={<ResetPassword />} />
          <Route path={AppRoutes.Jobs} element={<Content />} />
          <Route path={AppRoutes.Profile} element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
