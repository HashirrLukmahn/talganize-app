import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AppRoutes from './app-routes/AppRoutes';

function App() {
  return (
    <div className="App">
      <AppRoutes />

      {/* <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.Home} element={<Home pageType="Homepage" />} />
          <Route path={AppRoutes.Login} element={<Login pageType="Login" />} />
          <Route path={AppRoutes.Register} element={<Register pageType="Register" />} />
          <Route path={AppRoutes.ForgotPassword} element={<ForgotPassword pageType="ForgotPassword" />} />
          <Route path={AppRoutes.ResetPassword} element={<ResetPassword pageType="ResetPassword" />} />
          <Route path={AppRoutes.ResetPassword} element={<ResetPassword pageType="ResetPassword" />} />

          <Route path={AppRoutes.Content} element={<Content pageType="Content" />} />

          <Route path={AppRoutes.Profile} element={<Profile />} />
          <Route path={AppRoutes.SavedJobs} element={<SavedJobs />} />
          <Route path={AppRoutes.JobPost} element={<JobPostMain />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
