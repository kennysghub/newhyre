// export default function Contact() {
//   return (
//     <div className="relative bg-white">
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
//             <h2 className="text-3xl font-bold tracking-tight text-gray-900">Let's work together</h2>
//             <p className="mt-2 text-lg leading-8 text-gray-600">
//               Join us in the hydrogen revolution, paving the way for sustainable living and
//               renewable energy solutions.
//             </p>
//             <form action="#" method="POST" className="mt-16">
//               <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//                 <div>
//                   <label
//                     htmlFor="first-name"
//                     className="block text-sm font-semibold leading-6 text-gray-900"
//                   >
//                     First name
//                   </label>
//                   <div className="mt-2.5">
//                     <input
//                       type="text"
//                       name="first-name"
//                       id="first-name"
//                       autoComplete="given-name"
//                       className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="last-name"
//                     className="block text-sm font-semibold leading-6 text-gray-900"
//                   >
//                     Last name
//                   </label>
//                   <div className="mt-2.5">
//                     <input
//                       type="text"
//                       name="last-name"
//                       id="last-name"
//                       autoComplete="family-name"
//                       className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
//                     />
//                   </div>
//                 </div>
//                 <div className="sm:col-span-2">
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-semibold leading-6 text-gray-900"
//                   >
//                     Email
//                   </label>
//                   <div className="mt-2.5">
//                     <input
//                       id="email"
//                       name="email"
//                       type="email"
//                       autoComplete="email"
//                       className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
//                     />
//                   </div>
//                 </div>
//                 <div className="sm:col-span-2">
//                   <label
//                     htmlFor="company"
//                     className="block text-sm font-semibold leading-6 text-gray-900"
//                   >
//                     Company
//                   </label>
//                   <div className="mt-2.5">
//                     <input
//                       type="text"
//                       name="company"
//                       id="company"
//                       autoComplete="organization"
//                       className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
//                     />
//                   </div>
//                 </div>
//                 <div className="sm:col-span-2">
//                   <div className="flex justify-between text-sm leading-6">
//                     <label htmlFor="phone" className="block font-semibold text-gray-900">
//                       Phone
//                     </label>
//                     <p id="phone-description" className="text-gray-400">
//                       Optional
//                     </p>
//                   </div>
//                   <div className="mt-2.5">
//                     <input
//                       type="tel"
//                       name="phone"
//                       id="phone"
//                       autoComplete="tel"
//                       aria-describedby="phone-description"
//                       className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
//                     />
//                   </div>
//                 </div>
//                 <div className="sm:col-span-2">
//                   <div className="flex justify-between text-sm leading-6">
//                     <label
//                       htmlFor="message"
//                       className="block text-sm font-semibold leading-6 text-gray-900"
//                     >
//                       How can we help you?
//                     </label>
//                     <p id="message-description" className="text-gray-400">
//                       Max 500 characters
//                     </p>
//                   </div>
//                   <div className="mt-2.5">
//                     <textarea
//                       id="message"
//                       name="message"
//                       rows={4}
//                       aria-describedby="message-description"
//                       className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
//                       defaultValue={""}
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
//                 <button
//                   type="submit"
//                   className="rounded-md bg-emerald-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
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
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
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
      Company: ${formData.company}
      Phone: ${formData.phone}
      Message: ${formData.message}
    `;
    window.location.href = `mailto:hyre-energy@hyre-energy.com?subject=Message from ${
      formData.firstName
    }&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <div className="relative bg-custom-bg">
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <img
          className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
          alt=""
        />
      </div>
      <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-header-3">Let's work together</h2>
            <p className="mt-2 text-lg leading-8 text-gray-50">
              Join us in the hydrogen revolution, paving the way for sustainable living and
              renewable energy solutions.
            </p>
            <form onSubmit={handleSubmit} className="mt-16">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                {/* First Name */}
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-header-4"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="first-name"
                    autoComplete="given-name"
                    className=" block w-full rounded-md border-0 px-3.5 py-2 text-header-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-header-4"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="last-name"
                    autoComplete="family-name"
                    className=" block w-full rounded-md border-0 px-3.5 py-2 text-header-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>

                {/* Email */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-header-4"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className=" block w-full rounded-md border-0 px-3.5 py-2 text-header-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Company */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold leading-6 text-header-4"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className=" block w-full rounded-md border-0 px-3.5 py-2 text-header-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                {/* Phone */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold leading-6 text-header-4"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className=" block w-full rounded-md border-0 px-3.5 py-2 text-header-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-header-4"
                  >
                    How can we help you?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className=" block w-full rounded-md border-0 px-3.5 py-2 text-header-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-10 flex justify-end border-t border-gray-300 pt-8">
                <button
                  type="submit"
                  className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
