import { Routes, Route } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
