import emissionsReductionImg from "../assets/emissions-reductions.jpg";
import systemIntegrationImg from "../assets/system-integration.png";
import stockImg from "../assets/stock-image.jpeg";


import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";

export function OldServices() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div className="bg-custom-bg px-6 py-4 lg:px-8">
      <div className="mx-auto max-w-7xl text-base leading-7 text-gray-700">
        {/* Grid Layout Starts Here */}
        <div className="mt-10">
          <div className=" px-6 py-4 lg:px-8">
            <div className="mx-auto max-w-7xl text-base leading-7 text-gray-700">
              <p className="text-base font-semibold leading-7 text-header-3">
                HyRe Energy
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-header-3 sm:text-4xl">
                Services
              </h1>
              <p className="mt-6 text-lg leading-8">
                We pride ourselves on offering 3 exclusive services that we view
                as necessary for the adoption of hydrogen energy systems.
              </p>

              {/* Grid Layout Starts Here */}
              <div className="text-lg mt-10 space-y-16 lg:space-y-4 lg:gap-8">
                {/* First Row - Paragraph then Image */}
                <div className="flex flex-col lg:flex-row lg:items-center">
                  <div className="lg:w-1/2">
                    <h2
                      id="integration-support"
                      className="text-2xl font-bold tracking-tight text-header-3"
                    >
                      Integration Support and Project Management
                    </h2>
                    <p className="mt-6 lg:mr-8 lg:mb-4">
                      Hydrogen projects involve new and constantly emerging
                      technologies that require a fundamental knowledge to
                      safely operate and maintain. The integration of these
                      emerging technologies with established technologies, such
                      as balance of plant equipment, is not often available
                      through the technology manufacturers. There is no
                      one-stop, turn-key solution because of site specific
                      requirements and countless combinations of technologies to
                      achieve a certain end goal. Hydrogen projects would
                      normally require multiple expensive engineering companies,
                      but we can streamline the process of outsourcing specific
                      jobs. We can integrate and manage all the technologies
                      unique to a hydrogen project including but not limited to
                      PEM fuel cells and elctrolyzers, alkaline electrolyzers,
                      solid-oxide fuel cells and electrolyzers, air-cooled
                      chillers, cooling towers, hydrogen compressors, gaseous
                      hydrogen storage.
                    </p>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={systemIntegration}
                        alt=""
                        className="object-cover w-full h-full rounded-lg shadow-xl mt-6 lg:mt-12"
                      />
                    </div>
                  </div>
                </div>

                {/* Second Row - Image then Paragraph */}
                <div className="mt-2 flex flex-col lg:flex-row-reverse lg:items-center">
                  <div className="mx-auto lg:w-1/2">
                    <h2
                      id="emissions-reduction"
                      className="text-2xl font-bold tracking-tight text-header-3 lg:ml-8 "
                    >
                      Emissions Reduction Planning
                    </h2>
                    <p className="mt-6 lg:ml-8 ">
                      {/* Description here */}
                      We understand that hydrogen can be used in many unique
                      applications, and we want to help unlock the true
                      potential of hydrogen. The potential is massive because it
                      can be used in numerous sectors including the industrial,
                      transportation, and power sectors. There is a need for an
                      emissions free feedstock gas to be used in industrial
                      processes such as cement, steel, and ammonia production.
                      There is a need for an emissions free fuel for light-duty
                      and heavy-duty vehicles. There is a need for emissions
                      free electricity generation. Every application can benefit
                      from the use of hydrogen, and we can contribute to a
                      growing hydrogen market. If you are affiliated with any of
                      the previously mentioned sectors, we can help develop your
                      hydrogen project to reduce emissions.
                    </p>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="aspect-w-16 aspect-h-9 ">
                      <img
                        src={emissionsReduction}
                        alt=""
                        className="object-cover w-full h-full   rounded-xl shadow-xl mt-4 "
                      />
                    </div>
                  </div>
                </div>

                {/* Third Row - Repeating Pattern */}
                <div className="mt-2 flex flex-col lg:flex-row lg:items-center">
                  <div className="lg:w-1/2 ">
                    <h2
                      id="technology-consulting"
                      className="text-2xl font-bold tracking-tight text-header-3 lg:mr-4"
                    >
                      Technology Consulting: Customized Solutions and Advisory
                      Services
                    </h2>
                    <p className="mt-6 lg:mr-8">
                      The commercialized market of hydrogen technologies is
                      always evolving. We can provide scientific advice on new
                      hydrogen technology to de-risk an investment .
                      Additionally, no one hydrogen project will be the same
                      because different sites have different requirements and
                      end goals. We can advise on hydrogen project proposals and
                      offer step-by-step guidance to achieve your overall
                      business goals.
                    </p>
                  </div>
                  <div className="mx-auto lg:w-1/2">
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={techConsulting}
                        alt=""
                        className="object-cover w-full h-full rounded-xl shadow-xl mt-2 "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const features = [
  {
    name: "Integration Support and Project Management",
    description:
      "Hydrogen projects involve new and constantly emerging technologies that require a fundamental knowledge to safely operate and maintain. The integration of these emerging technologies with established technologies, such as balance of plant equipment, is not often available through the technology manufacturers. There is no one-stop, turn-key solution because of site specific requirements and countless combinations of technologies to achieve a certain end goal. Hydrogen projects would normally require multiple expensive engineering companies, but we can streamline the process of outsourcing specific jobs. We can integrate and manage all the technologies unique to a hydrogen project including but not limited to PEM fuel cells and elctrolyzers, alkaline electrolyzers, solid-oxide fuel cells and electrolyzers, air-cooled chillers, cooling towers, hydrogen compressors, gaseous hydrogen storage.",
    imageSrc: systemIntegrationImg,
    imageAlt:
      "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
  },
  {
    name: "Emissions Reduction Planning",
    description:
      "We understand that hydrogen can be used in many unique applications, and we want to help unlock the true potential of hydrogen. The potential is massive because it can be used in numerous sectors including the industrial, transportation, and power sectors. There is a need for an emissions free feedstock gas to be used in industrial processes such as cement, steel, and ammonia production. There is a need for an emissions free fuel for light-duty and heavy-duty vehicles. There is a need for emissions free electricity generation. Every application can benefit from the use of hydrogen, and we can contribute to a growing hydrogen market. If you are affiliated with any of the previously mentioned sectors, we can help develop your hydrogen project to reduce emissions.",
    imageSrc: emissionsReductionImg,
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
  },
  {
    name: "Technology Consulting: Customized Solutions and Advisory Services",
    description:
      "The commercialized market of hydrogen technologies is always evolving. We can provide scientific advice on new hydrogen technology to de-risk an investment . Additionally, no one hydrogen project will be the same because different sites have different requirements and end goals. We can advise on hydrogen project proposals and offer step-by-step guidance to achieve your overall business goals.",
    imageSrc: stockImg,
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Services() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hyre Energy Services
          </h2>
          <p className="mt-4 text-gray-500">
            We pride ourselves on offering 3 exclusive services that we view as
            necessary for the adoption of hydrogen energy systems.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {features.map((feature, featureIdx) => (
            <div
              key={feature.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
            >
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-start-1"
                    : "lg:col-start-8 xl:col-start-9",
                  "mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4"
                )}
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-lg text-gray-500">
                  {feature.description}
                </p>
              </div>
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-start-6 xl:col-start-5"
                    : "lg:col-start-1",
                  "flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8"
                )}
              >
                <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100 shadow-2xl">
                  <img
                    alt={feature.imageAlt}
                    src={feature.imageSrc}
                    className="custom-img   object-cover w-full h-full rounded-xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
