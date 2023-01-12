import React, { useEffect, useState } from "react";

import { Hero } from "../hero/Hero";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { Portfolio } from "../portfolio/Portfolio";
import { Skills } from "../skills/Skills";
import { Contact } from "../contact/Contact";
import { GlobalStateContext } from "../../global/GlobalState";

interface MainProps {}

export const Main: React.FC<MainProps> = ({}) => {
  // const [current_section_view, set_current_section] = useState(1);

  const sections_paths = ["/#portfolio", "/#skills", "/#contact"];
  const { current_section, set_current_section } =
    React.useContext(GlobalStateContext);

  const sections = ["portfolio", "skills", "contact"];

  const next = () => {
    set_current_section((prev: number) => {
      return prev + 1;
    });

    if (current_section === sections_paths.length - 1) {
      set_current_section((prev: number) => (prev = 0));
    }

    window.location.href = sections_paths[current_section];
  };

  useEffect(() => {}, [current_section]);

  return (
    <div className="h-[90%] w-full flex items-end justify-center">
      <div className="sm: h-full md:h-5/6 w-full flex items-center justify-center">
        <div className="h-full w-1/12 flex items-center justify-center">
          <div className="h-full w-fit flex items-center justify-end">
            <div
              className="h-fit w-full cursor-pointer hover_underline_vertical"
              onClick={next}
            >
              {current_section === 0 ? (
                <>
                  <span className="controll h-fit w-full flex items-center justify-center mb-3">
                    <GrLinkPrevious className="text-white" />
                  </span>
                  <span className="text-white vertical_reverse">
                    Back to top
                  </span>
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
          </div>
        </div>

        <div className="h-full sm: w-full  lg:w-4/6 flex flex-wrap overflow-y-scroll ">
          <Portfolio />
          <Skills />
          <Contact />
        </div>

        <div className="sm: hidden lg:flex h-full w-2/6">
          <Hero />
        </div>
      </div>
    </div>
  );
};
