import React, { createRef, useEffect, useMemo, useState } from "react";
import { GlobalStateContext } from "global/GlobalState";
import useIsInViewport from "utils/useIsInViewport";
import { Section } from "components";

export const Skills: React.FC = ({}) => {
  const { set_current_section } = React.useContext(GlobalStateContext);
  const ref1 = createRef<HTMLDivElement>();

  const isInViewport1 = useIsInViewport(ref1);

  useEffect(() => {
    if (isInViewport1) {
      set_current_section((prev: number) => (prev = 2));
    } else {
      set_current_section((prev: number) => (prev = 1));
    }
  }, [isInViewport1]);

  return (
    <Section id="skills" title="skills">
      <div className="relative min-h-2/3 w-[95%] flex flex-wrap gap-3">
        <div className="h-1/2 w-full  flex items-start sm: justify-end lg:justify-center flex-wrap gap-3">
          <div className="skill">
            <span className="play_font flex">Kubernetes</span>
          </div>
          <div className="skill">
            <span className="play_font flex">React</span>
          </div>
          <div className="skill">
            <span className="play_font flex">Nextjs</span>
          </div>
          <div className="skill">
            <span className="play_font flex">Spring</span>
          </div>
          <div className="skill">
            <span className="play_font flex">Typescript</span>
          </div>
          <div className="skill">
            <span className="play_font flex">Javascript</span>
          </div>
          <div className="skill">
            <span className="play_font flex">Java</span>
          </div>
          <div className="skill">
            <span className="play_font flex">Styled-components</span>
          </div>
          <div className="skill">
            <span className="play_font flex">TailwindCSS</span>
          </div>
          <div className="skill">
            <span className="play_font flex">Node</span>
          </div>
          <div className="skill">
            <span className="play_font flex">Mongoodb</span>
          </div>

          <div className="absolute bottom-0" ref={ref1}></div>
        </div>
      </div>
    </Section>
  );
};
