import Bobby from "../assets/Bobby.jpeg";
import Alejandra from "../assets/Alejandra-Hormaza-Mejia.jpg";
import Christian from "../assets/ChristianRose.jpeg";

const people = [
  {
    name: "Bobby Laviguer",
    role: "Founder",
    imageUrl: Bobby,
    bio: "-MS in Mechanical Engineering, University of California, Irvine, 2024 -BS in Mechanical Engineering with Specialization in Energy Systems, University of California, Irvine, 2021",
  },
  {
    name: "Alejandra Hormaza Mejia",
    role: "Co-Founder",
    imageUrl: Alejandra,
    bio: "PhD in Mechanical Engineering, University of California, Irvine 2023 -MS in Mechanical Engineering, University of California, Irvine, 2020 -BS in Chemical Engineering, University of California, Irvine, 2017",
  },
  {
    name: "Christian Rose",
    role: "Co-Founder ",
    imageUrl: Christian,
    bio: "MS in Mechanical Engineering, University of California, Irvine, 2024-BS in Mechanical Engineering w/ Specialization in Energy Engineering, Southern Illinois University Carbondale, 2021-BS in Physics, Southern Illinois University Carbondale, 2021",
  },
];

// export default function Team() {
//   return (
//     <div className="bg-white py-8 px-6 lg:px-8">
//       <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our team</h2>
//       <p className="mt-6 text-lg leading-8 text-gray-600">
//         We’re a dynamic group of individuals who are passionate about what we do and dedicated to
//         delivering the best results for our clients.
//       </p>

//       <div className="mt-8 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
//         {/* Team members list */}
//         {people.map((person) => (
//           <div key={person.name} className="mx-auto max-w-2xl lg:mx-0">
//             <img
//               className="aspect-[2.2/2] w-48 rounded-2xl object-cover border-2 border-slate-900 shadow-lg hover:shadow-2xl hover:border-slate-400"
//               src={person.imageUrl}
//               alt=""
//             />
//             <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{person.name}</h3>
//             <p className="text-base leading-7 text-gray-600 antialiased hover:subpixel-antialiased">
//               {person.role}
//             </p>
//             <ul className="mt-4">
//               {person.bio.split("-").map(
//                 (point, index) =>
//                   point.trim() && (
//                     <li key={index} className="list-disc">
//                       {point}
//                     </li>
//                   )
//               )}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

export default function Team() {
  return (
    <div className="bg-white py-8 lg:px-8">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our team</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We’re a dynamic group of individuals who are passionate about what we do and dedicated to
          delivering the best results for our clients.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2 xl:grid-cols-3">
          {people.map((person) => (
            <div key={person.name} className="mx-auto">
              <img
                className="aspect-[2.2/2] w-48 rounded-2xl object-cover border-2 border-slate-600 shadow-lg hover:shadow-2xl"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{person.name}</h3>
              <p className="text-base leading-7 text-gray-600 antialiased hover:subpixel-antialiased">
                {person.role}
              </p>
              <ul className="mt-4">
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
          ))}
        </div>
      </div>
    </div>
  );
}
