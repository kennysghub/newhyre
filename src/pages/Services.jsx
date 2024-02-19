import emissionsReduction from "../assets/emissions-reductions.jpg";
import techConsulting from "../assets/tech-consulting.jpg";
import systemIntegration from "../assets/system-integration.png";
import service1 from "../assets/service-1.jpg";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { CheckCircleIcon, InformationCircleIcon } from "@heroicons/react/20/solid";

export default function Services() {
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
              <p className="text-base font-semibold leading-7 text-header-3">HyRe Energy</p>
    <h1 className="mt-2 text-3xl font-bold tracking-tight text-header-3 sm:text-4xl">
      Services
    </h1>
    <p className="mt-6 text-lg leading-8">
      We pride ourselves on offering 3 exclusive services that we view as necessary for the adoption of hydrogen energy systems.
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
                    <p className="mt-6 mr-4">
                      Hydrogen projects involve new and constantly emerging technologies that
                      require a fundamental knowledge to safely operate and maintain. The
                      integration of these emerging technologies with established technologies, such
                      as balance of plant equipment, is not often available through the technology
                      manufacturers. There is no one-stop, turn-key solution because of site
                      specific requirements and countless combinations of technologies to achieve a
                      certain end goal. Hydrogen projects would normally require multiple expensive
                      engineering companies, but we can streamline the process of outsourcing
                      specific jobs. We can integrate and manage all the technologies unique to a
                      hydrogen project including but not limited to PEM fuel cells and elctrolyzers,
                      alkaline electrolyzers, solid-oxide fuel cells and electrolyzers, air-cooled
                      chillers, cooling towers, hydrogen compressors, gaseous hydrogen storage.
                    </p>
                  </div>
                  <div className="lg:w-1/2">
                    <img src={systemIntegration} alt="" className="mt-4  lg:mt-0 shadow-xl rounded-lg h-96 " />
                  </div>
                </div>

                {/* Second Row - Image then Paragraph */}
                <div className="mt-2 flex flex-col lg:flex-row-reverse lg:items-center">
                  <div className="mr-4 lg:w-1/2">
                    <h2
                      id="emissions-reduction"
                      className="text-2xl font-bold tracking-tight text-header-3"
                    >
                      Emissions Reduction Planning
                    </h2>
                    <p className="mt-6">
                      {/* Description here */}
                      We understand that hydrogen can be used in many unique applications, and we
                      want to help unlock the true potential of hydrogen. The potential is massive
                      because it can be used in numerous sectors including the industrial,
                      transportation, and power sectors. There is a need for an emissions free
                      feedstock gas to be used in industrial processes such as cement, steel, and
                      ammonia production. There is a need for an emissions free fuel for light-duty
                      and heavy-duty vehicles. There is a need for emissions free electricity
                      generation. Every application can benefit from the use of hydrogen, and we can
                      contribute to a growing hydrogen market. If you are affiliated with any of the
                      previously mentioned sectors, we can help develop your hydrogen project to
                      reduce emissions.
                    </p>
                  </div>
                  <div className="lg:w-1/2">
                    <img src={emissionsReduction} alt="" className="mt-4 lg:mt-0 shadow-xl rounded-lg h-96 w-112 " />
                  </div>
                </div>

                {/* Third Row - Repeating Pattern */}
                <div className="mt-2 flex flex-col lg:flex-row lg:items-center">
                  <div className="lg:w-1/2">
                    <h2
                      id="technology-consulting"
                      className="text-2xl font-bold tracking-tight text-header-3"
                    >
                      Technology Consulting: Customized Solutions and Advisory Services
                    </h2>
                    <p className="mt-6 mr-4">
                      The commercialized market of hydrogen technologies is always evolving. We can
                      provide scientific advice on new hydrogen technology to de-risk an investment
                      . Additionally, no one hydrogen project will be the same because different
                      sites have different requirements and end goals. We can advise on hydrogen
                      project proposals and offer step-by-step guidance to achieve your overall
                      business goals.
                    </p>
                  </div>
                  <div className="lg:w-1/2">
                    <img src={techConsulting} alt="" className="mt-4 lg:mt-0 shadow-xl rounded-lg h-96 w-112" />
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
