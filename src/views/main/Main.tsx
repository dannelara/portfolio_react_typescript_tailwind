import React from "react";
import { Hero, SectionTracker } from "components";
import { Portfolio } from "views";
import { Skills } from "views";
import { Contact } from "views";

export const Main: React.FC = ({}) => {
  return (
    <div className="h-[90%] w-full flex items-end justify-center">
      <div className="sm: h-full md:h-5/6 w-full flex items-center justify-center">
        <div className="h-full w-1/12 flex items-center justify-center">
          <div className="h-full w-fit flex items-center justify-end">
            <SectionTracker />
          </div>
        </div>

        <div className="h-full sm: w-full  lg:w-4/6 flex flex-wrap overflow-y-scroll content_scrollable">
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
