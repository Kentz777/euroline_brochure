import React, { useState } from "react";
import mainLogo from "../assets/main_logo.png";
import { IoMenu } from "react-icons/io5";
import TabDrawer from "./TabDrawer";

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const navLinks = ["Home", "Services", "Careers", "About Us", "Contact Us"];

  return (
    <>
      <header className="w-full flex items-center justify-between px-4 lg:px-12 py-2 bg-transparent lg:bg-white shadow-sm fixed top-0 z-50">
        {/* Logo */}
        <img
          src={mainLogo}
          alt="Logo"
          className="w-[72px] h-[72px] object-contain"
        />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
              className="text-sm text-gray-800 hover:text-[#08268F] font-medium"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button onClick={() => setDrawerOpen(true)}>
            <IoMenu size={32} color="#333" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isDrawerOpen && <TabDrawer onClose={() => setDrawerOpen(false)} />}
    </>
  );
};

export default Header;
