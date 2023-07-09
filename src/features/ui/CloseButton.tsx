import { Dispatch, SetStateAction } from "react";
import { ReactComponent as CrossIcon } from "./uiAssets/close-cross-exit.svg";

export const CloseButton = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div
        className="cursor-pointer absolute top-0 right-0 mt-3 mr-5 hover:opacity-70 z-10 transition-opacity"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <div className="w-8 h-8 p-2 bg-white bg-opacity-5 rounded-lg shadow border border-stone-100 justify-center items-center gap-2 inline-flex">
          <CrossIcon />
        </div>
      </div>
    </>
  );
};
