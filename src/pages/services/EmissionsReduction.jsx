import {
  LineChart,
  Factory,
  Truck,
  Zap,
  ArrowRight,
  Clipboard,
  Target,
  Rocket,
} from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";
import { motion, useInView } from "framer-motion";

const Section = ({ children }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function EmissionsReductionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Section>
          <section className="-mt-20 w-full pt-20 pb-12 md:pt-24 md:pb-24 lg:pt-32 lg:pb-32 bg-gradient-to-br from-blue-600 via-blue-500 to-green-400">
            <div className="container mx-auto max-w-7xl px-4 md:px-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Emissions Reduction Planning
                </h1>
                <p className="max-w-[900px] text-blue-100 md:text-3xl font-bold">
                  Unlocking the true potential of hydrogen for a cleaner future
                </p>
              </div>
            </div>
          </section>
        </Section>

        <Section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-12 text-center">
                Our Emissions Reduction Approach
              </h2>
              <div className="grid gap-6 lg:grid-cols-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4">
                    <Clipboard className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Assessment</h3>
                  <p className="text-gray-600">
                    Comprehensive analysis of current emissions and reduction
                    opportunities.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4">
                    <Target className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Strategy</h3>
                  <p className="text-gray-600">
                    Development of tailored hydrogen implementation strategies.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4">
                    <Rocket className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Implementation</h3>
                  <p className="text-gray-600">
                    Guided execution of emissions reduction initiatives.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4">
                    <LineChart className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Monitoring</h3>
                  <p className="text-gray-600">
                    Continuous tracking and optimization of reduction efforts.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Section>

        <Section>
          <section className="w-full py-6 md:py-12 lg:py-18 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold tracking-tighter">
                    Understanding Hydrogen's Potential
                  </h2>
                  <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl">
                    We realize the potential for hydrogen to be used in many unique
                    applications, including the industrial, transportation, and power sectors.
                    Our goal is to help our partners reach their emission reduction goals by producing a clean,
                    sustainable chemical feedstock through renewable energy assets. Overseeing the entire transformation 
                    of electrons into fuel molecules ensures customers maintain a stable hydrogen supply, free from price 
                    fluctuations caused by supply chain limitations.
                  </p>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emissions%20reductions.jpg-EwN7gOWxh0dD6uiXrnK2FcvBsPg6Fs.jpeg"
                    alt="Industrial emissions and clean energy symbolism"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </Section>
        <Section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-12 text-center">
                Sector-Specific Applications
              </h2>
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4">
                    <Factory className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Industrial Sector</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Process heat generation</li>
                    <li>Chemical feedstock</li>
                    <li>Steel manufacturing</li>
                    <li>Industrial fuel replacement</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4">
                    <Truck className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Transportation Sector
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Heavy-duty vehicles</li>
                    <li>Fleet operations</li>
                    <li>Material handling</li>
                    <li>Refueling infrastructure</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4">
                    <Zap className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Power Sector</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Grid stabilization</li>
                    <li>Energy storage</li>
                    <li>Backup power systems</li>
                    <li>Combined heat and power</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </Section>
        <Section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
                Ready to Reduce Your Emissions?
              </h2>
              <p className="max-w-[700px] mx-auto text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-2xl/relaxed mb-12">
                Let us help you harness the power of hydrogen to reduce your
                emissions and achieve your sustainability goals. Contact us
                today to begin your journey towards a cleaner future.
              </p>
              <Link to="/contact">
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </Link>
            </div>
          </section>
        </Section>
      </main>
    </div>
  );
}
