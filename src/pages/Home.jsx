import { motion } from "framer-motion";
import { ArrowRight, Truck, Factory, Battery, ArrowDown } from "lucide-react";
import MainChart from "../components/Charts/MainChart";
import Navbar from "../components/Navbar";
import home from "../assets/home/home.jpeg";
import energyStorage from "../assets/home/energy-storage.png";
import hvdFueling from "../assets/home/hvd-fueling.jpeg";
import industrialDecarbonization from "../assets/home/industrial decarb2.png";
import H2forecast from "../assets/home/H2forecast.png";

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
              A hydrogen project development company guided by technical expertise and driven by a commitment to sustainability.
              </h2>
            </motion.div>
            <motion.div className="space-y-4" variants={fadeInUp}>
              <p className="text-gray-200 font-bold text-3xl">
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
                    <ArrowRight className="text-yellow-400 h-7 w-7 flex-shrink-0" />
                    <span className="text-gray-200 font-bold text-2xl leading-tight">
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
              <p className="text-2xl text-gray-600">
              Click here to view how a case study shows the renewable energy potential for hydrogen in California.
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
                    <Truck className="h-28 w-28 text-blue-600" />
                  </div>
                </div>
                <div className="p-4 text-left">
                  <h3 className="text-2xl font-bold">
                    Heavy-duty-vehicle (HDV) fueling
                  </h3>
                  <p className="mt-2 text-1xl text-gray-500">
                    Sustainable solutions for heavy transport
                  </p>
                  <ArrowDown className="mt-2 h-5 w-5 text-gray-400" />
                </div>
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("industrial-decarbonization")}
                className="group relative overflow-hidden rounded-lg border bg-white shadow-md transition-all hover:shadow-lg"
                variants={fadeInUp}
              >
                <div className="aspect-[4/3] relative">
                  <div className="absolute inset-0 bg-green-100 flex items-center justify-center">
                    <Factory className="h-28 w-28 text-green-600" />
                  </div>
                </div>
                <div className="p-4 text-left">
                  <h3 className="text-2xl font-bold">
                    Industrial applications
                  </h3>
                  <p className="mt-2 text-1xl text-gray-500">
                    Clean hydrogen for industrial processes
                  </p>
                  <ArrowDown className="mt-2 h-5 w-5 text-gray-400" />
                </div>
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("energy-storage")}
                className="group relative overflow-hidden rounded-lg border bg-white shadow-md transition-all hover:shadow-lg"
                variants={fadeInUp}
              >
                <div className="aspect-[4/3] relative">
                  <div className="absolute inset-0 bg-yellow-100 flex items-center justify-center">
                    <Battery className="h-28 w-28 text-yellow-600" />
                  </div>
                </div>
                <div className="p-4 text-left">
                  <h3 className="text-2xl font-bold">Energy storage</h3>
                  <p className="mt-2 text-1xl text-gray-500">
                    Hydrogen storage solutions for renewable energy integration
                  </p>
                  <ArrowDown className="mt-2 h-5 w-5 text-gray-400" />
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
                <p className="font-bold text-2xl">
                Our scalable solutions empower the heavy transport industry to reduce emissions and adopt practical hydrogen technologies.
                </p>
                <ul className="space-y-4 pl-6">
                  {[
                    "There is an expected 50% increase in total freight from 19.4 billion tons in 2021 to 28.8 billion tons in 2050.",
                    "Transportation has surpassed electricity generation as the largest source of carbon emissions in the U.S. with HDVs alone contributing 7% of total GHGs in 2021.",
                    <>Associated PM<sub>2.5</sub> emissions are 50 times higher per each mile driven for diesel HDVs compared to light duty vehicles (LDVs) in the U.S.</>,
                    "A zero emissions freight (ZEF) network is expected to be achieved by 2040.",
                    "In heavy duty applications, FCEV outperform BEV in number of required stops, cargo space, fueling time, and vehicle weight.",
                    "FC-HDV is becoming economically competitive with diesel combustion engines as political incentives are implemented.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <ArrowRight className="text-yellow-400 h-6 w-6 flex-shrink-0" />
                      <span className="text-gray-600 text-1xl">{item}</span>
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
                <p className="text-2xl font-bold">
                Heavy industries are major contributors to GHG emissions and are challenging to decarbonize due to the limits of electrification. However, many of the largest emitters can realistically achieve decarbonization with sustainable hydrogen solutions.
                </p>
                <ul className="space-y-4">
                  {[
                    "Heavy industries contribute 23% of the total U.S. CO₂ emissions with contributions from iron/steel (7%), chemicals (20%), cement (2%), and oil refining (17%).",
                    "According to US DOE, the technological pillars of industrial decarbonization are energy efficiency, electrification, low-carbon fuels, and CCUS.",
                    "Hydrogen production can be combined with on-site carbon capture and Fischer-Tropsch processes to produce sustainable aviation fuels and/or other valuable hydrocarbons.",
                    "High temperature electrolysis can be thermally integrated with industrial processes to produce emission-free hydrogen with reduced primary energy consumption sourced entirely from renewable energy sources.",
                    "Closed-loop processes can be engineered to reduce the demand for water and further improve overall system efficiency.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <ArrowRight className="text-yellow-400 h-6 w-6 flex-shrink-0" />
                      <span className="text-gray-600 text-1xl">{item}</span>
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
              <div className="space-y-6">
                <p className="text-2xl font-bold">
                We provide hydrogen solutions to enable long-duration energy storage and distribution, supporting the integration of renewable energy sources into the grid.
                </p>
                <ul className="space-y-4 text-1xl">
                  {[
                    "Traditional fossil fuel generation, making up 60.0% of 2023 total U.S. electricity generation, is dispatchable to match the changing load demand without energy storage.",
                    "Achieving the 100% zero emissions grid targeted by state and federal agencies requires massive energy storage due to the inherent intermittency of renewable energy sources.",
                    "Utility-scale battery storage of the required capacity is not feasible with current technologies due to material limitations, self-discharge issues, and the inseparability of power and energy densities.",
                    "Sustainably produced hydrogen can be stored in existing natural gas infrastructure, depleted oil wells, underground caverns, or in above-ground storage tanks.",
                    "Stored hydrogen can be reconverted to electricity via fuel cells or combustion in existing power production facilities.",
                    "Energy storage systems utilizing a fuel cell for power reconversion offer higher electrical efficiencies of 60-80% and drastically lower emissions compared to traditional fossil fuel methods.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <ArrowRight className="text-yellow-400 h-6 w-6 flex-shrink-0" />
                      <span className="text-gray-600 text-1xl">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
            </div>
          </motion.div>
        </div>
      </section>
      {/* Market Growth Section */}
      <section className="w-full py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold tracking-tighter">
              With the above 3 markets in place, demand for hydrogen is expected to
              increase dramatically over the next 20 years, leading to a significant decrease
              in the overall levelized cost of hydrogen (LCOH).
            </h3>
          </motion.div>
        </div>
      </section>
      {/* Energy Data Analysis Section */}
      <section className="w-full py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="space-y-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {/* Image Display */}
            <div className="relative mx-auto max-w-4xl">
              <img
                src={H2forecast}
                alt="H2 Forecast"
                className="w-full h-auto object-contain rounded-xl shadow-lg border"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            California Hydrogen Potential
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Discover the opportunities for hydrogen energy production in California.
          </p>
          <a
            href="/california-hydrogen-potential"
            className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg font-medium transition"
          >
            Explore Now
          </a>
        </div>
      </section>
      
      {/* References Section */}
       <motion.section
        className="w-full py-24 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="bg-gray-100 rounded-xl p-6 shadow-lg">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">References</h2>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-1xl text-gray-700">September H2IQ Hour: Decarbonizing Heavy-Duty Vehicles. (2023). https://www.energy.gov/eere/fuelcells/september-h2iq-hour-decarbonizing-heavy-duty-vehicles</li>
              <li className="text-1xl text-gray-700">Department of Energy (2022). Doe Industrial Decarbonization Roadmap. https://www.energy.gov/industrial-technologies/doe-industrial-decarbonization-roadmap</li>
              <li className="text-1xl text-gray-700">Electric Power Monthly. (2024). https://www.eia.gov/electricity/monthly/current_month/november2024.pdf</li>
              <li className="text-1xl text-gray-700">International Energy Agency (2024). Global Hydrogen Review. https://www.iea.org/reports/global-hydrogen-review-2024</li>
              <li className="text-1xl text-gray-700">Saeedmanesh, A., Mac Kinnon, M. A., & Brouwer, J. (2018). Hydrogen is essential for sustainability. Current Opinion in Electrochemistry, 12, 166–181. https://doi.org/10.1016/j.coelec.2018.11.009</li>
            </ul>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
