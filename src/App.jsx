import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";

import i18n from "/i18n.config";

import "./App.css";

import ScrollToTop from "./components/core/ScrollToTop";
import Nav from "./components/core/Nav";
import Footer from "./components/core/Footer";

import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Resume from "./routes/Resume";

import VideoParadiso from "./routes/projects/VideoParadiso";
import Portfolio from "./routes/projects/Portfolio";
import ChateauMaresme from "./routes/projects/ChateauMaresme";

import Racerloop from "./routes/projects/Racerloop";
import Eddy from "./routes/projects/Eddy";
import Minimax from "./routes/projects/Minimax";
import PitFighters from "./routes/projects/PitFighters";
import TheTemple from "./routes/projects/TheTemple";
import Molai from "./routes/projects/Molai";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename="/portfolio-web/">
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects/video-paradiso" element={<VideoParadiso />} />
          <Route path="/projects/portfolio" element={<Portfolio />} />
          <Route
            path="/projects/chateau-maresme"
            element={<ChateauMaresme />}
          />
          <Route path="/projects/racerloop" element={<Racerloop />} />
          <Route
            path="/projects/the-frightening-nightmare-of-little-eddy"
            element={<Eddy />}
          />
          <Route
            path="/projects/adaptive-difficulty-in-board-games"
            element={<Minimax />}
          />
          <Route path="/projects/pit-fighters" element={<PitFighters />} />
          <Route path="/projects/the-temple" element={<TheTemple />} />
          <Route path="/projects/molai" element={<Molai />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
