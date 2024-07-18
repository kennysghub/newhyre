/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

import { Link } from "react-router-dom";
export default function CTA() {
  return (
    <div className="relative bg-white py-16">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 hidden h-1/2  lg:block"
      />
      <div className="mx-auto max-w-7xl bg-emerald-600 lg:bg-transparent lg:px-8">
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden"
            />
            <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:p-0">
              <div className="aspect-h-6 aspect-w-10 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-w-1">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80"
                  className="rounded-3xl object-cover object-center shadow-inner"
                />
              </div>
            </div>
          </div>

          <div className="relative bg-emerald-500 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
            <div
              aria-hidden="true"
              className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block"
            >
              <svg
                fill="none"
                width={404}
                height={384}
                viewBox="0 0 404 384"
                aria-hidden="true"
                className="absolute bottom-full left-full -translate-x-2/3 translate-y-1/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0"
              >
                <defs>
                  <pattern
                    x={0}
                    y={0}
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      fill="currentColor"
                      width={4}
                      height={4}
                      className="text-emerald-500"
                    />
                  </pattern>
                </defs>
                <rect
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  width={404}
                  height={384}
                />
              </svg>
              <svg
                fill="none"
                width={404}
                height={384}
                viewBox="0 0 404 384"
                aria-hidden="true"
                className="absolute top-full -translate-x-1/3 -translate-y-1/3 transform xl:-translate-y-1/2"
              >
                <defs>
                  <pattern
                    x={0}
                    y={0}
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      fill="currentColor"
                      width={4}
                      height={4}
                      className="text-emerald-500"
                    />
                  </pattern>
                </defs>
                <rect
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  width={404}
                  height={384}
                />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md space-y-6 px-6 py-12 sm:max-w-3xl sm:py-16 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
              <h2
                id="join-heading"
                className="text-3xl font-bold tracking-tight text-white"
              >
                Join Us in our Mission
              </h2>
              <p className="text-lg text-white">
                Together, we can make a difference. Join us in our mission to
                harness the power of hydrogen energy, creating a sustainable
                legacy for generations to come. Let's build a future where
                renewable energy is the cornerstone of our global energy system.
              </p>
              <Link
                to="/contact"
                className="block w-full rounded-md border border-transparent bg-white px-5 py-3 text-center text-base font-medium text-emerald-700 shadow-md hover:bg-gray-50 sm:inline-block sm:w-auto"
              >
                Get in Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
