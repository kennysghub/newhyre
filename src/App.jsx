import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import "./App.css";
import About from "./pages/About";
// import Mission from "./pages/Mission";
import Services from "./pages/Services";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route
          path="/"
          element={
            <div>
              <Hero />
              <Testimonial />
              <Stats />
              <Team />
              <References />
              <CTA />
            </div>
          }
        /> */}
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* <Route path="/mission" element={<Mission />} /> */}
        <Route path="/services" element={<Services />} />

        {/* Add other routes here */}
      </Routes>
      <Footer />
    </>
  );
}
