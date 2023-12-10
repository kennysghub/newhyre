import { CheckCircleIcon, InformationCircleIcon } from "@heroicons/react/20/solid";
import missionImg from "../assets/mission/mission.avif";
export default function Mission() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-emerald-600">Our Mission:</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Pioneering a Sustainable Future with Hydrogen Energy
        </h1>
        <p className="mt-6 text-xl leading-8">
          At Hyre-Energy, we are dedicated to advancing the role of hydrogen energy in the global
          transition to sustainable power. Our mission is to innovate, educate, and collaborate in
          the field of hydrogen energy, driving forward a future where renewable energy is not just
          a choice, but a way of life.
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            Our journey is fueled by innovation. We are constantly exploring new frontiers in
            hydrogen energy, seeking to develop efficient, cost-effective, and environmentally
            friendly solutions. Our research and development team is at the heart of this quest,
            working tirelessly to unlock the full potential of hydrogen as a key player in the
            renewable energy landscape.
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-emerald-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">Cutting-Edge Technology.</strong> We
                invest in the latest technologies to enhance hydrogen production, storage, and
                utilization, ensuring we stay at the forefront of the industry.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-emerald-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">Sustainable Practices.</strong>
                Our commitment to sustainability is unwavering. We strive to minimize environmental
                impact across all our operations, setting a standard for responsible energy
                production.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-emerald-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">Events.</strong> Ac tincidunt sapien
                vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
              </span>
            </li>
          </ul>
          <p className="mt-8">
            Knowledge is power, and we believe in empowering individuals, communities, and
            industries through education. Our initiatives focus on raising awareness about the
            benefits of hydrogen energy and providing resources for learning and development.
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Collaboration for a Greener Tomorrow
          </h2>
          <p className="mt-6">
            We recognize that achieving a sustainable future is a collective effort. Our approach is
            rooted in collaboration, working alongside governments, businesses, and communities to
            integrate hydrogen energy into everyday life.
          </p>
          <figure className="mt-10 border-l border-emerald-600 pl-9">
            <blockquote className="font-semibold text-gray-900">
              <p>
                “Hyre-Energy's dedication to advancing hydrogen energy is both inspiring and
                essential. Their work is a cornerstone in building a greener tomorrow.”
              </p>
            </blockquote>
            <figcaption className="mt-6 flex gap-x-4">
              <img
                className="h-6 w-6 flex-none rounded-full bg-gray-50"
                src="https://med.stanford.edu/services/api/cap/profiles/photocache.9622.jpg"
                alt=""
              />
              <div className="text-sm leading-6">
                <strong className="font-semibold text-gray-900">Dr. Andrew Huberman</strong>
              </div>
            </figcaption>
          </figure>

          <h2 className="text-2xl font-bold tracking-tight mt-16 text-gray-900">
            Our Vision: Leading the Way in Renewable Energy
          </h2>
          <p className="mt-8">
            At Hyre-Energy, our vision extends beyond business. We aspire to be a beacon of hope and
            innovation in the renewable energy sector, inspiring action towards a cleaner, more
            sustainable world. Our commitment to hydrogen energy is unwavering, and we invite you to
            join us on this journey to a brighter, greener future.
          </p>
        </div>
        <figure className="mt-16">
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src={missionImg}
            alt=""
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon
              className="mt-0.5 h-5 w-5 flex-none text-gray-300"
              aria-hidden="true"
            />
            Faucibus commodo massa rhoncus, volutpat.
          </figcaption>
        </figure>
        <div className="mt-16 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Join Us in Our Mission
          </h2>
          <p className="mt-6">
            Together, we can make a difference. Join us in our mission to harness the power of
            hydrogen energy, creating a sustainable legacy for generations to come. Let's build a
            future where renewable energy is the cornerstone of our global energy system.
          </p>
        </div>
      </div>
    </div>
  );
}
