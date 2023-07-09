import { MouseEventHandler } from "react";
import { motion } from "framer-motion";

export const Toggle = ({
  isToggled,
  handleToggle,
}: {
  isToggled: boolean;
  handleToggle: MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <div
      className={
        "w-8 h-5 flex justify-start p-[2px] cursor-pointer bg-[#ae00ff] rounded-[100px]" +
        (isToggled ? " justify-end" : " justify-start bg-neutral-700")
      }
      onClick={handleToggle}
    >
      <motion.div
        className="w-4 h-4 bg-white rounded-[40px]"
        layout
        transition={spring}
      />
    </div>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
