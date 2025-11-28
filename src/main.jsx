import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { I18nextProvider } from "react-i18next";

import i18n from "/i18n.config";
import "./index.css";

import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </I18nextProvider>
  </StrictMode>
);
