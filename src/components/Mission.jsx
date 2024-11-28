import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";

export default function Mission() {
  return (
    <div className="bg-custom-bg px-6 py-8 lg:px-8">
      <div className="bg-custom-bg max-w-3xl mx-auto text-base leading-7 text-header-3">
        <p className="text-header-3 text-base font-semibold leading-7 text-center">
          Our Mission:
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-header-3 sm:text-2xl text-center">
          Three Core Beliefs
        </h2>
        <div className="text-lg mt-5">
          <ul role="list" className="space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              {" "}
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-gray-50"
                aria-hidden="true"
              />
              <span className="text-gray-50">
                <strong className="font-semibold text-header-3">
                  Cutting-Edge Technology Applications for Global
                  Decarbonization
                </strong>
                <br />
                At HyRe Energy, we believe hydrogen can alleviate many
                challenges in the global fight against climate change because of
                its extraordinary potential. We are not just consultants; we are
                architects of change, committed to pioneering innovative
                hydrogen solutions that stand as cornerstones in achieving and
                surpassing the world's decarbonization goals.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-gray-50"
                aria-hidden="true"
              />
              <span className="text-gray-50">
                <strong className="font-semibold text-header-3">
                  Collaborative Innovation will Lead to a Zero Emissions Legacy
                </strong>
                <br />
                Successful hydrogen deployment hinges on collaborative
                innovation. We actively seek partnerships with industries,
                governments, organizations, and educational institutions to
                co-create a hydrogen-powered future. Through expertise,
                guidance, and tailored solutions, we aim to significantly
                contribute to the growth of the hydrogen market and the
                realization of a decarbonized world. Although we see the value
                in hydrogen energy systems, we recognize not all solutions
                require hydrogen, so collaborations across the entire energy
                industry are welcomed.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-gray-50"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-header-3">
                  Clients Deserve Expert Advice in an Emerging Market
                </strong>
                <br />
                We have an unwavering commitment to empower our clients to meet
                their environmental and economic goals through hydrogen energy.
                Our client-centric approach and tailored solutions to meet
                specific needs and objectives will contribute to both the
                client's success and widespread hydrogen adoption. We empower
                our clients by advising on them on the best solution for their
                specific goal, whether including hydrogen or not.
              </span>
            </li>
          </ul>
        </div>
        <div className="text-lg mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-header-3 text-center">
            Join Us in Our Mission
          </h2>
          <p className="mt-6 text-gray-50 ">
            Together, we can make a difference. Join us in our mission to
            harness the power of hydrogen energy, creating a sustainable legacy
            for generations to come. Let's build a future where renewable energy
            is the cornerstone of our global energy system.
          </p>
        </div>
      </div>
    </div>
  );
}
