import React, { Suspense } from "react";
import { ProjectCard } from "./project_card/ProjectCard";

import tokenizer_img from "assets/imgs/tokenizer.jpg";

const Tokenizer = React.lazy(() => import("utils/tokenizer/Tokenizer"));

export const Projects: React.FC = ({}) => {
  return (
    <div className="h-full w-full overflow-y-scroll flex items-center justify-center flex-wrap">
      <div className="h-[95%] w-[90%] flex items-center justify-center gap-3 flex-wrap">
        <ProjectCard
          title="Tokenizer"
          img_url={tokenizer_img}
          how_to="This project is available through NPM, which is a library and package manager. Run the following npm command to install the npm package to your project"
          command="npm install mytokenizerdaniel --save"
          description="A tokenizer breaks streams of text into tokens, usually by looking for whitespaces. This tokenizer creates tokens with the help of user given lexical grammar and returns an object which you can use to traverse the tokens found inside of the provided string input. If an invalid character is found, it will throw a TypeError."
        >
          <Suspense fallback={<div>Loading</div>}>
            <Tokenizer />
          </Suspense>
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
