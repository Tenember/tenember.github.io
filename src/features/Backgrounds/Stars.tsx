import { ReactNode } from "react";

export const StarsBackground = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-space rounded-3xl m-6 h-[calc(100vh-48px)] flex flex-col align-middle justify-center items-center	">
      {children}
    </div>
  );
};
