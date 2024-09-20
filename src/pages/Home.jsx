import { ArrowRight } from "lucide-react";
import home from "../assets/home/home.jpeg";
import energyStorage from "../assets/home/energy-storage.png";
import hvdFueling from "../assets/home/hvd-fueling.jpeg";
import industrialDecarbonization from "../assets/home/industrial-decarbonization.jpeg";
import MainChart from "../components/Charts/MainChart";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4">
      <header className="py-6">
        <h1 className="text-4xl font-bold text-green-600">Hyre Energy LLC</h1>
      </header>

      <main className="space-y-12">
        <section className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              A hydrogen project development company
            </h2>
            <p className="mb-4">
              Guided by scientific expertise and driven by a commitment to
              sustainability
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <ArrowRight className="mr-2 text-green-500 flex-shrink-0" />
                <span>Take your business to new heights with Hyre Energy.</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="mr-2 text-green-500 flex-shrink-0" />
                <span>Unlock higher success through hydrogen innovation.</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="mr-2 text-green-500 flex-shrink-0" />
                <span>
                  Achieve lower emissions in an increasingly polluted world.
                </span>
              </li>
            </ul>
          </div>

          <img
            src={home}
            alt="Descriptive alt text"
            className="w-5/6 h-64 object-cover  rounded-xl shadow-xl mt-2"
            // className="object-cover w-full h-full rounded-xl shadow-xl mt-2"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">HDV Fueling</h2>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <img
              src={hvdFueling}
              alt="Descriptive alt text"
              // className="w-full h-64 object-cover"
              className="object-cover w-full h-full rounded-xl shadow-xl mt-2"
            />
            <div className="md:col-span-2">
              <ul className="space-y-2">
                <li>
                  Expected 50% increase in total freight from 19.4 billion tons
                  in 2021 to 28.8 billion tons in 2050
                </li>
                <li>
                  Transportation has surpassed electricity generation as the
                  largest source of carbon emissions in the U.S. with HDV trucks
                  alone contributing 7% of total GHGs in 2021
                </li>
                <li>
                  Associated PM2.5 emissions are 50x higher per each mile driven
                  for diesel HDV in the U.S.
                </li>
                <li>
                  Zero emissions freight (ZEF) network to be achieved by 2040
                </li>
                <li>
                  FCEV HDV outperform BEV HDV in number of required stops, cargo
                  space, fueling time, and vehicle weight
                </li>
                <li>
                  FCEV HDV becomes even more cost competitive with diesel HDV as
                  carbon taxes are implemented
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">
            Energy Storage Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <ul className="space-y-2">
                <li>
                  Traditional fossil fuel generation, making up 81.8% of 2022
                  total U.S. electricity generation, is dispatchable to match
                  the changing load demand without energy storage
                </li>
                <li>
                  Achieving the 100% zero emissions grid targeted by the 2015
                  Paris Agreement requires massive energy storage due to the
                  inherent intermittency of renewable energy sources
                </li>
                <li>
                  Utility scale battery storage of the required size is not
                  feasible with current battery technologies due to materials
                  limitations, self discharge issues, and the inseparability of
                  power and energy densities
                </li>
                <li>
                  Sustainably produced hydrogen can be stored in existing
                  natural gas infrastructure, depleted oil wells, underground
                  caverns, or in above-ground storage tanks
                </li>
                <li>
                  Stored hydrogen can be reconverted to electricity via fuel
                  cells or combustion in existing power production facilities
                </li>
                <li>
                  Energy storage systems utilizing a fuel cell for power
                  reconversion offer higher electrical efficiencies of 60-80%
                  and drastically lower emissions compared to traditional fossil
                  fuel methods
                </li>
              </ul>
            </div>
            <img
              src={energyStorage}
              alt="Descriptive alt text"
              // className="w-full h-64 object-cover"
              className="object-cover w-full h-full rounded-xl shadow-xl mt-2"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">
            Industrial Decarbonization
          </h2>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <img
              src={industrialDecarbonization}
              alt="Descriptive alt text"
              // className="w-full h-64 object-cover"
              className="object-cover w-full h-full rounded-xl shadow-xl mt-2"
            />
            <div className="md:col-span-2">
              <ul className="space-y-2">
                <li>
                  Heavy industries contribute 23% of the total U.S. CO2
                  emissions with contributions from iron/steel (7%), chemicals
                  (20%), cement (2%), and oil refining (17%)
                </li>
                <li>
                  Ammonia production and oil refining currently consume 80% of
                  the 120 Mtons of global hydrogen production
                </li>
                <li>
                  According to US DOE, the technological pillars of industrial
                  decarbonization are energy efficiency, electrification,
                  low-carbon fuels, and CCUS
                </li>
                <li>
                  Industrial sectors are difficult to decarbonize with
                  electrification due to chemical feedstock requirements for
                  reducing iron, producing ammonia, manufacturing cement, and
                  hydrocracking
                </li>
                <li>
                  High temperature electrolysis can be thermally integrated into
                  industrial processes to produce emissions free hydrogen with
                  reduced primary energy consumption
                </li>
                <li>
                  Closed-loop processes can be engineered to reduce the demand
                  for water and further improve overall system efficiency
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <MainChart />

      <footer className="py-6 mt-12 border-t">
        <h3 className="text-xl font-semibold mb-4">References</h3>
        <p className="text-sm text-gray-600">
          References will be displayed here in APA format.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
