import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import i18n from '../i18n.config';
import './index.css';

import Nav from './components/Nav';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </I18nextProvider>
  </StrictMode>
);
