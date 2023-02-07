import React, { createRef, useEffect, useMemo, useState } from "react";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GlobalStateContext } from "global/GlobalState";
import useIsInViewport from "utils/useIsInViewport";

interface ContactProps {}

export const Contact: React.FC<ContactProps> = ({}) => {
  const { set_current_section } = React.useContext(GlobalStateContext);

  const ref1 = createRef<HTMLDivElement>();

  const isInViewport1 = useIsInViewport(ref1);

  useEffect(() => {
    console.log("here");
    if (isInViewport1) {
      set_current_section((prev: number) => (prev = 0));
    }
  }, [isInViewport1]);

  return (
    <div className="h-full w-full" id="contact">
      <div className="h-[5%] w-full flex items-center justify-start">
        <div className="h-full w-fit">
          <h1 className="section_title text-white play_font">Contact</h1>
        </div>
      </div>
      <div className="h-[95%] w-full flex items-center justify-center">
        <div className="h-2/3 w-full flex items-center justify-between flex-wrap">
          <div className="w-full h-auto flex items-center justify-center flex-wrap gap-10">
            <div className="w-full h-auto flex items-center justify-center">
              <span className="text-white py-2 text-center play_font">
                Connect with me on
              </span>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="w-[50%] h-[50px] flex justify-center items-center gap-7">
              <a
                href="https://github.com/dannelara"
                className="h-2/3 w-2/3 border-b link_hover_bg"
              >
                <AiFillGithub className="text-white cursor-pointer h-full w-full" />
              </a>

              <a
                href="https://www.linkedin.com/in/daniel-lara-92bb19242/"
                className="h-2/3 w-2/3 border-b link_hover_bg"
              >
                <AiFillLinkedin className="text-white cursor-pointer h-full w-full" />
              </a>
            </div>
          </div>
          <div
            className="w-full h-auto flex items-center justify-center"
            ref={ref1}
          >
            <span className="text-white py-2 text-center w-fit play_font">
              Copyright 2022 - 2023, Daniel Lara, All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
