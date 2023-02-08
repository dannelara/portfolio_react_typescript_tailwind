import React from "react";

interface SectionProps {
  id: String;
  title: String;
  children: JSX.Element | JSX.Element[];
}

export const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <div
      className="h-screen w-full flex items-center justify-start flex-col"
      id={`${id}`}
    >
      <div className="h-[5%] w-full items-center justify-start">
        <h1 className="section_title play_font">{title}</h1>
      </div>
      <div className="min-h-[80%] w-full flex items-center justify-center flex-wrap">
        {children}
      </div>
    </div>
  );
};
