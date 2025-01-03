import { Link, useLocation } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.PNG";

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";
  const isServicesPage = location.pathname === "/services";

  const useLightText = isHomePage || isAboutPage || isServicesPage;

  const navbarStyle = isHomePage
    ? "bg-gradient-to-b from-blue-600/80 via-green-500/40 to-transparent"
    : "bg-gradient-to-b from-blue-300/90 via-green-200/70 to-transparent";

  const textStyle = useLightText
    ? "text-white hover:text-blue-100"
    : "text-gray-800 hover:text-blue-600";

  const menuButtonStyle = useLightText
    ? "text-white hover:text-blue-100"
    : "text-gray-800 hover:text-blue-600";

  const mobileMenuStyle = useLightText ? "bg-blue-600/95" : "bg-blue-300/95";

  return (
    <Disclosure as="nav" className="w-full z-50">
      {({ open }) => (
        <>
          <div className={`px-4 lg:px-6 h-20 flex items-center ${navbarStyle}`}>
            <div className="relative mx-auto max-w-7xl w-full">
              <div className="relative flex h-16 items-center justify-end">
                {/* Mobile menu button */}
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button
                    className={`inline-flex items-center justify-center p-2 rounded-md ${menuButtonStyle} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
                  >
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                {/* Navigation Links and Logo */}
                <div className="flex flex-1 items-center justify-end gap-6">
                  {/* Desktop Navigation */}
                  <div className="hidden sm:flex sm:gap-6">
                    <Link to="/" className={`text-1xl font-medium ${textStyle}`}>
                      Home
                    </Link>
                    <Link
                      to="/services"
                      className={`text-1xl font-medium ${textStyle}`}
                    >
                      Services
                    </Link>
                    <Link
                      to="/about"
                      className={`text-1xl font-medium ${textStyle}`}
                    >
                      About
                    </Link>
                    <Link
                      to="/contact"
                      className={`text-1xl font-medium ${textStyle}`}
                    >
                      Contact
                    </Link>
                  </div>

                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <img
                      className="h-20 w-auto object-contain"
                      src={logo}
                      alt="HyRe-Energy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel
            className={`sm:hidden absolute w-full ${mobileMenuStyle} z-40`}
          >
            <div className="space-y-2 px-4 pb-4 pt-3">
              <Disclosure.Button
                as={Link}
                to="/"
                className={`block text-base font-medium ${textStyle} px-3 py-2 rounded-md`}
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                to="/about"
                className={`block text-base font-medium ${textStyle} px-3 py-2 rounded-md`}
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                to="/services"
                className={`block text-base font-medium ${textStyle} px-3 py-2 rounded-md`}
              >
                Services
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                to="/contact"
                className={`block text-base font-medium ${textStyle} px-3 py-2 rounded-md`}
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
