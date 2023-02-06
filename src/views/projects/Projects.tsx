import React, { Suspense } from "react";
import { ProjectCard } from "components";

import tokenizer_img from "assets/imgs/tokenizer.jpg";
import the_movie_db_img from "assets/imgs/the_movies.jpg";

const Tokenizer = React.lazy(() => import("components/tokenizer/Tokenizer"));
const DocFinder = React.lazy(() => import("components/docFinder/DocFinder"));

export const Projects: React.FC = ({}) => {
  return (
    <div className="h-full w-full  flex items-center justify-center flex-wrap">
      <div className="h-[95%] w-[90%] overflow-y-scroll flex items-center justify-center gap-3 flex-wrap">
        <ProjectCard
          title="The moviedb"
          img_url={the_movie_db_img}
          link="https://themoviedb-chi.vercel.app/"
          description={[
            "The movies DB is a responsive SPA application where users can see information about movies, search for a specific movie and discover different movie genres",
          ]}
        ></ProjectCard>
        <ProjectCard
          title="Tokenizer"
          img_url={tokenizer_img}
          how_to="This project is available through NPM, which is a library and package manager. Run the following npm command to install the npm package to your project"
          command="npm install mytokenizerdaniel --save"
          description={[
            "A tokenizer breaks streams of text into tokens, usually by looking for whitespaces. This tokenizer creates tokens with the help of user given lexical grammar and returns an object which you can use to traverse the tokens found inside of the provided string input. If an invalid character is found, it will throw a TypeError.",
          ]}
        >
          <Suspense fallback={<div>Loading</div>}>
            <Tokenizer />
          </Suspense>
        </ProjectCard>

        <ProjectCard
          title="Document finder"
          description={[
            "Government data, such as information on public expenditure, public registers and demographic statistics, are an important resource for individuals, organisations and businesses. Making government data publicly available can increase transparency, accountability and participation in government decision-making. It also enables researchers, journalists and individuals to analyse and understand the social, economic and political factors that shape our societies.",
            "By providing access to state data, Document finder helps to promote a more informed and engaged citizenry, as well as support research and innovation. Whether you're a researcher, journalist, or simply someone interested in learning more about your community, this application is a valuable resource for discovering and understanding the desicions that shapes our world.",
          ]}
        >
          <DocFinder />
        </ProjectCard>
      </div>
    </div>
  );
};
