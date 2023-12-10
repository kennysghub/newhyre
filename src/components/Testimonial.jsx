import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function Testimonial() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-emerald-500">Energize the Future</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sustainable Hydrogen Solutions</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              Our mission is to lead the hydrogen revolution, developing state-of-the-art solutions for a sustainable future.

              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://fr.rwe.com/-/media/RWE/images/07-presse/rwe-renewables/2022/2022-02-15-rwe-neptune-energy-join-forces-to-accelerate-green-hydrogen-production-dutch-north-sea.jpg?db=web&mw=1920&w=4320&hash=0DA573E230C5E8C35960CB90815FD643"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              Hydrogen has emerged as a formidable contender in the race to develop sustainable energy solutions. Sourced from water through electrolysis, it serves as a clean, renewable energy carrier that can replace fossil fuels in numerous applications.


              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-emerald-500" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Efficient Production.</strong> Utilizing the latest electrolysis techniques for high yield and purity.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-emerald-500" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Zero Emissions.</strong> Carbon-free hydrogen production supporting global climate goals.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon className="mt-1 h-5 w-5 flex-none text-emerald-500" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Global Reach.</strong> Serving multiple sectors across various countries.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
              The transportation sector stands to benefit significantly from hydrogen energy. Hydrogen-powered fuel cells in electric vehicles (EVs) offer higher energy density compared to lithium-ion batteries, translating to longer range and shorter refueling times. This positions hydrogen as a key player in the decarbonization of the automotive industry.


              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Hydrogen's Versatility Across Industries</h2>
              <p className="mt-6">
              One of the most compelling advantages of hydrogen is its versatility. It can serve as a raw material in industrial processes, a heating source, and a medium for electricity storage and transportation. This multi-faceted utility makes hydrogen indispensable in the transition to a circular economy.


              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
