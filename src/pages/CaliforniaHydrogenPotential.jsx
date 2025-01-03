import React from "react";
import { motion } from "framer-motion";
import MainChart from "../components/Charts/MainChart";
import Navbar from "../components/Navbar";

const CaliforniaHydrogenPotential = () => {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Page Content */}
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          California Hydrogen Potential
        </h1>
        <p className="text-lg text-gray-700 mb-6">
        Renewable energy curtailment presents a unique opportunity for clean hydrogen production. 
        The interactive chart below showcases data from the California Independent System Operator (CAISO), 
        highlighting the growing need for innovative energy storage solutions as renewable energy capacity expands. 
        Explore how current electrolyzer technologies can transform curtailed electricity into hydrogen, 
        paving the way for greater renewable energy integration and utilization.
        </p>

        {/* Main Chart Section */}
        <motion.div
          className="w-full py-24 bg-gray-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <MainChart />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CaliforniaHydrogenPotential;
