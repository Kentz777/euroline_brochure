import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import mainLogo from "../../assets/main_logo.png";

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
      <Link to="/cash-solutions/home">
        <img src={mainLogo} alt="Logo" className="w-16 h-16 object-contain" />
      </Link>

      <div className="mb-4">
        <h1 className="text-blue-600 font-regular text-lg">
          Euroline Cash Solutions
        </h1>
      </div>

      {/* Navigation */}
      <nav className="space-y-4">
        <div className="border-t border-gray-400 my-4" />

        <Link
          to="/cash-solutions/home"
          className={`block font-medium hover:text-[#08268F] ${
            isActive("/cash-solutions/home")
              ? "text-[#08268F]"
              : "text-gray-800"
          }`}
        >
          Home
        </Link>

        <div>
          <button
            className={`flex justify-between items-center w-full font-medium hover:text-[#08268F] ${
              location.pathname.startsWith("/cash-solutions/") &&
              location.pathname !== "/cash-solutions/home" &&
              location.pathname !== "/cash-solutions/careers" &&
              location.pathname !== "/cash-solutions/about" &&
              location.pathname !== "/cash-solutions/contacts"
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
                "atm-replenishment",
                "cash-branch-pickup",
                "first-line-maintenance",
                "armored-vehicle-rental",
                "aircash-transport",
                "retail",
                "cash-management",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to={`/cash-solutions/${service}`}
                    className={`hover:text-[#08268F] ${
                      isActive(`/cash-solutions/${service}`)
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
          to="/cash-solutions/careers"
          className={`block font-medium hover:text-[#08268F] ${
            isActive("/cash-solutions/careers")
              ? "text-[#08268F]"
              : "text-gray-800"
          }`}
        >
          Careers
        </Link>

        <Link
          to="/cash-solutions/about"
          className={`block font-medium hover:text-[#08268F] ${
            isActive("/cash-solutions/about")
              ? "text-[#08268F]"
              : "text-gray-800"
          }`}
        >
          About Us
        </Link>

        <Link
          to="/cash-solutions/contacts"
          className={`block font-medium hover:text-[#08268F] ${
            isActive("/cash-solutions/contacts")
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
