import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { msalInstance } from './hooks/auth-provider-ms';
import { MsalProvider } from '@azure/msal-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={"261893817087-mh9j7ieq35d5r1v9j5drvha4hosql1sq.apps.googleusercontent.com"}>
    <MsalProvider instance = {msalInstance}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </MsalProvider>
  </GoogleOAuthProvider>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
