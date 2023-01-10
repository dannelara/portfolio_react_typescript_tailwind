import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GlobalStateContext } from "../../../global/GlobalState";

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
        className="okej h-full w-full flex items-center justify-center cursor-pointer"
        onClick={handleClick}
      >
        <span>{title}</span>
      </div>
      <div
        className="fixed top-0 left-0 h-screen w-screen bg-black z-[10000] animate-[grow_0.5s_forwards] items-center justify-center"
        style={{ display: big_screen ? "flex" : "none" }}
      >
        <div className="fixed h-[10%] top-0 w-full flex items-center justify-center">
          <div className="h-full w-[90%] flex items-center justify-end">
            <AiOutlineClose
              onClick={handleClick}
              className="cursor-pointer text-white text-2xl"
            />
          </div>
        </div>

        <div className="h-4/5 w-full flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};
