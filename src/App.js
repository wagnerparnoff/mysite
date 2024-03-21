import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Index from "./pages";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Footer from "./components/Footer/Footer.js"
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
