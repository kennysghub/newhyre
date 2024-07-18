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

// export function TeamOld() {
//   return (
//     <div className="bg-custom-bg py-8 lg:px-8">
//       <div className="max-w-5xl mx-auto px-6">
//         <h2 className="text-3xl font-bold tracking-tight text-header-3 sm:text-4xl text-center">
//           Our team
//         </h2>
//         <p className="mt-6 text-lg leading-8 text-gray-50 text-center">
//           We’re a dynamic group of individuals who are passionate about what we
//           do and dedicated to delivering the best results for our clients.
//         </p>

//         <div className="mt-8 flex justify-center space-x-8 text-gray-50">
//           {people.map((person) => (
//             <div key={person.name} className="flex flex-col items-center">
//               <div className="flex justify-center items-center overflow-hidden">
//                 <img
//                   className="h-72 w-48 rounded-xl border-slate-600 shadow-lg hover:shadow-2xl"
//                   src={person.imageUrl}
//                   alt={person.name}
//                 />
//               </div>
//               <h3 className="mt-6 text-lg font-semibold leading-8 text-header-3 text-center">
//                 {person.name}
//               </h3>
//               <p className="text-base leading-7 text-header-3 text-center antialiased hover:subpixel-antialiased">
//                 {person.role}
//               </p>
//               <ul className="mt-4 text-left">
//                 {person.bio.split("-").map(
//                   (point, index) =>
//                     point.trim() && (
//                       <li key={index} className="list-disc">
//                         {point}
//                       </li>
//                     )
//                 )}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
// const people = [
//   {
//     name: 'Leonard Krasner',
//     role: 'Senior Designer',
//     imageUrl:
//       'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
//     bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.',
//   },
//   // More people...
// ]

export default function Team() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {people.map((person) => (
            <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
              <img
                alt=""
                src={person.imageUrl}
                className="aspect-[4/5] w-64 flex-none rounded-3xl object-fit shadow-2xl"
              />
              <div className="flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
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
                {/* <p className="mt-6 text-base leading-7 text-gray-600">
                  {person.bio}
                </p> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// <ul className="mt-4 text-left">
//   {person.bio.split("-").map(
//     (point, index) =>
//       point.trim() && (
//         <li key={index} className="list-disc">
//           {point}
//         </li>
//       )
//   )}
// </ul>;
