import Footer from "./components/Footer";
import { HashRouter, Routes, Route, useLocation, Link } from "react-router-dom";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import "./App.css";
import About from "./pages/About";
import Services from "./pages/Services";
import IntegrationSupport from "./pages/services/IntegrationSupport";
import EmissionsReduction from "./pages/services/EmissionsReduction";
import TechnologyConsulting from "./pages/services/TechnologyConsulting";
import Home from "./pages/Home";
import CaliforniaHydrogenPotential from "./pages/CaliforniaHydrogenPotential"; // Import the new page
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div>
      {/* Only render Navbar if not on homepage */}
      <ScrollToTop />
      {!isHomePage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route
          path="/california-hydrogen-potential"
          element={<CaliforniaHydrogenPotential />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services">
          <Route index element={<Services />} />
          <Route path="integration-support" element={<IntegrationSupport />} />
          <Route path="emissions-reduction" element={<EmissionsReduction />} />
          <Route
            path="technology-consulting"
            element={<TechnologyConsulting />}
          />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

// function MainApp() {
//   // Check the current location
//   const location = useLocation();
//   const isHomePage = location.pathname === "/";
//     return (
//     <div>
//       {/* Only render Navbar if not on homepage */}
//       <ScrollToTop />
//       {!isHomePage && <Navbar />}

//       <Routes>
//         <Route path="/" element={<Home />} />
//           <Route index element={<Home />} />
//           <Route path="/california-hydrogen-potential" element={<CaliforniaHydrogenPotential />}/>
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/services">
//           <Route index element={<Services />} />
//           <Route path="integration-support" element={<IntegrationSupport />} />
//           <Route path="emissions-reduction" element={<EmissionsReduction />} />
//           <Route
//             path="technology-consulting"
//             element={<TechnologyConsulting />}
//           />
//         </Route>
//       </Routes>
//       <Footer />
//     </div>
//     );
// }

// export default function App() {
//   return (
//     <HashRouter>
//       {/* Render MainApp inside HashRouter */}
//       <MainApp />
//     </HashRouter>
//   );
// }
