// import { Fragment } from "react";
// import { Link } from "react-router-dom";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
// import logo from "../assets/logo2.png";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Navbar() {
//   return (
//     <Disclosure as="nav" className="bg-white shadow">
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//             <div className="relative flex h-16 justify-between">
//               <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                 {/* Mobile menu button */}
//                 <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
//                   <span className="absolute -inset-0.5" />
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//               <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                 <div className="flex flex-shrink-0 items-center">
//                   <img className="h-8 w-auto" src={logo} alt="HyRe-Energy" />
//                 </div>
//                 <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
//                   {/* Current: "border-emerald-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
//                   <Link
//                     to="/"
//                     clLinkssName="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
//                   >
//                     About
//                   </Link>
//                   <Link
//                     to="/services"
//                     className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
//                   >
//                     Offered Services
//                   </Link>
//                   <Link
//                     to="contact"
//                     className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
//                   >
//                     Contact
//                   </Link>
//                 </div>
//               </div>
//               <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                 <button
//                   type="button"
//                   className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
//                 >
//                   <span className="absolute -inset-1.5" />
//                   <span className="sr-only">View notifications</span>
//                   {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
//                   HyRe-Energy
//                 </button>
//               </div>
//             </div>
//           </div>

//           <Disclosure.Panel className="sm:hidden">
//             <div className="space-y-1 pb-4 pt-2">
//               <Disclosure.Button
//                 as={Link}
//                 to="/"
//                 className="block border-l-4 border-emerald-500 bg-emerald-200 py-2 pl-3 pr-4 text-base font-medium text-emerald-700 hover:border-emerald-300 hover:text-emerald-600"
//               >
//                 About
//               </Disclosure.Button>
//               <Disclosure.Button
//                 as={Link}
//                 to="/services"
//                 className="bg-emerald-500 border-emerald-500 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700"
//               >
//                 Services
//               </Disclosure.Button>
//               <Disclosure.Button
//                 as={Link}
//                 to="/contact"
//                 className="block border-l-4 border-emerald-500 bg-emerald-200 py-2 pl-3 pr-4 text-base font-medium text-emerald-700 hover:border-emerald-300 hover:text-emerald-600"
//               >
//                 Contact
//               </Disclosure.Button>
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// }
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo2.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Logo and navigation links */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img className="block h-8 w-auto" src={logo} alt="HyRe-Energy" />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Navigation Links */}
                  <Link
                    to="/"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    About
                  </Link>

                  <Link
                    to="/services"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Offered Services
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              {/* Right-side content */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Placeholder for future content */}
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-4 pt-2 px-2">
              <Disclosure.Button
                as={Link}
                to="/"
                className="block text-base font-medium text-emerald-700 hover:text-emerald-600"
              >
                About
              </Disclosure.Button>

              <Disclosure.Button
                as={Link}
                to="/services"
                className="block text-base font-medium text-emerald-700 hover:text-emerald-600"
              >
                Offered Services
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                to="/contact"
                className="block text-base font-medium text-emerald-700 hover:text-emerald-600"
              >
                Contact
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
