import React, { useState } from "react";
import profile from "../../assets/imgs/profile.jpg";

import {
  AiFillLinkedin,
  AiOutlineMenuUnfold,
  AiOutlineMenuFold,
} from "react-icons/ai";
interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const [burger_menu_active, set_burger_menu_active] = useState(false);

  return (
    <div className="h-[10%] w-full bg-transparent z-[10000] flex items-center justify-center sticky top-0">
      <div className="sm: hidden h-full w-[90%] md:flex lg:flex items-center justify-between">
        <div className="h-full w-1/2  flex items-center justify-center gap-5">
          <div className="w-4/5 h-full items-center justify-center">
            <ul className="w-full h-full flex items-center justify-start gap-5">
              <li className="text-white  hover_underline">
                <a href="#portfolio" className="text-sm play_font">
                  Portfolio
                </a>
              </li>
              <li className="text-white text-sm hover_underline">
                <a href="#skills" className="text-sm play_font">
                  Skills
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-full w-1/2 items-end justify-end">
          <ul className="w-full h-full flex items-center justify-end gap-5">
            <li className="text-white text-sm play_font hover_underline">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="sm: flex w-full md:hidden lg:hidden h-[10%] items-center justify-center">
        <div className="h-fit w-[90%] flex items-end justify-end">
          <AiOutlineMenuUnfold
            className="hover:cursor-pointer text-white text-2xl"
            onClick={() => set_burger_menu_active(!burger_menu_active)}
          />
        </div>

        <div
          className="absolute h-screen top-0 left-0 right-0 bottom-0 bg-black flex-wrap fade_in"
          style={{
            display: burger_menu_active ? "flex" : "none",
          }}
        >
          <div className="h-[10%] w-full bg-transparent z-[10000] flex items-center justify-center">
            <div className="h-fit w-[90%] flex items-end justify-end">
              <AiOutlineMenuFold
                className="hover:cursor-pointer text-white text-2xl"
                onClick={() => set_burger_menu_active(!burger_menu_active)}
              />
            </div>
          </div>

          <div className="h-[90%] w-full flex items-start justify-center flex-wrap">
            <div className="w-full flex items-center justify-around">
              <span className="text-white text-xl border-b-2 uppercase play_font">
                Daniel Lara
              </span>
              <div className="h-[150px] w-[150px] flex items-center justify-center rounded-full">
                <img
                  src={profile}
                  alt="profile"
                  className="h-full w-full cover_image rounded-full"
                />
              </div>
            </div>
            <ul className="flex gap-5 h-1/4 w-full justify-center items-center">
              <li>
                <a href="#portfolio">
                  <span
                    className="text-center text-sm play_font text-white hover_underline"
                    onClick={() => set_burger_menu_active(!burger_menu_active)}
                  >
                    Portfolio
                  </span>
                </a>
              </li>
              <li>
                <a href="#skills">
                  <span
                    className="text-center text-sm play_font text-white hover_underline"
                    onClick={() => set_burger_menu_active(!burger_menu_active)}
                  >
                    Skills
                  </span>
                </a>
              </li>
              <li>
                <a href="#contact">
                  <span
                    className="[uppdercase] text-center text-sm play_font text-white hover_underline"
                    onClick={() => set_burger_menu_active(!burger_menu_active)}
                  >
                    Contact
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
