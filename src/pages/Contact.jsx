// import { useState } from "react";

// export function OldContact() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     company: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const emailBody = `
//       Name: ${formData.firstName} ${formData.lastName}
//       Email: ${formData.email}
//       Company: ${formData.company}
//       Phone: ${formData.phone}
//       Message: ${formData.message}
//     `;
//     window.location.href = `mailto:hyre-energy@hyre-energy.com?subject=Message from ${
//       formData.firstName
//     }&body=${encodeURIComponent(emailBody)}`;
//   };

//   return (
//     <div className="relative ">
//       <div className="lg:absolute lg:inset-0 lg:left-1/2">
//         <img
//           className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
//           src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
//           alt=""
//         />
//       </div>
//       <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
//         <div className="px-6 lg:px-8">
//           <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
//             <h2 className="text-4xl font-bold tracking-tight ">
//               Let's work together
//             </h2>
//             <p className="mt-2 text-2xl leading-8 ">
//               Join us in the hydrogen revolution, paving the way for sustainable
//               living and renewable energy solutions.
//             </p>
//             <form onSubmit={handleSubmit} className="mt-16">
//               <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//                 {/* First Name */}
//                 <div>
//                   <label
//                     htmlFor="first-name"
//                     className="block text-sm font-semibold leading-6 "
//                   >
//                     First name
//                   </label>
//                   <input
//                     type="text"
//                     name="firstName"
//                     id="first-name"
//                     autoComplete="given-name"
//                     className=" block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-custom-blue placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-blue sm:text-sm sm:leading-6"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 {/* Last Name */}
//                 <div>
//                   <label
//                     htmlFor="last-name"
//                     className="block text-sm font-semibold leading-6 "
//                   >
//                     Last name
//                   </label>
//                   <input
//                     type="text"
//                     name="lastName"
//                     id="last-name"
//                     autoComplete="family-name"
//                     className=" block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-custom-blue placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-blue sm:text-sm sm:leading-6"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 {/* Email */}
//                 <div className="sm:col-span-2">
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-semibold leading-6 "
//                   >
//                     Email
//                   </label>
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     className=" block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-custom-blue placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-blue sm:text-sm sm:leading-6"
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 {/* Company */}
//                 <div className="sm:col-span-2">
//                   <label
//                     htmlFor="company"
//                     className="block text-sm font-semibold leading-6 "
//                   >
//                     Company
//                   </label>
//                   <input
//                     type="text"
//                     name="company"
//                     id="company"
//                     autoComplete="organization"
//                     className=" block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-custom-blue placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-blue sm:text-sm sm:leading-6"
//                     value={formData.company}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 {/* Phone */}
//                 <div className="sm:col-span-2">
//                   <label
//                     htmlFor="phone"
//                     className="block text-sm font-semibold leading-6 "
//                   >
//                     Phone
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     id="phone"
//                     autoComplete="tel"
//                     className=" block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-custom-blue placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-blue sm:text-sm sm:leading-6"
//                     value={formData.phone}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 {/* Message */}
//                 <div className="sm:col-span-2">
//                   <label
//                     htmlFor="message"
//                     className="block text-sm font-semibold leading-6 "
//                   >
//                     How can we help you?
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows={4}
//                     className=" block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-custom-blue placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-blue sm:text-sm sm:leading-6"
//                     value={formData.message}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <div className="mt-10 flex justify-end border-t border-gray-300 pt-8">
//                 <button
//                   type="submit"
//                   className="rounded-md bg-header-3 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-header-1 focus:outline-none focus:ring-2 focus:ring-custom-blue focus:ring-offset-2"
//                 >
//                   Send message
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// /*
//   This example requires some changes to your config:

//   ```
//   // tailwind.config.js
//   module.exports = {
//     // ...
//     plugins: [
//       // ...
//       require('@tailwindcss/forms'),
//     ],
//   }
//   ```
// */
// import {
//   BuildingOffice2Icon,
//   EnvelopeIcon,
//   PhoneIcon,
// } from "@heroicons/react/24/outline";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     company: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const emailBody = `
//       Name: ${formData.firstName} ${formData.lastName}
//       Email: ${formData.email}
//       Company: ${formData.company}
//       Phone: ${formData.phone}
//       Message: ${formData.message}
//     `;
//     window.location.href = `mailto:hyre-energy@hyre-energy.com?subject=Message from ${
//       formData.firstName
//     }&body=${encodeURIComponent(emailBody)}`;
//   };
//   return (
//     <div className="relative isolate bg-white">
//       <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
//         <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
//           <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
//             <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
//               <svg
//                 aria-hidden="true"
//                 className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
//               >
//                 <defs>
//                   <pattern
//                     x="100%"
//                     y={-1}
//                     id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
//                     width={200}
//                     height={200}
//                     patternUnits="userSpaceOnUse"
//                   >
//                     <path d="M130 200V.5M.5 .5H200" fill="none" />
//                   </pattern>
//                 </defs>
//                 <rect fill="white" width="100%" height="100%" strokeWidth={0} />
//                 <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
//                   <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
//                 </svg>
//                 <rect
//                   fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
//                   width="100%"
//                   height="100%"
//                   strokeWidth={0}
//                 />
//               </svg>
//             </div>
//             <h2 className="text-3xl font-bold tracking-tight text-gray-900">
//               Let's work together
//             </h2>
//             <p className="mt-6 text-lg leading-8 text-gray-600">
//               Join us in the hydrogen revolution, paving the way for sustainable
//               living and renewable energy solutions.
//             </p>
//             <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
//               <div className="flex gap-x-4">
//                 <dt className="flex-none">
//                   <span className="sr-only">Address</span>
//                   <BuildingOffice2Icon
//                     aria-hidden="true"
//                     className="h-7 w-6 text-gray-400"
//                   />
//                 </dt>
//                 <dd>
//                   Irvine,
//                   <br />
//                   California
//                 </dd>
//               </div>

//               <div className="flex gap-x-4">
//                 <dt className="flex-none">
//                   <span className="sr-only">Email</span>
//                   <EnvelopeIcon
//                     aria-hidden="true"
//                     className="h-7 w-6 text-gray-400"
//                   />
//                 </dt>
//                 <dd>
//                   <a
//                     href="mailto:hyre-energy@hyre-energy.com"
//                     className="hover:text-gray-900"
//                   >
//                     hyre-energy@hyre-energy.com
//                   </a>
//                 </dd>
//               </div>
//             </dl>
//           </div>
//         </div>
//         <form
//           onSubmit={handleSubmit}
//           method="POST"
//           className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
//         >
//           <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
//             <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//               <div>
//                 <label
//                   htmlFor="first-name"
//                   className="block text-sm font-semibold leading-6 text-gray-900"
//                 >
//                   First name
//                 </label>
//                 <div className="mt-2.5">
//                   <input
//                     id="first-name"
//                     name="first-name"
//                     type="text"
//                     autoComplete="given-name"
//                     className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-custom-blue placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-blue sm:text-sm sm:leading-6"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label
//                   htmlFor="last-name"
//                   className="block text-sm font-semibold leading-6 text-gray-900"
//                 >
//                   Last name
//                 </label>
//                 <div className="mt-2.5">
//                   <input
//                     id="last-name"
//                     name="last-name"
//                     type="text"
//                     autoComplete="family-name"
//                     className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-custom-blue placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-blue sm:text-sm sm:leading-6"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>
//               <div className="sm:col-span-2">
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-semibold leading-6 text-gray-900"
//                 >
//                   Email
//                 </label>
//                 <div className="mt-2.5">
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-custom-blue placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-blue sm:text-sm sm:leading-6"
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>
//               <div className="sm:col-span-2">
//                 <label
//                   htmlFor="phone-number"
//                   className="block text-sm font-semibold leading-6 text-gray-900"
//                 >
//                   Phone number
//                 </label>
//                 <div className="mt-2.5">
//                   <input
//                     id="phone-number"
//                     name="phone-number"
//                     type="tel"
//                     autoComplete="tel"
//                     className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-custom-blue placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-blue sm:text-sm sm:leading-6"
//                     value={formData.phone}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>
//               <div className="sm:col-span-2">
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-semibold leading-6 text-gray-900"
//                 >
//                   Message
//                 </label>
//                 <div className="mt-2.5">
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows={4}
//                     className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-custom-blue placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-blue sm:text-sm sm:leading-6"
//                     defaultValue={""}
//                     value={formData.message}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="mt-8 flex justify-end">
//               <button
//                 type="submit"
//                 className="rounded-md bg-custom-blue px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-blue"
//               >
//                 Send message
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
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
