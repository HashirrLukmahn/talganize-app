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
import SavedJobs from './components/jobseeker/SavedJobs';
import JobPostMain from './components/jobPost/JobPostMain';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.Home} element={<Home pageType="Homepage" />} />
          <Route path={AppRoutes.Login} element={<Login pageType="Login" />} />
          <Route path={AppRoutes.Register} element={<Register pageType="Register" />} />
          <Route path={AppRoutes.ForgotPassword} element={<ForgotPassword pageType="ForgotPassword" />} />
          <Route path={AppRoutes.ResetPassword} element={<ResetPassword pageType="ResetPassword" />} />
          <Route path={AppRoutes.Jobs + '/*'} element={<Content pageType="Normal" />} />
          <Route path={AppRoutes.Profile} element={<Profile />} />
          <Route path={AppRoutes.SavedJobs} element={<SavedJobs />} />
          <Route path={AppRoutes.JobPost} element={<JobPostMain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
