import React from "react";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="h-[10%] w-full bg-transparent z-[10000] flex items-center justify-center">
      <div className="h-full w-[90%] flex items-center justify-between">
        <div className="h-full w-1/2  flex items-center justify-center gap-5">
          <div className="h-[100px] w-[100px] flex items-center justify-center rounded-full">
            <div className="min-h-[50px] min-w-[50px] border-2 border-white rounded-full flex items-center justify-center">
              <div className="text-white text-full text-xl">D</div>
            </div>
          </div>
          <div className="w-4/5 h-full items-center justify-center">
            <ul className="w-full h-full flex items-center justify-start gap-5">
              <li className="text-white header_text">Home</li>
              <li className="text-white header_text">Roads</li>
              <li className="text-white header_text">Mountains</li>
              <li className="text-white header_text">Mountains</li>
            </ul>
          </div>
        </div>
        <div className="h-full w-1/2 items-end justify-end">
          <ul className="w-full h-full flex items-center justify-end gap-5">
            <li className="text-white header_text">About</li>
            <li className="text-white header_text">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
