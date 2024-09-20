import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import "./App.css";
import About from "./pages/About";

import Services from "./pages/Services";

import Home from "./pages/Home";
export default function App() {
  return (
    <div>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </>
    </div>
  );
}
