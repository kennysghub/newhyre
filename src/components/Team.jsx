// import Bobby from "../assets/Bobby.jpg";
// import Christian from "../assets/ChristianRose.jpg";

// const people = [
//   {
//     name: "Bobby Laviguer",
//     role: "Founder",
//     imageUrl: Bobby,
//     bio: "-MS in Mechanical Engineering, University of California, Irvine, 2024 -BS in Mechanical Engineering with Specialization in Energy Systems, University of California, Irvine, 2021",
//   },
//   {
//     name: "Christian Rose",
//     role: "Co-Founder",
//     imageUrl: Christian,
//     bio: "-MS in Mechanical Engineering, University of California, Irvine, 2024-BS in Mechanical Engineering w/ Specialization in Energy Engineering, Southern Illinois University Carbondale, 2021-BS in Physics, Southern Illinois University Carbondale, 2021",
//   },
// ];

// export default function Team() {
//   return (
//     <div className="bg-white py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl sm:text-center">
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//             Meet our leadership
//           </h2>
//           <p className="mt-6 text-lg leading-8 text-gray-600">
//             We’re a dynamic group of individuals who are passionate about what
//             we do and dedicated to delivering the best results for our clients.
//           </p>
//         </div>
//         <ul
//           role="list"
//           className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
//         >
//           {people.map((person) => (
//             <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
//               <img
//                 alt=""
//                 src={person.imageUrl}
//                 className="aspect-[4/5] w-64 flex-none rounded-3xl object-fit shadow-2xl"
//               />
//               <div className="flex-auto">
//                 <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
//                   {person.name}
//                 </h3>
//                 <p className="text-base leading-7 text-gray-600">
//                   {person.role}
//                 </p>
//                 <ul className="mt-4 text-left">
//                   {person.bio.split("-").map(
//                     (point, index) =>
//                       point.trim() && (
//                         <li key={index} className="list-disc">
//                           {point}
//                         </li>
//                       )
//                   )}
//                 </ul>
//                 {/* <p className="mt-6 text-base leading-7 text-gray-600">
//                   {person.bio}
//                 </p> */}
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// // <ul className="mt-4 text-left">
// //   {person.bio.split("-").map(
// //     (point, index) =>
// //       point.trim() && (
// //         <li key={index} className="list-disc">
// //           {point}
// //         </li>
// //       )
// //   )}
// // </ul>;
import React from "react";
import { motion } from "framer-motion";
import Bobby from "../assets/Bobby.jpg";
import Christian from "../assets/ChristianRose.jpg";

const people = [
  {
    name: "Bobby Laviguer",
    role: "Founder",
    imageUrl: Bobby,
    bio: "-MS in Mechanical Engineering, University of California, Irvine, 2024 -BS in Mechanical Engineering with Specialization in Energy Systems, University of California, Irvine, 2021",
  },
  {
    name: "Christian Rose",
    role: "Co-Founder",
    imageUrl: Christian,
    bio: "-MS in Mechanical Engineering, University of California, Irvine, 2024-BS in Mechanical Engineering w/ Specialization in Energy Engineering, Southern Illinois University Carbondale, 2021-BS in Physics, Southern Illinois University Carbondale, 2021",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
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

export default function Team() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mx-auto max-w-2xl sm:text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-custom-yellow sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We're a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </motion.div>
        <motion.ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {people.map((person) => (
            <motion.li
              key={person.name}
              className="flex flex-col gap-6 xl:flex-row"
              variants={itemVariants}
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                alt=""
                src={person.imageUrl}
                className="aspect-[4/5] w-64 flex-none rounded-3xl object-fit shadow-2xl"
              />
              <div className="flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-custom-blue">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {person.role}
                </p>
                <ul className="mt-4 text-left">
                  {person.bio.split("-").map(
                    (point, index) =>
                      point.trim() && (
                        <li key={index} className="list-disc">
                          {point}
                        </li>
                      )
                  )}
                </ul>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
