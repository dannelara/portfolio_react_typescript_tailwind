import React from "react";
import { Project } from "./project/Project";

interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = ({}) => {
  return (
    <div className="h-full w-[90%] overflow-y-scroll flex items-center justify-center flex-wrap">
      {/* <div className="h-1/2 w-full flex items-center justify-center gap-3">
        <Project title="Finder" />
        <Project title="Finder" />
      </div>

      <div className="h-1/2 w-full flex items-center justify-center gap-3">
        <Project title="Finder" />
        <Project title="Finder" />
      </div> */}
    </div>
  );
};
