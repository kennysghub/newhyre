import { Link } from "react-router-dom";
import React from "react";
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

const Icon = ({ name }) => {
  const icons = {
    Lightbulb: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    ),
    Search: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
    FileText: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" x2="8" y1="13" y2="13" />
        <line x1="16" x2="8" y1="17" y2="17" />
        <line x1="10" x2="8" y1="9" y2="9" />
      </svg>
    ),
    ArrowRight: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    ),
    Cog: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
        <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M12 2v2" />
        <path d="M12 22v-2" />
        <path d="m17 20.66-1-1.73" />
        <path d="M11 10.27 7 3.34" />
        <path d="m20.66 17-1.73-1" />
        <path d="m3.34 7 1.73 1" />
        <path d="M14 12h8" />
        <path d="M2 12h2" />
        <path d="m20.66 7-1.73 1" />
        <path d="m3.34 17 1.73-1" />
        <path d="m17 3.34-1 1.73" />
        <path d="m11 13.73-4 6.93" />
      </svg>
    ),
    BarChart2: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" x2="18" y1="20" y2="10" />
        <line x1="12" x2="12" y1="20" y2="4" />
        <line x1="6" x2="6" y1="20" y2="14" />
      </svg>
    ),
    MessageCircle: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
      </svg>
    ),
    LifeBuoy: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="4.93" x2="9.17" y1="4.93" y2="9.17" />
        <line x1="14.83" x2="19.07" y1="14.83" y2="19.07" />
        <line x1="14.83" x2="19.07" y1="9.17" y2="4.93" />
        <line x1="14.83" x2="18.36" y1="9.17" y2="5.64" />
        <line x1="4.93" x2="9.17" y1="19.07" y2="14.83" />
      </svg>
    ),
  };
  return icons[name] || null;
};

const Card = ({ children, className }) => (
  <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
    {children}
  </div>
);

const Button = ({ children, className, ...props }) => (
  <button className={`px-4 py-2 rounded font-medium ${className}`} {...props}>
    {children}
  </button>
);

export default function TechnologyConsultingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Section>
          <section className="-mt-20 w-full pt-20 pb-12 md:pt-24 md:pb-24 lg:pt-32 lg:pb-32 bg-gradient-to-br from-blue-600 via-blue-500 to-green-400">
            <div className="container mx-auto max-w-7xl px-4 md:px-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Technology Consulting
                </h1>
                <p className="max-w-[700px] text-blue-100 md:text-3xl font-bold">
                  Expert guidance on hydrogen technologies to help your business succeed
                </p>
              </div>
            </div>
          </section>
        </Section>

        <Section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-12 text-center">
                Our Consulting Approach
              </h2>
              <div className="grid gap-6 lg:grid-cols-4">
                <Card>
                  <div className="mb-4 text-yellow-600">
                    <Icon name="Search" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Understand</h3>
                  <p className="text-gray-600">
                    We begin by thoroughly understanding your business goals and
                    project requirements.
                  </p>
                </Card>
                <Card>
                  <div className="w-12 h-12 text-yellow-600">
                    <Icon name="BarChart2" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Analyze</h3>
                  <p className="text-gray-600">
                    Our experts analyze the latest hydrogen technologies and
                    their applicability to your project.
                  </p>
                </Card>
                <Card>
                  <div className="w-12 h-12 text-yellow-600">
                    <Icon name="MessageCircle" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Advise</h3>
                  <p className="text-gray-600">
                    We provide tailored recommendations and strategies based on
                    our analysis.
                  </p>
                </Card>
                <Card>
                  <div className="w-12 h-12 text-yellow-600">
                    <Icon name="LifeBuoy" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Support</h3>
                  <p className="text-gray-600">
                    We offer ongoing support and guidance throughout your
                    project's lifecycle.
                  </p>
                </Card>
              </div>
            </div>
          </section>
        </Section>

        <Section>
          <section className="w-full py-0 md:py-3 lg:py-6 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
                    Navigating the Evolving Hydrogen Market
                  </h2>
                  <p className="text-2xl text-gray-600">
                  The commercialized market of hydrogen technologies is always evolving. 
                  We can provide technical advice on hydrogen equipment and integrated system designs 
                  to de-risk your investment. We can advise on hydrogen project proposals and offer 
                  step-by-step guidance to achieve your overall business goals.
                  </p>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tech%20consulting.jpg-DlaZEjMyMAfv0lv9KlCaFTwPqUlekh.jpeg"
                    alt="Technical consulting and blueprint review"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </section>
        </Section>

        <Section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-12 text-center">
                Our Technology Consulting Services
              </h2>
              <div className="grid gap-6 lg:grid-cols-3">
                <Card>
                  <div className="mb-4 text-yellow-600">
                    <Icon name="Search" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Technology Assessment
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Evaluation of emerging hydrogen technologies</li>
                    <li>Risk assessment for new investments</li>
                    <li>Comparative analysis of available solutions</li>
                    <li>Performance benchmarking</li>
                  </ul>
                </Card>
                <Card>
                  <div className="mb-4 text-yellow-600">
                    <Icon name="FileText" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Project Proposal Review
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Detailed analysis of project proposals</li>
                    <li>Feasibility studies</li>
                    <li>Technical and economic viability assessment</li>
                    <li>Recommendations for optimization</li>
                  </ul>
                </Card>
                <Card>
                  <div className="mb-4 text-yellow-600">
                    <Icon name="Cog" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Implementation Guidance
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Step-by-step project implementation plans</li>
                    <li>Technical support during deployment</li>
                    <li>Performance monitoring and optimization</li>
                    <li>Ongoing consultation and troubleshooting</li>
                  </ul>
                </Card>
              </div>
            </div>
          </section>
        </Section>

        <Section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
                Ready to Leverage Our Expertise?
              </h2>
              <p className="max-w-[700px] mx-auto text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-2xl/relaxed mb-12">
                Let us guide you through the complexities of hydrogen technology
                implementation. Contact us today to discuss how our consulting
                services can support your hydrogen initiatives.
              </p>
              <Link to="/contact">
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded inline-flex items-center">
                  Get in Touch
                  <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
                </button>
              </Link>
            </div>
          </section>
        </Section>
      </main>
    </div>
  );
}
