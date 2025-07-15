import { FaArrowRight } from "react-icons/fa";

type CTAButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
};

const MainCTAButton2 = ({ label, onClick, className = "" }: CTAButtonProps) => (
  <button
    onClick={onClick}
    className={`
      flex items-center justify-center gap-2
      text-[#08268F] font-bold
      px-5 py-2 text-sm
      md:px-6 md:py-3 md:text-base
      lg:px-7 lg:py-3.5 lg:text-lg
      xl:px-8 xl:py-4 xl:text-xl
      rounded-xl shadow-lg
      hover:brightness-110 active:scale-95 transition
      ${className}
    `}
    style={{
      background: "white",
    }}
  >
    {label}
    <FaArrowRight className="text-base md:text-lg lg:text-xl xl:text-2xl text-[#08268F]" />
  </button>
);

export default MainCTAButton2;
