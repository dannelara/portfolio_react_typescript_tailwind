import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface ProjectCardProps {
  title: String;
  children?: JSX.Element | JSX.Element[];
  description: String;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  children,
  description,
}) => {
  const [project_active, set_project_active] = useState(false);
  const [project_info_active, set_project_info_active] = useState(false);

  const handleClick = (e: any) => {
    set_project_active(!project_active);
  };

  return (
    <div className="project_card border-2 rounded-md">
      {project_info_active ? (
        <div
          className="project_card_content h-[90%] w-full  flex items-center justify-center flex-wrap cursor-pointer"
          onClick={() => set_project_info_active(!project_info_active)}
        >
          <div className="flex flex-wrap items-center justify-center gap-5">
            <div className="h-fit w-[90%] flex items-center justify-center text-center sm: overflow-y-scroll lg:overflow-y-hidden">
              <h1 className="text-white play_font">{description}</h1>
            </div>
            <div className="h-fit w-full flex items-center justify-center">
              <button
                className="play_font border-2 bg-white hover:scale-[110%] py-1 px-1 text-black"
                onClick={handleClick}
              >
                Try it out!
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="h-[90%] w-full flex items-center justify-center flex-wrap cursor-pointer"
          onClick={() => set_project_info_active(!project_info_active)}
        >
          <div className="flex flex-wrap gap-2">
            <div className="h-fit w-full flex items-center justify-center">
              <h1 className="section_title play_font">{title}</h1>
            </div>
            <div className="h-fit w-full flex items-center justify-center">
              <p className="default_text play_font">Read more...</p>
            </div>
          </div>
        </div>
      )}

      <div
        className="absolute top-0 left-0 h-full w-full bg-dark_blue z-[500] animate-[grow_0.5s_forwards] flex flex-wrap"
        style={{ display: project_active ? "flex" : "none" }}
      >
        <div className="h-[10%] w-full flex items-center justify-center">
          <div className="h-full w-[90%] flex items-center justify-end">
            <AiOutlineClose
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
