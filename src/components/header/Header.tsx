import React from "react";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="h-28 w-full bg-transparent z-[10000] flex items-center justify-center">
      <div className="h-full w-[90%] flex items-center justify-between">
        <div className="h-full w-1/3 flex items-start justify-start gap-5">
          <div className="logo-container h-full w-fit  flex items-center justify-center">
            <div className="logo">
              <span className="text-white header_text">LOGO</span>
            </div>
          </div>
          <div className="h-full w-full flex items-center justify-center">
            <ul className="w-full h-full flex items-center justify-between">
              <li className="text-white header_text">Home</li>
              <li className="text-white header_text">Roads</li>
              <li className="text-white header_text">Mountains</li>
              <li className="text-white header_text">Mountains</li>
            </ul>
          </div>
        </div>
        <div>
          <ul className="flex">
            <li className="text-white header_text">hej</li>
            <li className="text-white header_text">hej</li>
            <li className="text-white header_text">hej</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
