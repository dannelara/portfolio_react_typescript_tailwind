import React from "react";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

interface ContactProps {}

export const Contact: React.FC<ContactProps> = ({}) => {
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
              {/* <AiFillGithub className="text-def cursor-pointer h-2/3 w-2/3" />
        <AiFillLinkedin className="text-def cursor-pointer h-2/3 w-2/3" />
        <AiFillFacebook className="text-def cursor-pointer h-2/3 w-2/3" />
        <AiFillInstagram className="text-def cursor-pointer h-2/3 w-2/3" /> */}

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

              {/* <a
                href="https://www.facebook.com/daniel.lara.982"
                className="h-2/3 w-2/3 border-b link_hover_bg"
              >
                <AiFillFacebook className="text-white cursor-pointer h-full w-full" />
              </a> */}
            </div>
          </div>
          <div className="w-full h-auto flex items-center justify-center">
            <span className="text-white py-2 text-center w-fit play_font">
              Copyright 2022 - 2023, Daniel Lara, All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
