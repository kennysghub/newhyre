import { motion } from "framer-motion";
import { ArrowRight, Truck, Factory, Battery, ArrowDown } from "lucide-react";
import MainChart from "../components/Charts/MainChart";
import Navbar from "../components/Navbar";
import home from "../assets/home/home.jpeg";
import energyStorage from "../assets/home/energy-storage.png";
import hvdFueling from "../assets/home/hvd-fueling.jpeg";
import industrialDecarbonization from "../assets/home/industrial-decarbonization.jpeg";

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
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Background */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src={home}
            alt="Background landscape"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Navigation */}
        <div className="relative z-20">
          <Navbar />
        </div>

        {/* Hero Content */}

        <motion.div
          className="relative z-10 container mx-auto px-4 h-full flex items-center"
          initial="initial"
          animate="animate"
        >
          <div className="space-y-8 max-w-2xl">
            <motion.div className="space-y-2" variants={fadeInUp}>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                Hyre Energy LLC
              </h1>
              <h2 className="text-3xl font-bold tracking-tighter text-yellow-400">
                A hydrogen project development company guided by scientific
                expertise and driven by a commitment to sustainability.
              </h2>
            </motion.div>
            <motion.div className="space-y-4" variants={fadeInUp}>
              <p className="text-gray-200 font-bold text-xl">
                Take your business to new heights with Hyre Energy.
              </p>
              <div className="space-y-6">
                {[
                  "Unlock higher success through hydrogen innovation.",
                  "Achieve lower emissions in an increasingly polluted world.",
                ].map((text, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    variants={fadeInUp}
                  >
                    <ArrowRight className="text-yellow-400 h-6 w-6 flex-shrink-0" />
                    <span className="text-gray-200 font-bold text-xl leading-tight">
                      {text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      {/* Three Pillars Section */}
      <section className="w-full py-24 bg-gradient-to-r from-blue-50 via-green-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Renewable energy provides an opportunity to produce clean fuels
                for many difficult to decarbonize end-uses.
              </h2>
              <p className="text-xl text-gray-600">
                We believe in three hard-to-abate sectors dependent on the
                success of hydrogen technology deployment:
              </p>
            </div>

            <div className="grid gap-10 sm:grid-cols-3">
              <motion.button
                onClick={() => scrollToSection("hdv-fueling")}
                className="group relative overflow-hidden rounded-lg border bg-white shadow-md transition-all hover:shadow-lg"
                variants={fadeInUp}
              >
                <div className="aspect-[4/3] relative">
                  <div className="absolute inset-0 bg-blue-100 flex items-center justify-center">
                    <Truck className="h-16 w-16 text-blue-600" />
                  </div>
                </div>
                <div className="p-4 text-left">
                  <h3 className="text-xl font-bold">
                    Heavy-duty-vehicle (HDV) fueling
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Sustainable solutions for heavy transport
                  </p>
                  <ArrowDown className="mt-2 h-4 w-4 text-gray-400" />
                </div>
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("industrial-decarbonization")}
                className="group relative overflow-hidden rounded-lg border bg-white shadow-md transition-all hover:shadow-lg"
                variants={fadeInUp}
              >
                <div className="aspect-[4/3] relative">
                  <div className="absolute inset-0 bg-green-100 flex items-center justify-center">
                    <Factory className="h-16 w-16 text-green-600" />
                  </div>
                </div>
                <div className="p-4 text-left">
                  <h3 className="text-xl font-bold">
                    Industrial decarbonization
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Clean hydrogen for industrial processes
                  </p>
                  <ArrowDown className="mt-2 h-4 w-4 text-gray-400" />
                </div>
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("energy-storage")}
                className="group relative overflow-hidden rounded-lg border bg-white shadow-md transition-all hover:shadow-lg"
                variants={fadeInUp}
              >
                <div className="aspect-[4/3] relative">
                  <div className="absolute inset-0 bg-yellow-100 flex items-center justify-center">
                    <Battery className="h-16 w-16 text-yellow-600" />
                  </div>
                </div>
                <div className="p-4 text-left">
                  <h3 className="text-xl font-bold">Energy storage</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Advanced hydrogen storage solutions
                  </p>
                  <ArrowDown className="mt-2 h-4 w-4 text-gray-400" />
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Keep your existing sections for HDV Fueling, Industrial Applications, and Energy Storage */}
      {/* Just update the styling to match the new design */}
      {/* HDV Fueling Section */}
      <section id="hdv-fueling" className="w-full py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-custom-yellow">
              HDV Fueling
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-lg text-gray-600">
                  Our HDV fueling solutions provide sustainable energy for heavy
                  transport, reducing emissions and increasing efficiency in the
                  transportation sector.
                </p>
                <ul className="space-y-4">
                  {[
                    "Expected 50% increase in total freight from 19.4 billion tons in 2021 to 28.8 billion tons in 2050",
                    "Transportation has surpassed electricity generation as the largest source of carbon emissions in the U.S. with HDV trucks alone contributing 7% of total GHGs in 2021",
                    "Associated PM2.5 emissions are 50x higher per each mile driven for diesel HDV in the U.S.",
                    "Zero emissions freight (ZEF) network to be achieved by 2040",
                    "FCEV HDV outperform BEV HDV in number of required stops, cargo space, fueling time, and vehicle weight",
                    "FCEV HDV becomes even more cost competitive with diesel HDV as carbon taxes are implemented",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-yellow-400 mr-3 mt-1.5">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={hvdFueling}
                  alt="HDV Fueling"
                  className="w-full h-full object-cover rounded-xl shadow-xl border-2 "
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Industrial Applications Section */}
      <section
        id="industrial-decarbonization"
        className="w-full py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-custom-yellow">
              Industrial Applications
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div
                className="relative order-2 md:order-1"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={industrialDecarbonization}
                  alt="Industrial Decarbonization"
                  className="w-full h-full object-cover rounded-xl shadow-xl border-2 "
                />
              </motion.div>
              <div className="space-y-6 order-1 md:order-2">
                <p className="text-lg text-gray-600">
                  Heavy industries are notorious for their high GHG emissions,
                  and are known to be difficult to decarbonize as there is no
                  path for total electrification. Several of the largest
                  emitting sectors, though, have very realistic paths to
                  decarbonization through sustainable hydrogen.
                </p>
                <ul className="space-y-4">
                  {[
                    "Heavy industries contribute 23% of the total U.S. CO₂ emissions with contributions from iron/steel (7%), chemicals (20%), cement (2%), and oil refining (17%)",
                    "According to US DOE, the technological pillars of industrial decarbonization are energy efficiency, electrification, low-carbon fuels, and CCUS",
                    "Hydrogen production can be combined with on-site carbon capture and Fischer-Tropsch processes to produce sustainable aviation fuels and/or other valuable hydrocarbons",
                    "High temperature electrolysis can be thermally integrated into industrial processes to produce emissions free hydrogen with reduced primary energy consumption sourced entirely from renewable energy sources",
                    "Closed-loop processes can be engineered to reduce the demand for water and further improve overall system efficiency",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-yellow-400 mr-3 mt-1.5">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section id="energy-storage" className="w-full py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-custom-yellow">
              Energy Storage Solutions
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="relative h-auto aspect-[4/3]">
                {" "}
                {/* Updated container */}
                <motion.img
                  src={energyStorage}
                  alt="Energy Storage Solutions"
                  className="w-full h-full object-cover rounded-xl shadow-xl border-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-600">
                  Our advanced hydrogen storage solutions enable efficient
                  energy storage and distribution, supporting the integration of
                  renewable energy sources into the grid.
                </p>
                <ul className="space-y-4 text-xl">
                  {[
                    "Traditional fossil fuel generation, making up 81.8% of 2022 total U.S. electricity generation, is dispatchable to match the changing load demand without energy storage",
                    "Achieving the 100% zero emissions grid targeted by the 2015 Paris Agreement requires massive energy storage due to the inherent intermittency of renewable energy sources",
                    "Utility scale battery storage of the required size is not feasible with current battery technologies due to materials limitations, self discharge issues, and the inseparability of power and energy densities",
                    "Sustainably produced hydrogen can be stored in existing natural gas infrastructure, depleted oil wells, underground caverns, or in above-ground storage tanks",
                    "Stored hydrogen can be reconverted to electricity via fuel cells or combustion in existing power production facilities",
                    "Energy storage systems utilizing a fuel cell for power reconversion offer higher electrical efficiencies of 60-80% and drastically lower emissions compared to traditional fossil fuel methods",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-custom-yellow mr-3 mt-1.5">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Market Growth Section */}
      <section className="w-full py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold tracking-tighter">
              With the above 3 markets in place, demand for hydrogen will
              increase dramatically over the next 20 years leading to a decrease
              in the overall levelized cost of hydrogen (LCOH).
            </h2>
          </motion.div>
        </div>
      </section>
      {/* Energy Data Analysis Section */}
      <motion.section
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
      </motion.section>
    </div>
  );
};

export default HomePage;
