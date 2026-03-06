import { BrowserRouter, Routes, Route } from "react-router";
import { I18nextProvider } from "react-i18next";

import i18n from "/i18n.config";

import "./App.css";

import Nav from "./components/core/Nav";
import Footer from "./components/core/Footer";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Resume from "./routes/Resume";

import Racerloop from "./routes/projects/Racerloop";
import Eddy from "./routes/projects/Eddy";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects/racerloop" element={<Racerloop />} />
          <Route
            path="/projects/the-frightening-nightmare-of-little-eddy"
            element={<Eddy />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
