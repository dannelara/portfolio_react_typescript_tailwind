import React from "react";
import { Bio } from "../bio/Bio";
import { Hero } from "../hero/Hero";

interface MainProps {}

export const Main: React.FC<MainProps> = ({}) => {
  return (
    <div className="h-[90%] w-full flex   items-end justify-center">
      <div className="h-5/6 w-full flex items-center justify-center">
        <div className="h-full w-1/6 flex items-end justify-end">
          <div className="h-full w-fit flex items-center justify-end">
            <div className="h-fit w-full">
              <span className="text-white vertical">Next page</span>
              <span>
                <GrNext />
              </span>
            </div>
          </div>
        </div>

        <div className="h-full w-4/6 ">
          <Bio />
        </div>

        <div className="h-full w-2/6  test_effect">
          <Hero />
        </div>
      </div>
    </div>
  );
};
