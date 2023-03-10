import React, { useState } from "react";

import { IoMdClose } from "react-icons/io";
import { GlobalStateContext } from "global/GlobalState";

interface CardProps {
  title: String;
  children?: JSX.Element | JSX.Element[];
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  const { full_screen, set_full_screen } = React.useContext(GlobalStateContext);
  const [big_screen, set_big_screen] = useState(false);

  const handleClick = (e: any) => {
    set_full_screen(!full_screen);
    set_big_screen(!big_screen);
  };

  return (
    <div>
      <div
        className="h-full w-full flex items-center justify-center cursor-pointer"
        onClick={handleClick}
      >
        <span className="transform_span">{title}</span>
      </div>
      <div
        className="absolute top-0 left-0 h-full w-full bg-dark_blue z-[500] animate-[grow_0.5s_forwards] flex flex-wrap"
        style={{ display: big_screen ? "flex" : "none" }}
      >
        <div className="h-[5%] w-full flex items-center justify-center">
          <div className="h-full w-[90%] flex items-end justify-end">
            <IoMdClose
              onClick={handleClick}
              className="cursor-pointer text-white text-2xl"
            />
          </div>
        </div>

        <div className="h-[90%] w-full flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};
