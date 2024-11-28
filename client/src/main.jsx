import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.jsx'
import UserProfile from './pages/usr/UserProfile.jsx';
import AdminProfile from './pages/adm/AdminProfile.jsx';
import AdminSettings from './pages/adm/AdminSettings.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/adm/profile" element={<AdminProfile />} >
        <Route path="/settings" element={<AdminSettings />} />
      </Route>
      <Route path="/usr/profile" element={<UserProfile />} />

      <Route></Route>

    </Routes>
  </BrowserRouter>,
)
