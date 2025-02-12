import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css';
import CompletePage from './pages/CompletePage.jsx';
import PostPractice from './pages/PostPractice.jsx';
import TopPage from './pages/TopPage.jsx';
import WebFlyerPage from './pages/WebFlyerPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TopPage />} />
        <Route path='/complete' element={<CompletePage />} />
        <Route path='/post' element={<PostPractice />} />
        <Route path='/web-flyer-form' element={<WebFlyerPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
