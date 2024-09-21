import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import systemIntegrationImg from "../assets/system-integration.png";
import emissionsReductionImg from "../assets/emissions-reductions.jpg";
import stockImg from "../assets/stock-image.jpeg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Services() {
  const posts = [
    {
      id: 1,
      title: "Integration Support and Project Management",
      href: "/services",
      description:
        "Hydrogen projects involve new and constantly emerging technologies that require a fundamental knowledge to safely operate and maintain...",
      imageUrl: systemIntegrationImg,
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Integration", href: "/services" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl: systemIntegrationImg,
      },
    },
    {
      id: 2,
      title: "Emissions Reduction Planning",
      href: "/services",
      description:
        "We understand that hydrogen can be used in many unique applications, and we want to help unlock the true potential of hydrogen...",
      imageUrl: emissionsReductionImg,
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Emissions Reduction Planning", href: "/services" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "/services",
        imageUrl: emissionsReductionImg,
      },
    },
    {
      id: 3,
      title:
        "Technology Consulting: Customized Solutions and Advisory Services",
      href: "/services",
      description:
        "The commercialized market of hydrogen technologies is always evolving...",
      imageUrl: stockImg,
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Consulting", href: "/services" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl: stockImg,
      },
    },
  ];
  return (
    <motion.div
      className="bg-white py-24 sm:py-32"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold tracking-tight text-custom-yellow sm:text-4xl"
          >
            Services
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-2 text-lg leading-8 text-gray-600"
          >
            We pride ourselves on offering 3 exclusive services that we view as
            necessary for the adoption of hydrogen energy systems.
          </motion.p>
          <motion.div
            className="mt-16 space-y-20 lg:mt-20 lg:space-y-20"
            variants={containerVariants}
          >
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="relative isolate flex flex-col gap-8 lg:flex-row"
                custom={index}
                animate="visible"
                initial="hidden"
              >
                <motion.div
                  className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={post.imageUrl}
                    alt=""
                    className="absolute inset-0 h-full w-full rounded-2xl bg-custom-blue object-cover shadow-lg"
                  />
                </motion.div>
                <div>
                  <motion.div
                    className="flex items-center gap-x-4 text-xs"
                    variants={itemVariants}
                  >
                    <Link
                      to={post.category.href}
                      className="relative z-10 rounded-full bg-custom-blue px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </Link>
                  </motion.div>
                  <div className="group relative max-w-xl">
                    <motion.h3
                      variants={itemVariants}
                      className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
                    >
                      <Link to={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </motion.h3>
                    <motion.p
                      variants={itemVariants}
                      className="mt-5 text-sm leading-6 text-gray-600"
                    >
                      {post.description}
                    </motion.p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
