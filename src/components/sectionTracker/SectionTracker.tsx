import { GlobalStateContext } from "global/GlobalState";
import React, { useEffect } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

export const SectionTracker: React.FC = ({}) => {
  const sections_paths = ["/#portfolio", "/#skills", "/#contact"];
  const { current_section, set_current_section } =
    React.useContext(GlobalStateContext);

  const sections = ["portfolio", "skills", "contact"];

  const handleNext = () => {
    set_current_section((prev: number) => {
      return prev + 1;
    });

    if (current_section === sections_paths.length - 1) {
      set_current_section((prev: number) => (prev = 0));
    }

    window.location.href = sections_paths[current_section];
  };

  return (
    <div className="h-fit w-full cursor-pointer" onClick={handleNext}>
      {current_section === 0 ? (
        <>
          <span className="controll h-fit w-full flex items-center justify-center mb-3">
            <GrLinkPrevious className="text-white" />
          </span>
          <span className="text-white vertical_reverse">Back to top</span>
        </>
      ) : (
        <>
          <span className="text-white vertical_reverse ">
            {sections[current_section]}
          </span>
          <span className="controll h-fit w-full flex items-center justify-center ">
            <GrLinkNext className="text-white" />
          </span>
        </>
      )}
    </div>
  );
};
