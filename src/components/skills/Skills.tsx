import React, { createRef, useEffect, useMemo, useState } from "react";
import {
  SiJava,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiSemanticuireact,
  SiSpring,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import skills_data from "@data/skills";

import { GlobalStateContext } from "../../global/GlobalState";

interface SkillsProps {}

export const Skills: React.FC<SkillsProps> = ({}) => {
  const { current_section, set_current_section } =
    React.useContext(GlobalStateContext);
  const ref1 = createRef<HTMLDivElement>();

  const isInViewport1 = useIsInViewport(ref1);

  function useIsInViewport(ref: any) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting)
        ),
      []
    );

    useEffect(() => {
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);

    return isIntersecting;
  }

  useEffect(() => {
    if (isInViewport1) {
      set_current_section((prev: number) => (prev = 2));
    } else {
      set_current_section((prev: number) => (prev = 1));
    }
  }, [isInViewport1]);

  return (
    <div className="min-h-full w-full" id="skills">
      <div className="h-[5%] w-full flex items-center justify-start">
        <div className="h-full w-fit">
          <h1 className="section_title text-white play_font">Skills</h1>
        </div>
      </div>

      <div className="h-[95%] w-full flex items-center justify-center flex-wrap">
        <div className="relative min-h-2/3 w-[95%] flex flex-wrap gap-3">
          <div className="h-1/2 w-full  flex items-start sm: justify-end lg:justify-center flex-wrap gap-3">
            <div className="skill">
              {/* <SiKubernetes /> */}
              <span className="play_font flex">Kubernetes</span>
            </div>
            {/* <div className="skill">
              <div className="not_visible">
                <SiKubernetes />
              </div>
              <span className="play_font flex">IoC</span>
            </div> */}
            <div className="skill">
              {/* <SiSemanticuireact /> */}
              <span className="play_font flex">React</span>
            </div>
            <div className="skill">
              {/* <SiNextdotjs /> */}
              <span className="play_font flex">Nextjs</span>
            </div>
            <div className="skill">
              {/* <SiSpring /> */}
              <span className="play_font flex">Spring</span>
            </div>
            <div className="skill">
              {/* <SiTypescript /> */}
              <span className="play_font flex">Typescript</span>
            </div>
            <div className="skill">
              {/* <SiJavascript /> */}
              <span className="play_font flex">Javascript</span>
            </div>
            <div className="skill">
              {/* <SiJava className="skill_svg" /> */}
              <span className="play_font flex">Java</span>
            </div>
            <div className="skill">
              {/* <SiStyledcomponents className="skill_svg" /> */}
              <span className="play_font flex">Styled-components</span>
            </div>
            <div className="skill">
              {/* <SiTailwindcss className="skill_svg" /> */}
              <span className="play_font flex">TailwindCSS</span>
            </div>
            <div className="skill">
              {/* <IoLogoNodejs className="skill_svg" /> */}
              <span className="play_font flex">Node</span>
            </div>
            <div className="skill">
              {/* <SiMongodb className="skill_svg" /> */}
              <span className="play_font flex">Mongoodb</span>
            </div>
            {/* {skills_data
              .slice(0, Math.floor(skills_data.length / 2))
              .map((skill, k) => {
                return (
                  <div className="skill" key={k}>
                    <span className="play_font">{skill.name}</span>
                  </div>
                );
              })} */}
            <div className="absolute bottom-0" ref={ref1}></div>
          </div>

          {/* <div className="h-1/2 w-full  flex items-center sm: justify-end lg:justify-center flex-wrap gap-3">
            {skills_data
              .slice(Math.floor(skills_data.length / 2))
              .map((skill, k) => {
                return (
                  <div className="skill" key={k}>
                    <span className="play_font">{skill.name}</span>
                  </div>
                );
              })}
          </div> */}
        </div>
      </div>
    </div>
  );
};
