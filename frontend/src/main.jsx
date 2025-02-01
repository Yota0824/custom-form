import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Routes,Route } from "react-router";
import TopPage from './pages/TopPage.jsx';
import CompletePage from './pages/CompletePage.jsx';
import PostPractice from './pages/PostPractice.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TopPage />} />
        <Route path='/complete' element={<CompletePage />} />
        <Route path='/post' element={<PostPractice />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
