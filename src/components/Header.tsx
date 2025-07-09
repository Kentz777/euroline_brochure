import React, { useState } from "react";
import mainLogo from "../assets/main_logo.png";
import { IoMenu } from "react-icons/io5";
import TabDrawer from "./TabDrawer";

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <header className="w-full flex items-center justify-between px-4 py-2 bg-transparent absolute">
        <img
          src={mainLogo}
          alt="Logo"
          className="w-[72px] h-[72px] object-contain"
        />

        <div className="space-y-1">
          <button onClick={() => setDrawerOpen(true)}>
            <IoMenu size={45} color="#CECECE" />
          </button>
        </div>
      </header>
      {isDrawerOpen && <TabDrawer onClose={() => setDrawerOpen(false)} />}
    </>
  );
};

export default Header;
