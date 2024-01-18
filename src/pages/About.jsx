import Mission from "../components/Mission";
import Team from "../components/Team";
import Services from "../components/Services";
import { useState } from "react";
import about1 from "../assets/about/about-1.avif";
import about2 from "../assets/about/about-2.avif";
import about3 from "../assets/about/about-3.avif";
import about4 from "../assets/about/about4.avif";
import about5 from "../assets/about/about-5.avif";
import about6 from "../assets/about/about-6.avif";

export default function About() {
  return (
    <div className="bg-white">
      <div className="flex flex-col items-center py-10">
        <div className="max-w-5xl w-full px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center">
            Experienced experts in hydrogen produced via renewable electrolysis.
          </h1>
        </div>
      </div>
      <Mission />
      <Team />
      <Services />
    </div>
  );
}
