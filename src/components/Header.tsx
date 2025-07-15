import React, { useState } from "react";
import { Link } from "react-router-dom";
import mainLogo from "../assets/main_logo.png";
import { IoMenu } from "react-icons/io5";
import TabDrawer from "./TabDrawer";

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/linebridge/home" },
    { name: "Services", path: "" }, // no main link, has dropdown
    { name: "Careers", path: "/linebridge/careers" },
    { name: "About Us", path: "/linebridge/about" },
    { name: "Contact Us", path: "/linebridge/contacts" },
  ];

  const servicesDropdown = [
    { name: "Logistics", path: "/linebridge/logistics" },
    { name: "Warehousing", path: "/linebridge/warehousing" },
    { name: "Supply Chain", path: "/linebridge/supply-chain" },
    { name: "Fabrication", path: "/linebridge/fabrication" },
    { name: "Civil Works", path: "/linebridge/civil-works" },
  ];

  return (
    <>
      <header className="w-full flex items-center justify-between px-4 lg:px-12 py-2 bg-transparent lg:bg-white shadow-sm fixed top-0 z-50">
        <Link to="/linebridge/home">
          <img
            src={mainLogo}
            alt="Logo"
            className="w-[72px] h-[72px] object-contain"
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-6 relative">
          {navLinks.map((link, idx) =>
            link.name === "Services" ? (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <span
                  className={`text-sm text-gray-800 hover:text-[#08268F] font-medium cursor-pointer ${
                    isServicesOpen ? "text-[#08268F]" : ""
                  }`}
                >
                  {link.name}
                </span>
                <ul
                  className={`absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-50 transition duration-200 ${
                    isServicesOpen
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                >
                  {servicesDropdown.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-[#08268F] hover:bg-gray-100"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link
                key={idx}
                to={link.path}
                className="text-sm text-gray-800 hover:text-[#08268F] font-medium"
              >
                {link.name}
              </Link>
            )
          )}
        </nav>
        <div className="lg:hidden">
          <button onClick={() => setDrawerOpen(true)}>
            <IoMenu size={32} color="#333" />
          </button>
        </div>
      </header>
      {isDrawerOpen && <TabDrawer onClose={() => setDrawerOpen(false)} />}
    </>
  );
};

export default Header;
