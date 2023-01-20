import React from "react";
import { ProjectCard } from "./project_card/ProjectCard";
import { Tokenizer } from "./tokenizer/Tokenizer";
import project_data from "@data/projects";

interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = ({}) => {
  return (
    <div className="h-full w-full overflow-y-scroll flex items-center justify-center flex-wrap">
      <div className="h-[95%] w-[90%] flex items-center justify-center gap-3 flex-wrap">
        <ProjectCard
          title="Tokenizer"
          description="A tokenizer breaks streams of text into tokens, usually by looking for whitespaces. This tokenizer creates tokens with the help of user given lexical grammar and returns an object that you can traverse the tokens found inside of the provided string input."
        >
          <Tokenizer />
        </ProjectCard>

        <ProjectCard
          title="Finder"
          description="This is jsut a test description that is used to test this part of the project okej. This is jsut a test description that is used to test this part of the project okej."
        ></ProjectCard>

        <ProjectCard
          title="Finder"
          description="This is jsut a test description that is used to test this part of the project okej."
        ></ProjectCard>

        <ProjectCard
          title="Finder"
          description="This is jsut a test description that is used to test this part of the project okej."
        ></ProjectCard>
      </div>
    </div>
  );
};
