import { type ReactNode } from "react";

import { Outlet } from "react-router-dom";
import Footer from "../components/cash/Footer";
import Header from "../components/cash/Header";

type LayoutProps = {
  children?: ReactNode;
};

const EuroLineCashLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800 select-none relative">
      <Header />
      <main className="flex-grow w-full">
        <Outlet />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default EuroLineCashLayout;
