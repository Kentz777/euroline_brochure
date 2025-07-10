import { FaArrowRight } from "react-icons/fa";

type CTAButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
};

const CTAButton = ({ label, onClick, className = "" }: CTAButtonProps) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center gap-3 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:brightness-110 active:scale-95 transition ${className}`}
    style={{
      background:
        "linear-gradient(180deg, #04165E 0%, #08268F 30%, #2C5CD1 100%, #69A2FF 100%)",
    }}
  >
    {label}
    <FaArrowRight className="text-xl" />
  </button>
);

export default CTAButton;
