import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import mainLogo from "../../assets/main_logo.png";
import { IoMenu } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import TabDrawer from "./TabDrawer";

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);
  const [isCompanyOpen, setCompanyOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/cash-solutions/home" },
    { name: "Services", path: "" },
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

  const companies = [
    { label: "Euroline Cash Solutions Phils.", path: "/cash-solutions" },
    { label: "Eurolinebridge Logistics", path: "/linebridge" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const isAnyServiceActive = servicesDropdown.some(
    (item) => location.pathname === item.path
  );

  const currentCompany =
    companies.find((c) => location.pathname.startsWith(c.path))?.label ||
    "Select Company";

  return (
    <>
      <header className="w-full flex items-center justify-between px-4 lg:px-12 py-2 bg-transparent md:bg-white lg:bg-white shadow-sm fixed top-0 z-50">
        <div className="flex flex-row items-center justify-center gap-5 md:gap-2 relative">
          <img
            src={mainLogo}
            alt="Logo"
            className="w-[72px] h-[72px] object-contain"
          />

          {/* Company Dropdown */}
          <div className="hidden md:block relative">
            <button
              onClick={() => setCompanyOpen(!isCompanyOpen)}
              className="text-[#08268F] font-semibold text-xl md:text-sm lg:uppercase flex items-center gap-1"
            >
              {currentCompany}
              <FaCaretDown className="text-xs" />
            </button>

            {isCompanyOpen && (
              <ul className="absolute z-50 bg-white border rounded shadow-lg mt-2 w-64">
                {companies.map((company) => (
                  <li key={company.path}>
                    <button
                      onClick={() => {
                        navigate(`${company.path}/home`);
                        setCompanyOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        location.pathname.startsWith(company.path)
                          ? "text-blue-800 font-semibold"
                          : "text-gray-800 hover:text-[#08268F] hover:bg-gray-100"
                      }`}
                    >
                      {company.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

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
