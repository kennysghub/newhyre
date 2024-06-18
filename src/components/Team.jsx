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
    bio: "MS in Mechanical Engineering, University of California, Irvine, 2024-BS in Mechanical Engineering w/ Specialization in Energy Engineering, Southern Illinois University Carbondale, 2021-BS in Physics, Southern Illinois University Carbondale, 2021",
  },
];

export default function Team() {
  return (
    <div className="bg-custom-bg py-8 lg:px-8">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight text-header-3 sm:text-4xl text-center">
          Our team
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-50 text-center">
          We’re a dynamic group of individuals who are passionate about what we
          do and dedicated to delivering the best results for our clients.
        </p>

        <div className="mt-8 flex justify-center space-x-8 text-gray-50">
          {people.map((person) => (
            <div key={person.name} className="flex flex-col items-center">
              <div className="flex justify-center items-center overflow-hidden">
                <img
                  className="h-72 w-48 rounded-xl border-slate-600 shadow-lg hover:shadow-2xl"
                  src={person.imageUrl}
                  alt={person.name}
                />
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 text-header-3 text-center">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-header-3 text-center antialiased hover:subpixel-antialiased">
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
          ))}
        </div>
      </div>
    </div>
  );
}
