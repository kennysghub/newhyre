import React from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import BobbyImg from "../assets/Bobby.jpg";
import ChristianImg from "../assets/ChristianRose.jpg";
import JBImg from "../assets/JB.jpg";
import DAImg from "../assets/DA.jpg";

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

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <Section>
          <section className="-mt-20 w-full pt-20 pb-12 md:pt-24 md:pb-24 lg:pt-32 lg:pb-32 bg-gradient-to-br from-blue-600 via-blue-500 to-green-400">
            <div className="container mx-auto max-w-7xl px-4 md:px-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  About Hyre Energy
                </h1>
                <p className="max-w-[900px] text-blue-100 md:text-3xl font-bold">
                  Experts in hydrogen technologies and energy systems 
                </p>
              </div>
            </div>
          </section>
        </Section>

        {/* Core Beliefs Section */}
        <Section>
          <section className="w-full py-12 md:py-14 lg:py-20">
            <div className="container mx-auto max-w-7xl px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-10 text-center">
                Our Core Beliefs
              </h2>
              <div className="space-y-12 max-w-6xl mx-auto">
                {[
                  {
                    icon: (
                      <svg
                        className="w-12 h-12 text-yellow-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    ),
                    title: "Hydrogen will Lead the Clean Energy Revolution",
                    content:
                      "At Hyre Energy, we believe hydrogen will alleviate many challenges in the global fight against climate change due to its extraordinary versatility. We are architects of change, committed to pioneering innovative hydrogen solutions that stand as cornerstones in achieving and surpassing the world's decarbonization goals.",
                  },
                  {
                    icon: (
                      <svg
                        className="w-12 h-12 text-green-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    ),
                    title: "Collaborative Innovation for Zero Emissions",
                    content:
                      "Successful hydrogen deployment hinges on collaborative innovation. We actively seek partnerships with industries, governments, organizations, and educational institutions to co-create a hydrogen-powered future. Using our expertise to create tailored solutions, we aim to significantly contribute to the growth of the hydrogen market and the realization of a decarbonized world.",
                  },
                  {
                    icon: (
                      <svg
                        className="w-12 h-12 text-blue-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    ),
                    title: "Expert Guidance for an Emerging Market",
                    content:
                      "We have an unwavering commitment to empower the hydrogen market to meet global environmental and economic goals. Our tailored solutions to meet specific needs and objectives will contribute to widespread hydrogen adoption. We strive to provide the best solution for specific goals, considering all available technologies.",
                  },
                ].map((belief, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex items-center gap-4">
                      {belief.icon}
                      <h3 className="text-2xl font-bold">{belief.title}</h3>
                    </div>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                      {belief.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Section>

        {/* Leadership Section */}
        <Section>
          <section className="w-full py-6 md:py-14 lg:py-20 bg-blue-100">
            <div className="container mx-auto max-w-7xl px-4 md:px-6">
              <div className="space-y-5">
                <div className="text-center space-y-5">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Meet the Founding Team
                  </h2>
                  <p className="max-w-[900px] mx-auto text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl text-left">
                    A group of students from the National Fuel Cell Research
                    Center (NFCRC) at the University of California, Irvine
                    (UCI).
                  </p>
                </div>

                <div className="max-w-[900px] mx-auto text-left">
                  <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl">
                    Our team comprises hydrogen experts with experimental and
                    technical research experience with connections to the energy
                    industry. We are a highly motivated group with extreme
                    ambition to contribute to the success of the hydrogen energy
                    industry.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 pt-8 max-w-6xl mx-auto">
                  {/* Bobby's Profile */}
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-48 h-48 rounded-full overflow-hidden">
                      <img
                        src={BobbyImg}
                        alt="Bobby Laviguer, Co-Founder and CEO"
                        className="object-cover w-full h-full object-top"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">Bobby Laviguer</h3>
                      <p className="text-blue-600 text-xl font-bold">
                        Co-Founder, CEO
                      </p>
                      <div className="space-y-1 text-sm-xl1 text-gray-600">
                        <p>MS in Mechanical Engineering</p>
                        <p>University of California, Irvine, 2025</p>
                        <p className="pt-2">BS in Mechanical Engineering w/ Specialization in Energy Systems</p>
                        <p>University of California, Irvine, 2021</p>
                      </div>
                    </div>
                  </div>

                  {/* Christian's Profile */}
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-48 h-48 rounded-full overflow-hidden">
                      <img
                        src={ChristianImg}
                        alt="Christian Rose, Co-Founder and CTO"
                        className="object-cover w-full h-full object-top"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">Christian Rose</h3>
                      <p className="text-blue-600 text-xl font-bold">
                        Co-Founder, CTO
                      </p>
                      <div className="space-y-1 text-sm-xl1 text-gray-600">
                        <p>MS in Mechanical Engineering</p>
                        <p>University of California, Irvine, 2025</p>
                        <p className="pt-2">BS in Mechanical Engineering w/ Specialization in Energy Engineering</p>
                        <p>Southern Illinois University Carbondale, 2022</p>
                        <p className="pt-2">BS in Physics</p>
                        <p>Southern Illinois University Carbondale, 2022</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Section>
        
        {/* Advisors Section */}
        <Section>
          <section className="w-full py-6 md:py-14 lg:py-20 bg-yellow-50">
            <div className="container mx-auto max-w-7xl px-4 md:px-6">
              <div className="space-y-5">
                <div className="text-center space-y-5">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Meet the Advisors
                  </h2>
                  <p className="max-w-[900px] mx-auto text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl text-left">
                    Hyre Energy is guided by world renowned industry and academic experts in topics spanning from renewable energy dynamics, electrochemical systems, and materials science to sustainable manufacturing processes and government policy.
                  </p>
                  <p className="max-w-[900px] mx-auto text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl text-left">
                    Our advisors provide valuable guidance beyond the technical aspects and place a large emphasis on solving problems with more than just equations and technical solutions.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 pt-8 max-w-6xl mx-auto">
                  {/* Jack Brouwer Profile */}
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-48 h-48 rounded-full overflow-hidden">
                      <img
                        src={JBImg}  // Replace with actual image path
                        alt="Jack Brouwer, Advisor"
                        className="object-cover w-full h-full object-top"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">Jack Brouwer</h3>
                      <p className="text-blue-600 text-xl font-bold">
                        Hydrogen Energy Systems & Policy
                      </p>
                      <div className="space-y-1 text-sm-xl1 text-gray-600">
                        <p>Professor and Chancellor's Fellow, Mechanical and Aerospace Engineering</p>
                        <p>Joint Professor, Chemical and Biomolecular Engineering</p>
                        <p>Joint Professor, Civil and Environmental Engineering</p>
                        <p>Director, Clean Energy Institute</p>
                      </div>
                      <p className="text-md text-gray-700 leading-relaxed mt-3 text-left">
                        Dr. Jack Brouwer is a leading researcher in fuel cell and hydrogen technologies, with decades of experience advancing clean energy solutions. 
                        As former Director of the NFCRC and now current Director of the Clean Energy Institute at UC Irvine, he has pioneered research on electrochemical energy system dynamics and hydrogen shaping the future of sustainable energy.
                        His applied research has enabled him to work with policy makers to develop and implement clean energy legislation. 
                        Nobody can deny that Jack's passion about hydrogen and sustainable energy is contagious and his leadership and values are inspiring.
                      </p>
                    </div>
                  </div> 
                  {/* Diran Apelian Profile */}
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-48 h-48 rounded-full overflow-hidden">
                      <img
                        src={DAImg}  // Replace with actual image path
                        alt="Diran Apelian, Advisor"
                        className="object-cover w-full h-full object-top"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">Diran Apelian</h3>
                      <p className="text-blue-600 text-xl font-bold">Materials Science & Business Operations</p>
                      <div className="space-y-1 text-sm-xl1 text-gray-600">
                        <p>Distinguished Professor, Materials Science and Engineering</p>
                        <p>Director, Pratt & Whitney Center of Excellence</p>
                        <p>Director, Advanced Casting Research Center</p>
                        <p>Member, National Academy of Engineering</p>
                        </div>
                        <p className="text-md text-gray-700 leading-relaxed mt-3 text-left">
                        Dr. Diran Apelian is widely recognized for his innovative research and leadership in metal processing. 
                        He launched the ACRC research consortium in 1984 to link the best in engineering and science with the manufacturing needs of the metals processing industry 
                        which still serves as a model for finding best practice solutions through academic research.
                        More recently, his work in the development of technologies to recover and recycle materials has become critically important for a sustainable future. 
                        Diran's commitment to solving problems for the good of humanity enshrines him as more than just an engineer.
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Section>
        
        {/* CTA Section */}
        <Section>
          <section className="w-full py-12 md:py-14 lg:py-20 bg-white">
            <div className="container mx-auto max-w-7xl px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                  Join Us in Shaping the Future of Energy
                </h2>
                <p className="max-w-[800px] mx-auto text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 ">
                  Whether you're a potential partner, investor, or someone
                  passionate about clean energy, we invite you to be part of our
                  journey towards a sustainable, hydrogen-powered future.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
        </Section>
      </main>
    </div>
  );
}
