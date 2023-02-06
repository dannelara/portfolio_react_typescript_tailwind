import React, { useState } from "react";
import { AiFillCopy } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

interface ProjectCardProps {
  title: String;
  children?: JSX.Element | JSX.Element[];
  img_url?: String;
  how_to?: String;
  command?: String;
  description: String[];
  link?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  children,
  img_url,
  how_to,
  description,
  command,
  link,
}) => {
  const [project_active, set_project_active] = useState(false);
  const [project_info_active, set_project_info_active] = useState(false);

  const handleClick = (e: any) => {
    set_project_active(!project_active);
  };

  const copyText = async (e: any) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(e.currentTarget.id);
    } else {
      return document.execCommand("copy", true, e.currentTarget.id);
    }
  };

  return (
    <div className="project_card border-2 rounded-md flex items-end">
      {project_info_active ? (
        <div className="project_card_content h-full w-full flex items-center justify-center flex-wrap">
          <div className="h-[10%] w-[90%] flex items-center justify-end">
            <IoMdClose
              onClick={() => set_project_info_active(!project_info_active)}
              className="cursor-pointer text-black text-2xl"
            />
          </div>

          <div className="h-[90%] w-[90%] flex flex-wrap items-center justify-center gap-5 overflow-y-scroll">
            <div className="h-fit w-full flex items-center justify-center flex-wrap gap-3">
              {description.map((part, k) => (
                <p className="play_font text-base" key={k}>
                  {part}
                </p>
              ))}
            </div>

            {how_to && (
              <div className="h-fit w-full flex flex-wrap items-center justify-center gap-4 flex_childred_full">
                <h1 className="gray_border_bottom text-xl font_play">
                  How to use
                </h1>
                <p className=" play_font text-base">{how_to}</p>

                <div className="bg-section_dark flex items-center">
                  <p className=" text-white py-2 px-2">{command}</p>
                  <div className="flex h-[90%] items-start justify-start">
                    <AiFillCopy
                      className="text-white h-full cursor-pointer"
                      id={`${command}`}
                      onClick={copyText}
                    />
                  </div>
                </div>
              </div>
            )}

            {img_url && (
              <div className="h-fit w-full flex items-center justify-center">
                <img
                  src={`${img_url}`}
                  alt="project image"
                  className="bg-cover"
                />
              </div>
            )}

            <div className="h-1/5 w-full flex items-center justify-center">
              {link ? (
                <a href={`${link}`} target="_blank" className="button_default">
                  Try it out
                </a>
              ) : (
                <button className="button_default" onClick={handleClick}>
                  Try it out
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div
          className="h-[90%] w-full flex items-center justify-center flex-wrap cursor-pointer "
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
            <div className="h-fit w-full flex items-center justify-center">
              <h1 className="section_title play_font">{title}</h1>
            </div>
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
