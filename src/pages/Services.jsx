import { motion } from "framer-motion";
import emissionsReductionImg from "../assets/emissions-reductions.jpg";
import systemIntegrationImg from "../assets/system-integration.png";
import stockImg from "../assets/stock-image.jpeg";

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

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Services() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <motion.h2
            className="text-3xl font-bold tracking-tight text-custom-blue sm:text-4xl"
            variants={fadeInUp}
          >
            Hyre Energy Services
          </motion.h2>
          <motion.p className="mt-4 text-gray-500" variants={fadeInUp}>
            We pride ourselves on offering 3 exclusive services that we view as
            necessary for the adoption of hydrogen energy systems.
          </motion.p>
        </motion.div>

        <motion.div className="mt-16 space-y-16">
          {features.map((feature, featureIdx) => (
            <motion.div
              key={feature.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: featureIdx * 0.2 }}
            >
              <motion.div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-start-1"
                    : "lg:col-start-8 xl:col-start-9",
                  "mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4"
                )}
                variants={fadeInUp}
              >
                <h3 className="text-lg font-medium text-custom-yellow">
                  {feature.name}
                </h3>
                <p className="mt-2 text-lg text-gray-500">
                  {feature.description}
                </p>
              </motion.div>
              <motion.div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-start-6 xl:col-start-5"
                    : "lg:col-start-1",
                  "flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8"
                )}
                variants={fadeInUp}
              >
                <motion.div
                  className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100 shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    alt={feature.imageAlt}
                    src={feature.imageSrc}
                    className="custom-img object-cover w-full h-full rounded-xl"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
