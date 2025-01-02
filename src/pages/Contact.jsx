import React, { useState } from "react";
import { motion } from "framer-motion";
import { BuildingOffice2Icon, EnvelopeIcon } from "@heroicons/react/24/outline";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
    },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailBody = `
      Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Phone: ${formData.phoneNumber}
      Message: ${formData.message}
    `;
    window.location.href = `mailto:hyre-energy@hyre-energy.com?subject=Message from ${
      formData.firstName
    }&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <motion.div
      className="relative isolate bg-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <motion.div
          className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48"
          variants={itemVariants}
        >
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-custom-blue">
              Let's work together
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join us in the hydrogen revolution, paving the way for sustainable
              living and renewable energy solutions.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-custom-yellow"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  Irvine,
                  <br />
                  California
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    className="h-7 w-6 text-custom-yellow"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900"
                    href="mailto:hyre-energy@hyre-energy.com"
                  >
                    hyre-energy@hyre-energy.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
          variants={itemVariants}
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="firstName"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-custom-blue placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-blue sm:text-sm sm:leading-6"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="lastName"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-custom-blue placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-blue sm:text-sm sm:leading-6"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </motion.div>
              <motion.div className="sm:col-span-2" variants={itemVariants}>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-custom-blue placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-blue sm:text-sm sm:leading-6"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </motion.div>
              <motion.div className="sm:col-span-2" variants={itemVariants}>
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-custom-blue placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-blue sm:text-sm sm:leading-6"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
              </motion.div>
              <motion.div className="sm:col-span-2" variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-custom-blue placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-blue sm:text-sm sm:leading-6"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </motion.div>
            </div>
            <motion.div
              className="mt-8 flex justify-end"
              variants={itemVariants}
            >
              <motion.button
                type="submit"
                className="rounded-md bg-custom-yellow px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-custom-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-blue"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send message
              </motion.button>
            </motion.div>
          </div>
        </motion.form>
      </div>
    </motion.div>
  );
}
/* import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { BuildingOffice2Icon, EnvelopeIcon } from "@heroicons/react/24/outline";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
    },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    try {
      const response = await axios.post("/send-email", {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        message: `Phone: ${formData.phoneNumber}\n\nMessage: ${formData.message}`,
      });

      if (response.data.success) {
        setStatus("Your message has been sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("An error occurred while sending your message. Please try again.");
    }
  };

  return (
    <motion.div
      className="relative isolate bg-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <motion.div
          className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48"
          variants={itemVariants}
        >
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-custom-blue">
              Let's work together
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join us in the hydrogen revolution, paving the way for sustainable living and renewable energy solutions.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-custom-yellow"
                    aria-hidden="true"
                  />
                </dt>
                <dd>Irvine, California</dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <EnvelopeIcon
                    className="h-7 w-6 text-custom-yellow"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900"
                    href="mailto:hyre-energy@hyre-energy.com"
                  >
                    marketing@hyre-energy.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
          variants={itemVariants}
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {["firstName", "lastName", "email", "phoneNumber"].map((field, idx) => (
                <motion.div
                  key={field}
                  className={field === "phoneNumber" ? "sm:col-span-2" : ""}
                  variants={itemVariants}
                >
                  <label
                    htmlFor={field}
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    {field.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      id={field}
                      className="block w-full rounded-md px-3.5 py-2"
                      value={formData[field]}
                      onChange={handleChange}
                    />
                  </div>
                </motion.div>
              ))}
              <motion.div className="sm:col-span-2" variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md px-3.5 py-2"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </motion.div>
            </div>
            <motion.div className="mt-8 flex justify-end" variants={itemVariants}>
              <motion.button
                type="submit"
                className="rounded-md bg-custom-yellow px-3.5 py-2.5"
              >
                Send message
              </motion.button>
            </motion.div>
          </div>
          {status && <p className="mt-4 text-sm text-gray-600">{status}</p>}
        </motion.form>
      </div>
    </motion.div>
  );
} */
