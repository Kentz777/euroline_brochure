import { useState } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import mainLogo from "../assets/main_logo.png";

interface Props {
  onClose: () => void;
}

const TabDrawer = ({ onClose }: Props) => {
  const [showServices, setShowServices] = useState(false);

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
          className="block text-gray-800 font-medium hover:text-[#08268F]"
        >
          Home
        </Link>

        <div>
          <button
            className="flex justify-between items-center w-full text-gray-800 font-medium hover:text-[#08268F]"
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
              <li>
                <Link
                  to="/linebridge/logistics"
                  className="hover:text-[#08268F]"
                >
                  Logistics
                </Link>
              </li>
              <li>
                <Link
                  to="/linebridge/warehousing"
                  className="hover:text-[#08268F]"
                >
                  Warehousing
                </Link>
              </li>
              <li>
                <Link
                  to="/linebridge/supply-chain"
                  className="hover:text-[#08268F]"
                >
                  Supply Chain
                </Link>
              </li>
              <li>
                <Link
                  to="/linebridge/fabrication"
                  className="hover:text-[#08268F]"
                >
                  Fabrication
                </Link>
              </li>
              <li>
                <Link
                  to="/linebridge/civil-works"
                  className="hover:text-[#08268F]"
                >
                  Civil Works
                </Link>
              </li>
            </ul>
          )}
        </div>

        <Link
          to="/linebridge/careers"
          className="block text-gray-800 font-medium hover:text-[#08268F]"
        >
          Careers
        </Link>

        <Link
          to="/linebridge/about"
          className="block text-gray-800 font-medium hover:text-[#08268F]"
        >
          About Us
        </Link>

        <Link
          to="/linebridge/contacts"
          className="block text-gray-800 font-medium hover:text-[#08268F]"
        >
          Contact Us
        </Link>

        <div className="border-t border-gray-400 my-4" />
      </nav>
    </div>
  );
};

export default TabDrawer;
