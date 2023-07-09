import { Dispatch, SetStateAction, useRef } from "react";
import { CloseButton } from "../ui/CloseButton";

type DrawerPropsType = {
  children?: React.ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

// Close button component


// Drawer component that can be used anywhere in the app with a close button
export const Drawer = ({ isOpen, setIsOpen, children }: DrawerPropsType) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Close the drawer when clicking outside of it (on the overlay)
  const handleClickOutside = (event: { target: any }) => {
    if (
      isOpen &&
      drawerRef.current &&
      !drawerRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 overflow-hidden transition-opacity ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      } ${isOpen ? "opacity-100" : "opacity-0"}`}
      onClick={handleClickOutside}
    >
      <div
        className="fixed inset-0 bg-black opacity-75"
        onClick={handleToggle}
      />
      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div
          ref={drawerRef}
          className={`drawer max-w-lg bg-neutral-900 overflow-y-auto ease-in-out transition-transform transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <CloseButton setIsOpen={setIsOpen} />
          {children}
        </div>
      </div>
    </div>
  );
};
