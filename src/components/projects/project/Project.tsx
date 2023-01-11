import React from "react";

interface ProjectProps {
  title: String;
}

export const Project: React.FC<ProjectProps> = ({ title }) => {
  return (
    <div className="project_card">
      <div className="h-[10%] w-[90%] flex items-center justify-start">
        <h1 className="section_title play_font">{title}</h1>
      </div>

      {/* <div className="h-[90%] w-full flex items-end justify-end">
        <span className="text-black">Test</span>
      </div> */}
    </div>
  );
};
