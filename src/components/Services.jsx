// Services.js
import { useState } from "react";
import service1 from "../assets/service-1.jpg";
import service2 from "../assets/service-2.jpg";
import service3 from "../assets/service-3.jpg";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const servicesData = [
  {
    id: 1,
    title: "Integration Support and Project Management",
    description: "Learn about how we can provide unique hydrogen technology support and management to your specific project.",
    imageUrl: service1,
    hash: "#integration-support"
  },
  {
    id: 2,
    title: "Emissions Reduction Planning",
    description: "Learn more about the studies we can complete for any industry to demonstrate the feasibility of an application.",
    imageUrl: service2,
    hash: "#emissions-reduction"
  },
  {
    id: 3,
    title: "Technology Consulting: Customized Solutions and Advisory Services",
    description: "Learn more about the scientific advice we can provide for your future investment opportunities.",
    imageUrl: service3,
    hash: "#technology-consulting"
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(servicesData[0]);

  return (
    <div className="bg-custom-bg py-8 lg:px-8">
      <div className="bg-custom-bg max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 sm:text-4xl">Services</h2>
        <div className="flex space-x-4 mb-6">
          {servicesData.map((service) => (
            <button
              key={service.id}
              className={`px-4 py-2 rounded-full border-4 border-red" ${
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
          {/* <img
            className="mb-4 lg:mb-0 w-full lg:w-2/2 h-100 rounded-xl object-cover shadow-2xl border-slate-600"
            src={selectedService.imageUrl}
            alt={selectedService.title}
          /> */}
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
        {/* <Link to="/services">
          <button
            type="button"
            className="mt-4 mb-4 inline-flex items-center gap-x-1.5 rounded-md bg-blue-500 px-2.5 py-1.5 text-sm font-semibold text-zinc-50 shadow-lg hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Learn More
            <ChevronRightIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
          </button>
        </Link> */}
      </div>
    </div>
  );
}
