import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.PNG";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="bg-gradient-to-r from-custom-blue to-custom-yellow shadow"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-800 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                  <div className=" rounded-full">
                    <img className="h-20 w-auto" src={logo} alt="HyRe-Energy" />
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Navigation Links */}
                  <Link
                    to="/"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-white hover:text-gray-800"
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-white hover:text-gray-800"
                  >
                    About
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-white hover:text-gray-800"
                  >
                    Services
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-white hover:text-gray-800"
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
                className="block text-base font-medium text-white hover:bg-white/20 hover:text-gray-800 px-3 py-2 rounded-md"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                to="/about"
                className="block text-base font-medium text-white hover:bg-white/20 hover:text-gray-800 px-3 py-2 rounded-md"
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                to="/services"
                className="block text-base font-medium text-white hover:bg-white/20 hover:text-gray-800 px-3 py-2 rounded-md"
              >
                Services
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                to="/contact"
                className="block text-base font-medium text-white hover:bg-white/20 hover:text-gray-800 px-3 py-2 rounded-md"
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
