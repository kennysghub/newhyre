import { Link } from "react-router-dom";
const navigation = {
  main: [
    { name: "About", href: "/" },
    { name: "Offered Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/hyre-energy-llc/about/",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="2px"
          y="2px"
          width="70"
          height="70"
          viewBox="0 0 30 30"
          {...props}
        >
          <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl overflow-hidden px-6  py-20 sm:py-24 lg:px-8">
        <nav
          className="mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12 "
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link
                to={item.href}
                className="text-sm leading-6 text-header-3 hover:text-gray-900"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-header-3 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-header-3">
          HyRe Energy LLC 2024
        </p>
      </div>
    </footer>
  );
}
