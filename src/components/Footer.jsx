import { Leaf } from "lucide-react"; // Import Leaf icon
import logo from "../assets/logo.PNG"; // Import the logo

export default function Footer() {
  return (
    <footer className="flex items-center justify-between py-0 w-full px-4 md:px-6 border-t">
      {/* Left Section: Leaf Icon and Slogan */}
      <div className="flex items-center gap-2">
        <Leaf className="h-5 w-5 text-green-500" />
        <p className="text-xs text-gray-500">Committed to a sustainable future</p>
      </div>

      {/* Center Section: Logo */}
      <div className="flex-shrink-0">
        <img src={logo} alt="HyRe-Energy" className="h-14 w-auto object-contain" />
      </div>

      {/* Right Section: Copyright Text */}
      <div className="text-xs text-gray-500">
        © 2024 Hyre Energy LLC. All rights reserved.
      </div>
    </footer>
  );
}
