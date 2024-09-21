import React from "react";
import { motion, useInView } from "framer-motion";
import Team from "../components/Team";
import Services from "../components/Services";
import Hero from "../components/Hero";
import CTA from "../components/CTA";

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
    <div>
      <Section>
        <Hero />
      </Section>
      <Section>
        <CTA />
      </Section>
      <Section>
        <Team />
      </Section>
      <Section>
        <Services />
      </Section>
    </div>
  );
}
