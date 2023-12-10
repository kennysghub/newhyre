import hero2 from "../assets/hero2.jpg";
const stats = [
  { id: 1, name: "Renewable Hydrogen Produced", value: "50,000 kg" },
  { id: 2, name: "Emission Reduction", value: "18,000 tons" },
  { id: 3, name: "Partner Organizations", value: "69" },
  { id: 4, name: "Projects Successfully Completed", value: "666" },
  { id: 5, name: "Global Reach", value: "420 Countries" },
];

export default function Stats() {
  return (
    <div className="relative bg-white">
      <img
        className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
        src={hero2}
        alt=""
      />
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
            <h2 className="text-base font-semibold leading-8 text-emerald-500">Our track record</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Impact By The Numbers
              {/* Trusted by thousands of creators&nbsp;worldwide */}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Driven by sustainability and innovation, we let our impact do the talking. From
              hydrogen production to CO2 reduction, these key metrics encapsulate our mission and
              reach.
            </p>
            <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6"
                >
                  <dt className="text-sm leading-6 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
