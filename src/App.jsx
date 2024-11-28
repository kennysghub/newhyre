import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import "./App.css";
import About from "./pages/About";
import Services from "./pages/Services";
import Home from "./pages/Home";

export default function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div>
      {/* Only render Navbar if not on homepage */}
      {!isHomePage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <Footer />
    </div>
  );
}
