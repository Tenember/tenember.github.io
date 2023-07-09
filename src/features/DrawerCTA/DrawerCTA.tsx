import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

export const DrawerCTA = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <motion.div
      whileHover={{ height: "380px" }}
      className="rounded-2xl backdrop-blur-sm border border-stone-400 border-opacity-10 relative w-fit h-[165px] pt-[72px] p-12 flex flex-col items-center bg-white/2 mx-10 md:mx-0"
    >
      {/* Logo */}
      <div className="absolute -top-10">
        <img
          className="w-20"
          src="https://uploads-ssl.webflow.com/6448f34333a1f4b6f865b01c/64490d505231e88dfa3011ca_png.png"
          alt="OnlyDust logo"
        />
      </div>
      <div className="overflow-hidden h-fit">
        {/* Text */}
        <div>
          <div className="w-fit max-w-lg flex flex-col gap-6 items-center px-11 ">
            <div className="font-bold text-3xl text-greyscale-50">
              Only Dust case study
            </div>
            <div className="font-normal text-base text-center text-greyscale-50 whitespace-normal ">
              This case study currently have a drawer that open on the right.
              The goal was to be as close as possible to the Figma provided
              while improving the UX.
            </div>

            <div className="flex flex-col items-center gap-6">
              {/* CTA Button */}
              <button
                className="bg-stone-100 text-slate-900 text-lg flex flex-row justify-center items-center drop-shadow-bottom-sm font-medium cursor-pointer shadow-bottom-sm text-spaceBlue-900 hover:text-[#5e406c] hover:bg-[#f7e6ff] active:text-[#50325e] active:outline active:outline-4 active:outline-[#5e406c] active:shadow-none w-fit h-fit gap-3 rounded-xl px-6 py-4 "
                type="button"
                onClick={() => setIsOpen(true)}
              >
                Open Sesame🗄️
              </button>
              {/* Made by href*/}
              <a
                href="https://davidpeter.carrd.co/"
                className="font-medium text-xs text-stone-500 cursor-pointer hover:opacity-80"
              >
                Made by David Peter
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
