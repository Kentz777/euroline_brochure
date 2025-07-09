import { useState } from "react";
import { IoClose, IoChevronDown } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import mainLogo from "../assets/main_logo.png";

interface Props {
  onClose: () => void;
}

const TabDrawer = ({ onClose }: Props) => {
  const [showServices, setShowServices] = useState(false);

  return (
    <div className="fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-lg pl-4 pr-4 pb-4 pt-6 overflow-y-auto">
      <div className="flex items-center justify-end mb-4">
        <button onClick={onClose} className="">
          <IoClose className="text-2xl text-gray-600" />
        </button>
      </div>

      <img src={mainLogo} alt="Logo" className="w-16 h-16 object-contain" />

      <div className="mb-4">
        <h1 className="text-blue-600 font-regular text-lg">
          Euroline Cash Solutions Inc.
        </h1>
      </div>

      <nav className="space-y-4">
        {/* Top Divider */}
        <div className="border-t border-gray-400 my-4" />
        <a
          href="#"
          className="block text-gray-800 font-medium hover:text-[#08268F]"
        >
          Home
        </a>

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
            <ul className=" mt-2 space-y-2 text-[14px] text-gray-900">
              <li className="text-gray-400">Services We Offer:</li>
              <li>
                <a href="#" className="hover:text-[#08268F]">
                  Logistics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#08268F]">
                  Warehousing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#08268F]">
                  Supply Chain
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#08268F]">
                  Fabrication
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#08268F]">
                  Civil Works
                </a>
              </li>
            </ul>
          )}
        </div>

        <a
          href="#"
          className="block text-gray-800 font-medium hover:text-[#08268F]"
        >
          Careers
        </a>
        <a
          href="#"
          className="block text-gray-800 font-medium hover:text-[#08268F]"
        >
          About Us
        </a>
        <a
          href="#"
          className="block text-gray-800 font-medium hover:text-[#08268F]"
        >
          Contact Us
        </a>
        {/* Bottom Divider */}
        <div className="border-t border-gray-400 my-4" />
      </nav>
    </div>
  );
};

export default TabDrawer;
