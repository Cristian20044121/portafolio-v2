import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
