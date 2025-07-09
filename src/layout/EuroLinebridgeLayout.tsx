import React, { type ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

type LayoutProps = {
  children?: ReactNode;
};

const EuroLinebridgeLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto">
        <Outlet />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default EuroLinebridgeLayout;
