import Mission from "../components/Mission";
import Team from "../components/Team";
import Services from "../components/Services";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function About() {
  return (
    // <div className="bg-custom-bg">
    //   <div className="flex flex-col items-center py-10">
    //     <div className="max-w-5xl w-full px-6 lg:px-8">
    //       <h1 className="text-4xl font-bold tracking-tight text-header-3 sm:text-5xl text-center">
    //         Experienced experts in hydrogen produced via renewable electrolysis.
    //       </h1>
    //     </div>
    //   </div>
    //   <Mission />
    //   <Team />
    //   <Services />
    // </div>
    <div>
      {/* <Navbar /> */}
      <Hero />
      <CTA />
      <Team />
      <Services />
    </div>
  );
}
