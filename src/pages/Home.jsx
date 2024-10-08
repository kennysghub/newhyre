// import { ArrowRight } from "lucide-react";
// import home from "../assets/home/home.jpeg";
// import energyStorage from "../assets/home/energy-storage.png";
// import hvdFueling from "../assets/home/hvd-fueling.jpeg";
// import industrialDecarbonization from "../assets/home/industrial-decarbonization.jpeg";
// import MainChart from "../components/Charts/MainChart";

// const HomePage = () => {
//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 text-lg">
//       <header className="py-8">
//         <h1 className="text-5xl font-bold text-custom-blue">Hyre Energy LLC</h1>
//       </header>

//       <main className="space-y-16">
//         <section className="grid md:grid-cols-3 gap-12 items-start">
//           <div className="md:col-span-1">
//             <h2 className="text-4xl font-semibold mb-6 text-custom-yellow">
//               A hydrogen project development company.
//             </h2>
//             <p className="mb-6 text-xl">
//               Guided by scientific expertise and driven by a commitment to
//               sustainability
//             </p>
//             <ul className="space-y-4 text-xl">
//               <li className="flex items-center">
//                 <ArrowRight
//                   className="mr-3 text-custom-yellow flex-shrink-0"
//                   size={28}
//                 />
//                 <span>Take your business to new heights with Hyre Energy.</span>
//               </li>
//               <li className="flex items-center">
//                 <ArrowRight
//                   className="mr-3 text-custom-yellow flex-shrink-0"
//                   size={28}
//                 />
//                 <span>Unlock higher success through hydrogen innovation.</span>
//               </li>
//               <li className="flex items-center">
//                 <ArrowRight
//                   className="mr-3 text-custom-yellow flex-shrink-0"
//                   size={28}
//                 />
//                 <span>
//                   Achieve lower emissions in an increasingly polluted world.
//                 </span>
//               </li>
//             </ul>
//             <div className="mt-8 bg-gradient-to-r from-custom-blue to-custom-yellow p-8 rounded-xl shadow-md opacity-95">
//               <p className="text-2xl mb-4 text-gray-800">
//                 Renewable energy provides an opportunity to produce clean fuels
//                 for many difficult to decarbonize end-uses.
//               </p>
//               <p className="text-xl mb-4 text-gray-800">
//                 Three hard-to-abate sectors dependent on the success of hydrogen
//                 technology deployment:
//               </p>

//               <ul className="space-y-4 text-xl">
//                 <li
//                   className="flex items-center cursor-pointer hover:text-white transition-colors"
//                   onClick={() => scrollToSection("hdv-fueling")}
//                 >
//                   <span className="text-white mr-3">•</span>
//                   <span className="underline flex items-center cursor-pointer hover:text-white transition-colors">
//                     Heavy-duty-vehicle (HDV) fueling
//                   </span>
//                 </li>
//                 <li
//                   className="flex items-center cursor-pointer hover:text-white transition-colors"
//                   onClick={() => scrollToSection("industrial-decarbonization")}
//                 >
//                   <span className="text-white mr-3">•</span>
//                   <span className="underline flex items-center cursor-pointer hover:text-white transition-colors">
//                     Industrial decarbonization
//                   </span>
//                 </li>
//                 <li
//                   className="flex items-center cursor-pointer hover:text-white transition-colors"
//                   onClick={() => scrollToSection("energy-storage")}
//                 >
//                   <span className="text-white mr-3">•</span>
//                   <span className="underline flex items-center cursor-pointer hover:text-white transition-colors">
//                     Energy Storage
//                   </span>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="md:col-span-2">
//             <img
//               src={home}
//               alt="Hyre Energy concept"
//               // className="w-full h-[400px] object-cover rounded-xl shadow-xl"
//               className="w-full h-[650px] object-cover rounded-xl shadow-2xl ml-10 mt-10 border-custom-blue border-2"
//             />
//           </div>
//         </section>

//         <section id="hdv-fueling">
//           <h2 className="text-3xl font-semibold mb-8 text-custom-blue">
//             HDV Fueling
//           </h2>
//           <div className="grid md:grid-cols-3 gap-12 items-start">
//             <img
//               src={hvdFueling}
//               alt="HDV Fueling"
//               className="object-cover w-full h-full rounded-xl shadow-xl mt-2"
//             />
//             <div className="md:col-span-2">
//               <ul className="space-y-4 text-xl">
//                 <li className="flex items-start">
//                   <span className="text-custom-yellow mr-3 mt-1.5">•</span>
//                   <span>
//                     Expected 50% increase in total freight from 19.4 billion
//                     tons in 2021 to 28.8 billion tons in 2050
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-custom-yellow mr-3 mt-1.5">•</span>
//                   <span>
//                     Transportation has surpassed electricity generation as the
//                     largest source of carbon emissions in the U.S. with HDV
//                     trucks alone contributing 7% of total GHGs in 2021
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-custom-yellow mr-3 mt-1.5">•</span>
//                   <span>
//                     Associated PM2.5 emissions are 50x higher per each mile
//                     driven for diesel HDV in the U.S.
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-custom-yellow mr-3 mt-1.5">•</span>
//                   <span>
//                     Zero emissions freight (ZEF) network to be achieved by 2040
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-custom-yellow mr-3 mt-1.5">•</span>
//                   <span>
//                     FCEV HDV outperform BEV HDV in number of required stops,
//                     cargo space, fueling time, and vehicle weight
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-custom-yellow mr-3 mt-1.5">•</span>
//                   <span>
//                     FCEV HDV becomes even more cost competitive with diesel HDV
//                     as carbon taxes are implemented
//                   </span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </section>

//         <section id="energy-storage">
//           <h2 className="text-3xl font-semibold mb-8 text-custom-blue">
//             Energy Storage Solutions
//           </h2>
//           <div className="grid md:grid-cols-3 gap-12 items-start">
//             <div className="md:col-span-2">
//               <ul className="space-y-4 text-xl">
//                 <li className="flex items-start">
//                   <span className="text-custom-yellow mr-3 mt-1.5">•</span>
//                   <span>
//                     Traditional fossil fuel generation, making up 81.8% of 2022
//                     total U.S. electricity generation, is dispatchable to match
//                     the changing load demand without energy storage
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-custom-yellow mr-3 mt-1.5">•</span>
//                   <span>
//                     Achieving the 100% zero emissions grid targeted by the 2015
//                     Paris Agreement requires massive energy storage due to the
//                     inherent intermittency of renewable energy sources
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-custom-yellow mr-3 mt-1.5">•</span>
//                   <span>
//                     Utility scale battery storage of the required size is not
//                     feasible with current battery technologies due to materials
//                     limitations, self discharge issues, and the inseparability
//                     of power and energy densities
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-custom-yellow mr-3 mt-1.5">•</span>
//                   <span>
//                     Sustainably produced hydrogen can be stored in existing
//                     natural gas infrastructure, depleted oil wells, underground
//                     caverns, or in above-ground storage tanks
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-custom-yellow mr-3 mt-1.5">•</span>
//                   <span>
//                     Stored hydrogen can be reconverted to electricity via fuel
//                     cells or combustion in existing power production facilities
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-custom-yellow mr-3 mt-1.5">•</span>
//                   <span>
//                     Energy storage systems utilizing a fuel cell for power
//                     reconversion offer higher electrical efficiencies of 60-80%
//                     and drastically lower emissions compared to traditional
//                     fossil fuel methods
//                   </span>
//                 </li>
//               </ul>
//             </div>
//             <img
//               src={energyStorage}
//               alt="Energy Storage Solutions"
//               className="object-fit w-full h-full rounded-xl shadow-xl mt-2"
//             />
//           </div>
//         </section>

//         <section id="industrial-decarbonization">
//           <h2 className="text-3xl font-semibold mb-8 text-custom-blue">
//             Industrial Decarbonization
//           </h2>
//           <div className="grid md:grid-cols-3 gap-12 items-start">
//             <img
//               src={industrialDecarbonization}
//               alt="Industrial Decarbonization"
//               className="object-cover w-full h-full rounded-xl shadow-xl mt-2"
//             />
//             <div className="md:col-span-2">
//               <ul className="space-y-4 text-xl">
//                 <li className="flex items-start">
//                   <span className="text-custom-yellow mr-3 mt-1.5">•</span>
//                   <span>
//                     Heavy industries contribute 23% of the total U.S. CO2
//                     emissions with contributions from iron/steel (7%), chemicals
//                     (20%), cement (2%), and oil refining (17%)
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-custom-yellow mr-3 mt-1.5">•</span>
//                   <span>
//                     Ammonia production and oil refining currently consume 80% of
//                     the 120 Mtons of global hydrogen production
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-custom-yellow mr-3 mt-1.5">•</span>
//                   <span>
//                     According to US DOE, the technological pillars of industrial
//                     decarbonization are energy efficiency, electrification,
//                     low-carbon fuels, and CCUS
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-custom-yellow mr-3 mt-1.5">•</span>
//                   <span>
//                     Industrial sectors are difficult to decarbonize with
//                     electrification due to chemical feedstock requirements for
//                     reducing iron, producing ammonia, manufacturing cement, and
//                     hydrocracking
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-custom-yellow mr-3 mt-1.5">•</span>
//                   <span>
//                     High temperature electrolysis can be thermally integrated
//                     into industrial processes to produce emissions free hydrogen
//                     with reduced primary energy consumption
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-custom-yellow mr-3 mt-1.5">•</span>
//                   <span>
//                     Closed-loop processes can be engineered to reduce the demand
//                     for water and further improve overall system efficiency
//                   </span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </section>
//       </main>

//       <section className="my-20">
//         <h2 className="text-4xl font-semibold mb-10 text-custom-blue">
//           Energy Data Analysis
//         </h2>
//         <div className="bg-gray-50 rounded-xl p-2shadow-lg">
//           <MainChart />
//         </div>
//       </section>

//       <footer className="py-8 mt-16 border-t">
//         {/* <h3 className="text-2xl font-semibold mb-6 text-custom-blue">
//           References
//         </h3>
//         <p className="text-base text-gray-600">
//           References will be displayed here in APA format.
//         </p> */}
//       </footer>
//     </div>
//   );
// };

// export default HomePage;
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import home from "../assets/home/home.jpeg";
import energyStorage from "../assets/home/energy-storage.png";
import hvdFueling from "../assets/home/hvd-fueling.jpeg";
import industrialDecarbonization from "../assets/home/industrial-decarbonization.jpeg";
import MainChart from "../components/Charts/MainChart";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const HomePage = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="container mx-auto px-4 text-lg"
    >
      <motion.header className="py-8" variants={fadeInUp}>
        <h1 className="text-5xl font-bold text-custom-blue">Hyre Energy LLC</h1>
      </motion.header>

      <main className="space-y-16">
        <motion.section
          className="grid md:grid-cols-3 gap-12 items-start"
          variants={staggerChildren}
        >
          <motion.div className="md:col-span-1" variants={fadeInUp}>
            <h2 className="text-4xl font-semibold mb-6 text-custom-yellow">
              A hydrogen project development company.
            </h2>
            <p className="mb-6 text-xl">
              Guided by scientific expertise and driven by a commitment to
              sustainability
            </p>
            <motion.ul className="space-y-4 text-xl" variants={staggerChildren}>
              {[
                "Take your business to new heights with Hyre Energy.",
                "Unlock higher success through hydrogen innovation.",
                "Achieve lower emissions in an increasingly polluted world.",
              ].map((text, index) => (
                <motion.li
                  key={index}
                  className="flex items-center"
                  variants={fadeInUp}
                >
                  <ArrowRight
                    className="mr-3 text-custom-yellow flex-shrink-0"
                    size={28}
                  />
                  <span>{text}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div
              className="mt-8 bg-gradient-to-r from-custom-blue to-custom-yellow p-8 rounded-xl shadow-md opacity-95"
              variants={fadeInUp}
            >
              <p className="text-2xl mb-4 text-gray-800">
                Renewable energy provides an opportunity to produce clean fuels
                for many difficult to decarbonize end-uses.
              </p>
              <p className="text-xl mb-4 text-gray-800">
                Three hard-to-abate sectors dependent on the success of hydrogen
                technology deployment:
              </p>
              <ul className="space-y-4 text-xl">
                {[
                  "Heavy-duty-vehicle (HDV) fueling",
                  "Industrial decarbonization",
                  "Energy Storage",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center cursor-pointer hover:text-white transition-colors"
                    onClick={() =>
                      scrollToSection(
                        [
                          "hdv-fueling",
                          "industrial-decarbonization",
                          "energy-storage",
                        ][index]
                      )
                    }
                    variants={fadeInUp}
                  >
                    <span className="text-white mr-3">•</span>
                    <span className="underline flex items-center cursor-pointer hover:text-white transition-colors">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:col-span-2"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={home}
              alt="Hyre Energy concept"
              className="w-full h-[650px] object-cover rounded-xl shadow-2xl ml-10 mt-10 border-custom-blue border-2"
            />
          </motion.div>
        </motion.section>

        <motion.section
          id="hdv-fueling"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl font-semibold mb-8 text-custom-yellow"
            variants={fadeInUp}
          >
            HDV Fueling
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <motion.img
              src={hvdFueling}
              alt="HDV Fueling"
              className="object-cover w-full h-full rounded-xl shadow-xl mt-2 border-2 border-custom-blue"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div className="md:col-span-2" variants={staggerChildren}>
              <ul className="space-y-4 text-xl">
                {[
                  "Expected 50% increase in total freight from 19.4 billion tons in 2021 to 28.8 billion tons in 2050",
                  "Transportation has surpassed electricity generation as the largest source of carbon emissions in the U.S. with HDV trucks alone contributing 7% of total GHGs in 2021",
                  "Associated PM2.5 emissions are 50x higher per each mile driven for diesel HDV in the U.S.",
                  "Zero emissions freight (ZEF) network to be achieved by 2040",
                  "FCEV HDV outperform BEV HDV in number of required stops, cargo space, fueling time, and vehicle weight",
                  "FCEV HDV becomes even more cost competitive with diesel HDV as carbon taxes are implemented",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    variants={fadeInUp}
                  >
                    <span className="text-custom-yellow mr-3 mt-1.5">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="energy-storage"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl font-semibold mb-8 text-custom-yellow"
            variants={fadeInUp}
          >
            Energy Storage Solutions
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <motion.div className="md:col-span-2" variants={staggerChildren}>
              <ul className="space-y-4 text-xl">
                {[
                  "Traditional fossil fuel generation, making up 81.8% of 2022 total U.S. electricity generation, is dispatchable to match the changing load demand without energy storage",
                  "Achieving the 100% zero emissions grid targeted by the 2015 Paris Agreement requires massive energy storage due to the inherent intermittency of renewable energy sources",
                  "Utility scale battery storage of the required size is not feasible with current battery technologies due to materials limitations, self discharge issues, and the inseparability of power and energy densities",
                  "Sustainably produced hydrogen can be stored in existing natural gas infrastructure, depleted oil wells, underground caverns, or in above-ground storage tanks",
                  "Stored hydrogen can be reconverted to electricity via fuel cells or combustion in existing power production facilities",
                  "Energy storage systems utilizing a fuel cell for power reconversion offer higher electrical efficiencies of 60-80% and drastically lower emissions compared to traditional fossil fuel methods",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    variants={fadeInUp}
                  >
                    <span className="text-custom-yellow mr-3 mt-1.5">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.img
              src={energyStorage}
              alt="Energy Storage Solutions"
              className="object-fit w-full h-full rounded-xl shadow-xl mt-2 border-2 border-custom-blue"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.section>

        <motion.section
          id="industrial-decarbonization"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl font-semibold mb-8 text-custom-yellow"
            variants={fadeInUp}
          >
            Industrial Decarbonization
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <motion.img
              src={industrialDecarbonization}
              alt="Industrial Decarbonization"
              className="object-cover w-full h-full rounded-xl shadow-xl mt-2 border-2 border-custom-blue"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div className="md:col-span-2" variants={staggerChildren}>
              <ul className="space-y-4 text-xl">
                {[
                  "Heavy industries contribute 23% of the total U.S. CO2 emissions with contributions from iron/steel (7%), chemicals (20%), cement (2%), and oil refining (17%)",
                  "Ammonia production and oil refining currently consume 80% of the 120 Mtons of global hydrogen production",
                  "According to US DOE, the technological pillars of industrial decarbonization are energy efficiency, electrification, low-carbon fuels, and CCUS",
                  "Industrial sectors are difficult to decarbonize with electrification due to chemical feedstock requirements for reducing iron, producing ammonia, manufacturing cement, and hydrocracking",
                  "High temperature electrolysis can be thermally integrated into industrial processes to produce emissions free hydrogen with reduced primary energy consumption",
                  "Closed-loop processes can be engineered to reduce the demand for water and further improve overall system efficiency",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    variants={fadeInUp}
                  >
                    <span className="text-custom-yellow mr-3 mt-1.5">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <motion.section
        className="my-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-4xl font-semibold mb-10 text-custom-yellow"
          variants={fadeInUp}
        >
          Energy Data Analysis
        </motion.h2>
        <motion.div
          className="bg-gray-50 rounded-xl p-2 shadow-lg"
          variants={fadeInUp}
        >
          <MainChart />
        </motion.div>
      </motion.section>

      <motion.footer className="py-8 mt-16 border-t" variants={fadeInUp}>
        {/* Footer content can be added here if needed */}
      </motion.footer>
    </motion.div>
  );
};

export default HomePage;
