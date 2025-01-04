import React from "react";
import { ClipboardList, Zap, Cog, Database, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
const Section = ({ children }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function IntegrationSupportPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Section>
          <section className="-mt-20 w-full pt-20 pb-12 md:pt-24 md:pb-24 lg:pt-32 lg:pb-32 bg-gradient-to-br from-blue-600 via-blue-500 to-green-400">
            <div className="container mx-auto max-w-7xl px-4 md:px-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Project Management
                </h1>
                <p className="max-w-[900px] text-blue-100 md:text-3xl font-bold">
                  Streamlining hydrogen project development with comprehensive
                  integration and management solutions
                </p>
              </div>
            </div>
          </section>
        </Section>

        {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 via-green-50 to-yellow-50">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Integration Support and Project Management
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Streamlining hydrogen project development with comprehensive
                  integration and management solutions
                </p>
              </div>
            </div>
          </div>
        </section> */}

        <Section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 text-center">
                Our Project Management Approach
              </h2>
              <div className="grid gap-6 lg:grid-cols-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4">
                    <ClipboardList className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Project Assessment</h3>
                  <p className="text-gray-600">
                    We begin with a comprehensive assessment of your project
                    requirements and objectives.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4">
                    <Zap className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Technology Selection
                  </h3>
                  <p className="text-gray-600">
                    We help you choose the most suitable hydrogen technologies
                    for your specific needs.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4">
                    <Cog className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Integration Planning
                  </h3>
                  <p className="text-gray-600">
                    We develop a detailed plan for integrating new hydrogen
                    technologies with existing systems.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4">
                    <Database className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Project Management</h3>
                  <p className="text-gray-600">
                    We oversee the entire implementation process, ensuring
                    smooth integration and operation.
                  </p>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-6 py-9">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="space-y-6 text-center"
                >
                  <h3 className="text-2xl space-y-2 text-gray-600">
                    <br/>
                    The first Hyre Energy projects entail islanded microgrid design and
                    development to provide renewable hydrogen to new HDV fueling stations,
                    existing industrial sites, and novel energy storage applications.
                  
                    Using our custom software, we obtain local weather data to optimize renewable
                    energy sources, battery and hydrogen energy storage, and electrolyzer
                    capacity intended to supply these sectors with targeted quantities of clean hydrogen.
              
                    We rely on our experience and expertise to engineer tailored solutions
                    which ensure high system efficiencies and the lowest levelized cost
                    of hydrogen to our customers.
                  </h3>
                </motion.div>
              </div>
          </section>
        </Section>
        <Section>
          <section className="w-full py-3 md:py-6 lg:py-9 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                <div className="space-y-4">
                  <h2 className="text-xl font-bold tracking-tighter sm:text-3xl">
                    The Challenge of Hydrogen Projects
                  </h2>
                  <p className="text-gray-600 text-2xl">
                  Hydrogen projects involve new and constantly emerging technologies that require fundamental knowledge to safely operate and maintain. The integration of these emerging technologies with established technologies, such as balance of plant equipment, is not often available through the original equipment manufacturers (OEMs).
                  </p>
                  <p className="text-gray-600 text-2xl">
                    There is no one-stop, turn-key solution due to
                    site-specific requirements and countless combinations of
                    technologies to achieve a certain end goal.
                  </p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-xl font-bold tracking-tighter sm:text-3xl">
                    Our Solution
                  </h2>
                  <p className="text-gray-600 text-2xl">
                    Hydrogen projects would normally require multiple expensive
                    engineering companies, but we can streamline project
                    development. We integrate and manage all technologies unique
                    to a hydrogen project, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-2xl text-gray-600">
                    <li>PEM fuel cells and electrolyzers</li>
                    <li>Alkaline electrolyzers</li>
                    <li>Solid-oxide fuel cells and electrolyzers</li>
                    <li>Cooling systems</li>
                    <li>Hydrogen compressors</li>
                    <li>Gaseous and liquid hydrogen storage</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </Section>
        <Section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
                Ready to Streamline Your Hydrogen Project?
              </h2>
              <p className="max-w-[700px] mx-auto text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-2xl/relaxed mb-12">
                Let us help you navigate the complexities of hydrogen technology
                integration and project management. Contact us today to discuss
                how we can support your hydrogen initiatives.
              </p>

              {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </button> */}
              <Link to="/contact">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </Link>
            </div>
          </section>
        </Section>
      </main>
    </div>
  );
}
