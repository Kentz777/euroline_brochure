import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import mainLogo from "../../assets/main_logo.png";
import { IoMenu } from "react-icons/io5";
import TabDrawer from "./TabDrawer";

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/cash-solutions/home" },
    { name: "Services", path: "" }, // dropdown
    { name: "Careers", path: "/cash-solutions/careers" },
    { name: "About Us", path: "/cash-solutions/about" },
    { name: "Contact Us", path: "/cash-solutions/contacts" },
  ];

  const servicesDropdown = [
    { name: "ATM Replenishment", path: "/cash-solutions/atm-replenishment" },
    { name: "Cash/Branch Pickup", path: "/cash-solutions/cash-branch-pickup" },
    {
      name: "FLM (First Line Maintenance)",
      path: "/cash-solutions/first-line-maintenance",
    },
    {
      name: "Armored Vehicle Rental",
      path: "/cash-solutions/armored-vehicle-rental",
    },
    { name: "Retail", path: "/cash-solutions/retail" },
    {
      name: "Aircash/Interisland Transport",
      path: "/cash-solutions/aircash-transport",
    },
    {
      name: "Cash Management (Coming Soon)",
      path: "/cash-solutions/cash-management",
    },
  ];

  // helper to check active
  const isActive = (path: string) => location.pathname === path;

  // helper to check if any of dropdown is active
  const isAnyServiceActive = servicesDropdown.some(
    (item) => location.pathname === item.path
  );

  return (
    <>
      <header className="w-full flex items-center justify-between px-4 lg:px-12 py-2 bg-transparent md:bg-white lg:bg-white shadow-sm fixed top-0 z-50">
        <Link to="/cash-solutions/home">
          <img
            src={mainLogo}
            alt="Logo"
            className="w-[72px] h-[72px] object-contain"
          />
        </Link>

        <nav className="hidden lg:flex md:flex items-center gap-6 relative">
          {navLinks.map((link, idx) =>
            link.name === "Services" ? (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <span
                  className={`text-sm font-medium cursor-pointer ${
                    isServicesOpen || isAnyServiceActive
                      ? "text-[#08268F]"
                      : "text-gray-800 hover:text-[#08268F]"
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
                        className={`block px-4 py-2 text-sm ${
                          isActive(item.path)
                            ? "text-[#08268F] font-semibold"
                            : "text-gray-700 hover:text-[#08268F] hover:bg-gray-100"
                        }`}
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
                className={`text-sm font-medium ${
                  isActive(link.path)
                    ? "text-[#08268F]"
                    : "text-gray-800 hover:text-[#08268F]"
                }`}
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        <div className="md:hidden">
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
