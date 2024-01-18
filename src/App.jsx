import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Team from "./components/Team";
import CTA from "./components/CTA";
import Stats from "./components/Stats";
import Testimonial from "./components/Testimonial";
import References from "./components/References";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import "./App.css";
import About from "./pages/About";
import Mission from "./pages/Mission";
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
