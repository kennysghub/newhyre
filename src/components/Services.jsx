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
    title: "1. Integration Support and Project Management",
    description: "Image for Service One...",
    imageUrl: service1,
  },
  {
    id: 2,
    title: "2. Emissions Reduction Planning",
    description: "Image for Service Two...",
    imageUrl: service2,
  },
  {
    id: 3,
    title: "3. Technology Consulting - Customized Solutions and Advisory Services",
    description: "Image for Service Three...",
    imageUrl: service3,
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(servicesData[0]);

  return (
    <div className="bg-white py-8 lg:px-8">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4">Services</h2>
        <div className="flex space-x-4 mb-6">
          {servicesData.map((service) => (
            <button
              key={service.id}
              className={`px-4 py-2 rounded-full border-4 border-red" ${
                selectedService.id === service.id
                  ? "bg-emerald-500 text-zinc-50"
                  : "bg-slate-200 text-gray-700"
              }`}
              onClick={() => setSelectedService(service)}
            >
              {service.title}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-6">
          <img
            className="mb-4 lg:mb-0 w-full lg:w-2/2 h-100 rounded-xl object-cover shadow-2xl border-slate-600"
            src={selectedService.imageUrl}
            alt={selectedService.title}
          />

          {/* <div>
            <h3 className="text-xl font-semibold">{selectedService.title}</h3>
            <p>{selectedService.description}</p>
            
          </div> */}
        </div>
        <Link to="/services">
          <button
            type="button"
            className="mt-4 mb-4 inline-flex items-center gap-x-1.5 rounded-md bg-blue-500 px-2.5 py-1.5 text-sm font-semibold text-zinc-50 shadow-lg hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Learn More
            <ChevronRightIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
          </button>
        </Link>
      </div>
    </div>
  );
}
