import React from "react";
import { Link } from "react-router-dom";
import { ClipboardList, LineChart, Lightbulb, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import IntegrationSupport from "../assets/integration-support-and-project-management.jpg";
import TechConsulting from "../assets/tech-consulting.jpg";


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

const Button = ({ children, className, ...props }) => (
  <button
    className={`px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Card = ({ children, className, ...props }) => (
  <div
    className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardHeader = ({ children, className, ...props }) => (
  <div className={`p-4 ${className}`} {...props}>
    {children}
  </div>
);

const CardContent = ({ children, className, ...props }) => (
  <div className={`p-4 ${className}`} {...props}>
    {children}
  </div>
);

const CardFooter = ({ children, className, ...props }) => (
  <div className={`p-4 border-t ${className}`} {...props}>
    {children}
  </div>
);

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Section>
          <section className="-mt-20 w-full pt-20 pb-12 md:pt-24 md:pb-24 lg:pt-32 lg:pb-32 bg-gradient-to-br from-blue-600 via-blue-500 to-green-400">
            <div className="container mx-auto max-w-7xl px-4 md:px-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Our Services
                </h1>
                <p className="text-blue-100 md:text-3xl font-bold">
                  Explore our services below to see how we can help
                  your business reduce emissions and get involved in the clean energy transformation
                </p>
              </div>
            </div>
          </section>
        </Section>
        <Section>
          <section className="w-full py-3 md:py-6 lg:py-9 bg-gradient-to-r from-blue-50 via-green-50 to-yellow-50">
            <div className="container px-4 py-6 md:px-6 mx-auto">
              {/* <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-8">
              Our Services
            </h1> */}
              {/* <p className="max-w-[700px] text-gray-700 md:text-xl lg:text-base xl:text-xl mb-12">
              At Hyre Energy LLC we pride ourselves on offering three exclusive
              services that we view as necessary for the adoption of hydrogen
              energy systems. Explore our services below to see how we can help
              your business reduce emissions and join the clean energy
              revolution.
            </p> */}
              <div className="grid gap-6 lg:grid-cols-3">
                <Card className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <ClipboardList className="w-8 h-8 text-blue-600" />
                      <h3 className="text-xl font-bold">
                        Project Management
                      </h3>
                    </div>
                    <p className="text-md text-gray-500">
                      Comprehensive oversight and implementation
                    </p>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-4">
                    <Link to="/services/integration-support" className="w-full">
                      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                        <img
                          src={IntegrationSupport}
                          alt="Team collaborating on project management"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </Link>
                    <ul className="list-disc list-inside space-y-2 text-md text-gray-600">
                      <li>End-to-end project coordination</li>
                      <li>System integration expertise</li>
                      <li>Timeline and resource management</li>
                      <li>Stakeholder communication</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link to="/services/integration-support" className="w-full">
                      <Button className="w-full bg-black text-white hover:bg-blue-700">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 inline" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <LineChart className="w-8 h-8 text-green-600" />
                      <h3 className="text-xl font-bold">
                        Emissions Reduction Planning
                      </h3>
                    </div>
                    <p className="text-md text-gray-500">
                      Strategic pathways to lower emissions
                    </p>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-4">
                  <Link to="/services/emissions-reduction" className="w-full">
                      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emissions%20reductions.jpg-EwN7gOWxh0dD6uiXrnK2FcvBsPg6Fs.jpeg"
                          alt="Industrial emissions and clean energy symbolism"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </Link>
                    <ul className="list-disc list-inside space-y-2 text-md text-gray-600">
                      <li>Comprehensive emissions assessment</li>
                      <li>Reduction strategy development</li>
                      <li>Implementation roadmap creation</li>
                      <li>Progress monitoring and reporting</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link to="/services/emissions-reduction" className="w-full">
                      <Button className="w-full bg-black text-white hover:bg-blue-700">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 inline" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Lightbulb className="w-8 h-8 text-yellow-600" />
                      <h3 className="text-xl font-bold">
                        Technology Consulting
                      </h3>
                    </div>
                    <p className="text-md text-gray-500">
                      Expert guidance on hydrogen solutions
                    </p>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-4">
                    <Link to="/services/technology-consulting" className="w-full">
                      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                        <img
                          src={TechConsulting}
                          alt="Technical consulting and blueprint review"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </Link>
                    <ul className="list-disc list-inside space-y-2 text-md text-gray-600">
                      <li>Technical feasibility studies</li>
                      <li>System design optimization</li>
                      <li>Technology selection support</li>
                      <li>Performance analysis</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link
                      to="/services/technology-consulting"
                      className="w-full"
                    >
                      <Button className="w-full bg-black text-white hover:bg-blue-700">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 inline" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>
        </Section>

        <Section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6 mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-8">
                Why Choose Hyre Energy?
              </h2>
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold">Expertise</h3>
                  <p className="text-2xl text-gray-600">
                    Our team of experts brings years of experience in hydrogen
                    technology, renewable energy, and industrial processes. We
                    stay at the forefront of innovation to deliver cutting-edge
                    solutions.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold">Customized Solutions</h3>
                  <p className="text-2xl text-gray-600">
                    We understand that every business is unique. That's why we
                    work closely with you to develop tailored hydrogen solutions
                    that meet your specific needs and goals.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold">Sustainability Focus</h3>
                  <p className="text-2xl text-gray-600">
                    Our commitment to sustainability drives everything we do. By
                    choosing Hyre Energy, you're partnering with a company
                    dedicated to reducing emissions and creating a cleaner
                    future.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold">End-to-End Support</h3>
                  <p className="text-2xl text-gray-600">
                    From initial consultation to implementation and ongoing
                    support, we're with you every step of the way. Our
                    comprehensive approach ensures the success of your hydrogen
                    initiatives.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Section>

        <Section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container px-4 md:px-6 mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-8">
                Ready to Transform Your Energy Future?
              </h2>
              <p className="max-w-[700px] mx-auto text-gray-700 md:text-xl lg:text-base xl:text-2xl mb-12">
                Take the first step towards a sustainable, hydrogen-powered
                future for your business. Contact us today to discuss how Hyre
                Energy can help you achieve your energy goals.
              </p>
              <Link to="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3">
                  Get in Touch
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Button>
              </Link>
            </div>
          </section>
        </Section>
      </main>
    </div>
  );
}
