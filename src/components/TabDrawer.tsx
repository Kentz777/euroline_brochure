import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import mainLogo from "../assets/main_logo.png";

interface Props {
  onClose: () => void;
}

const TabDrawer = ({ onClose }: Props) => {
  const [showServices, setShowServices] = useState(false);
  const location = useLocation(); // ✅ get current path

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-lg pl-4 pr-4 pb-4 pt-6 overflow-y-auto">
      {/* Close Button */}
      <div className="flex items-center justify-end mb-4">
        <button onClick={onClose}>
          <IoClose className="text-2xl text-gray-600" />
        </button>
      </div>

      {/* Logo */}
      <Link to="/linebridge/home">
        <img src={mainLogo} alt="Logo" className="w-16 h-16 object-contain" />
      </Link>

      <div className="mb-4">
        <h1 className="text-blue-600 font-regular text-lg">
          Euro Linebridge Logistics Inc.
        </h1>
      </div>

      {/* Navigation */}
      <nav className="space-y-4">
        <div className="border-t border-gray-400 my-4" />

        <Link
          to="/linebridge/home"
          className={`block font-medium hover:text-[#08268F] ${
            isActive("/linebridge/home") ? "text-[#08268F]" : "text-gray-800"
          }`}
        >
          Home
        </Link>

        <div>
          <button
            className={`flex justify-between items-center w-full font-medium hover:text-[#08268F] ${
              location.pathname.startsWith("/linebridge/") &&
              location.pathname !== "/linebridge/home" &&
              location.pathname !== "/linebridge/careers" &&
              location.pathname !== "/linebridge/about" &&
              location.pathname !== "/linebridge/contacts"
                ? "text-[#08268F]"
                : "text-gray-800"
            }`}
            onClick={() => setShowServices(!showServices)}
          >
            Services
            <FaCaretDown
              className={`text-2xl text-gray-500 transition-transform ${
                showServices ? "rotate-180" : ""
              }`}
            />
          </button>

          {showServices && (
            <ul className="mt-2 space-y-2 text-[14px] text-gray-900">
              <li className="text-gray-400">Services We Offer:</li>
              {[
                "logistics",
                "warehousing",
                "supply-chain",
                "fabrication",
                "civil-works",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to={`/linebridge/${service}`}
                    className={`hover:text-[#08268F] ${
                      isActive(`/linebridge/${service}`)
                        ? "text-[#08268F]"
                        : "text-gray-800"
                    }`}
                  >
                    {service
                      .split("-")
                      .map((s) => s[0].toUpperCase() + s.slice(1))
                      .join(" ")}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <Link
          to="/linebridge/careers"
          className={`block font-medium hover:text-[#08268F] ${
            isActive("/linebridge/careers") ? "text-[#08268F]" : "text-gray-800"
          }`}
        >
          Careers
        </Link>

        <Link
          to="/linebridge/about"
          className={`block font-medium hover:text-[#08268F] ${
            isActive("/linebridge/about") ? "text-[#08268F]" : "text-gray-800"
          }`}
        >
          About Us
        </Link>

        <Link
          to="/linebridge/contacts"
          className={`block font-medium hover:text-[#08268F] ${
            isActive("/linebridge/contacts")
              ? "text-[#08268F]"
              : "text-gray-800"
          }`}
        >
          Contact Us
        </Link>

        <div className="border-t border-gray-400 my-4" />
      </nav>
    </div>
  );
};

export default TabDrawer;
