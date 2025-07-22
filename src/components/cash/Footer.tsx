import { FaLinkedinIn, FaFacebookF, FaEnvelope } from "react-icons/fa";
import footerLogo from "../../assets/footer_logo2.png";
import { Link } from "react-router-dom";
import OutlineCTAButton from "../OutlineCTAButton";

const Footer = () => {
  return (
    <footer className="bg-white text-sm md:text-lg lg:text-xl text-gray-600 border-t border-gray-200 px-3 lg:px-12 pt-10 pb-6 space-y-6">
      <div className="flex flex-col lg:flex-row sm:gap-8">
        <div className="text-center space-y-4">
          <p className="text-[#707070] font-medium">
            <span className="font-semibold text-[#08268F]">
              {" "}
              Securing every transaction—
            </span>{" "}
            trusted cash solutions that deliver.
          </p>

          <div className="flex justify-start items-center gap-3">
            <img
              src={footerLogo}
              alt="Logo"
              className="w-[210px] h-[50px] lg:w-[210px] lg:h-[100px] md:w-[210px] md:h-[100px] object-contain"
            />
          </div>

          <p className="text-gray-500 text-xs md:text-lg lg:text-lg flex text-left">
            From branch pickups to ATM, we move cash with safety, precision, and
            accountability.
          </p>

          <OutlineCTAButton label="Call To Action" />
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 gap-y-4 text-center sm:flex sm:justify-between mt-3 lg:mt-0 lg:gap-x-32 sm:text-left lg:ml-auto lg:w-auto">
          <div className="space-y-1 text-left">
            <p className="hover:text-[#08268F]">
              <Link to="/cash-solutions/about">About Us</Link>
            </p>
            <p className="hover:text-[#08268F]">
              <Link to="/cash-solutions/home">Help Center</Link>
            </p>
            <p className="hover:text-[#08268F]">
              <Link to="/cash-solutions/home">Privacy Policy</Link>
            </p>
          </div>
          <div className="space-y-1 text-right">
            <p className="hover:text-[#08268F]">
              <Link to="/cash-solutions/careers">Careers</Link>
            </p>
            <p className="hover:text-[#08268F]">
              <Link to="/cash-solutions/contacts">Contact Us</Link>
            </p>
            <p className="hover:text-[#08268F]">
              <Link to="/cash-solutions/home">Legal Policies</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 pt-4 text-center text-xs text-[#08268F]">
        Copyright ©2025 Euro Line. All rights Reserved
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-4">
        <a href="#" className="bg-[#08268F] text-white p-2">
          <FaLinkedinIn className="text-2xl" />
        </a>
        <a
          href="https://www.facebook.com/eurolinebridge"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#08268F] text-white p-2 "
        >
          <FaFacebookF className="text-2xl" />
        </a>
        <a
          href="mailto:euro_linebridge@yahoo.com?subject=Inquiry&body=Hello%20EuroLinebridge%2C"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#08268F] text-white p-2"
        >
          <FaEnvelope className="text-2xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
