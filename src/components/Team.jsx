import bobby from "../assets/bobby.png";
import jimmy from "../assets/jimmy.png";

const people = [
  {
    name: "Bobby Laviguer",
    role: "Co-Founder / CEO",
    imageUrl: bobby,
  },
  {
    name: "Haboo Hanu",
    role: "Co-Founder / CTO",
    imageUrl: jimmy,
  },
  {
    name: "Kenny Nguyen",
    role: "Angel Investor ",
    imageUrl:
      "https://www.kennethnguyen.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.8167ba6c.png&w=128&q=75",
  },
  // More people...
];

export default function Team() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our team comprises a diverse group of experts, visionaries, and problem-solvers
            committed to driving revolutionary change in the energy sector. We are the catalysts
            transforming how the world thinks about and utilizes renewable hydrogen.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-emerald-500">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
