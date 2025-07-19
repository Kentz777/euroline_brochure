import { FaArrowRight } from "react-icons/fa";

type OutlineCTAButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
};

const OutlineCTAButton = ({ label }: OutlineCTAButtonProps) => {
  return (
    <div>
      <button className="flex items-center px-4 py-2 text-sm rounded-full gap-2 border border-[#08268F] text-[#08268F] hover:bg-[#08268F] hover:text-white transition">
        {label}
        <FaArrowRight />
      </button>
    </div>
  );
};

export default OutlineCTAButton;
