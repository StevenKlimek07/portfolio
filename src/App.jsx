import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";

import AboutMe from "./components/AboutMe.jsx";
import Contacts from "./components/Contacts.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link className="nav-link" id="about" to="/about">About Steve</Link>
        <Link className="nav-link" id="contact" to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>

    </BrowserRouter>
  );
}

