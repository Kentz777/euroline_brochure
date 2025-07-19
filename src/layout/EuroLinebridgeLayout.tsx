import { type ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

type LayoutProps = {
  children?: ReactNode;
};

const EuroLinebridgeLayout = ({ children }: LayoutProps) => {
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

export default EuroLinebridgeLayout;
