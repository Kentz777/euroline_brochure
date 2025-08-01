import { FaLinkedinIn, FaFacebookF, FaEnvelope } from "react-icons/fa";
import footerLogo from "../assets/footer_logo.png";

const Footer = () => {
  return (
    <footer className="bg-white text-sm text-gray-600 border-t border-gray-200 px-3 pt-10 pb-6 space-y-6">
      {/* Company Info & CTA */}
      <div className="text-center space-y-4">
        <p className="text-[#707070] font-medium">
          <span className="font-semibold text-[#08268F]">
            {" "}
            Delivering smart, scalable
          </span>{" "}
          logistics solutions across every mile.
        </p>

        <div className="flex justify-start items-center gap-3">
          <img
            src={footerLogo}
            alt="Logo"
            className="w-[210px] h-[50px] object-contain"
          />
        </div>

        <p className="text-gray-500 text-xs flex justify-start">
          From transport to infrastructure—built to move with your business.
        </p>

        <button className="inline-flex items-center gap-2 border border-blue-700 text-blue-700 px-4 py-1.5 rounded-full hover:bg-blue-700 hover:text-white transition">
          Call To Action
          <span className="text-lg">→</span>
        </button>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-2 gap-y-2 text-center sm:flex sm:justify-between sm:text-left">
        <div className="space-y-1">
          <p>About Us</p>
          <p>Help Center</p>
          <p>Privacy Policy</p>
        </div>
        <div className="space-y-1">
          <p>Careers</p>
          <p>Contact Us</p>
          <p>Legal Policies</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-300 pt-4 text-center text-xs text-blue-800">
        Copyright ©2025 Euro Line. All rights Reserved
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6">
        <a href="#" className="bg-blue-900 text-white p-2 rounded-md">
          <FaLinkedinIn />
        </a>
        <a href="#" className="bg-blue-900 text-white p-2 rounded-md">
          <FaFacebookF />
        </a>
        <a href="#" className="bg-blue-900 text-white p-2 rounded-md">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
