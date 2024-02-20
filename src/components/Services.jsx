// Services.js
import { useState } from "react";

import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const servicesData = [
  {
    id: 1,
    title: "Integration Support and Project Management",
    description:
      "Learn about how we can provide unique hydrogen technology support and management to your specific project.",
    
    hash: "#integration-support",
  },
  {
    id: 2,
    title: "Emissions Reduction Planning",
    description:
      "Learn more about the studies we can complete for any industry to demonstrate the feasibility of an application.",
    
    hash: "#emissions-reduction",
  },
  {
    id: 3,
    title: "Customized Solutions and Advisory Services",
    description:
      "Learn more about the scientific advice we can provide for your future investment opportunities.",
    
    hash: "#technology-consulting",
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(servicesData[0]);

  return (
    <div className="bg-custom-bg py-8 lg:px-8 sm:px-4">
      <div className="bg-custom-bg max-w-5xl mx-auto px-6 ">
        <h2 className="text-3xl font-bold mb-4 sm:text-4xl text-header-3">Services</h2>
        <div className="flex  flex-column justify-between gap-2 lg:gap-4  mb-6 text-xs lg:text-md lg:space-x-8">
          {servicesData.map((service) => (
            <button
              type="button"
              key={service.id}
              
              className={`px-4 py-4 lg:h-36 lg:w-72 lg:px-8 lg:py-8 lg:text-lg rounded-full border-2 text-smd sm:px-4 font-semibold ${
                selectedService.id === service.id
                  ? "bg-header-1 text-zinc-50"
                  : "bg-header-4 text-gray-700"
              }`}
              onClick={() => setSelectedService(service)}
            >
              {service.title}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-6">
          <p>{selectedService.description}</p>
          <Link to={`/services${selectedService.hash}`}>
            <button
              type="button"
              className="mt-4 mb-4 inline-flex items-center gap-x-1.5 rounded-md bg-header-3 px-2.5 py-1.5 text-sm font-semibold text-zinc-50 shadow-lg hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Learn More
              <ChevronRightIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
