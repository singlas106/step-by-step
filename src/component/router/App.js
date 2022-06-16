import React from "react";
import Home from "./Home";
import About from "./About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div classsName="App">
      <ul className="App">
        <li>
          <Link to="/About">About Us</Link>
        </li>
        <li>
          <Link to="/Home">Home Us</Link>
        </li>
      </ul>
      <Router>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
