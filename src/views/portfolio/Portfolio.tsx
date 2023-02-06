import React from "react";
import { AlgoView } from "../algo_view/AlgoView";
import { Card } from "components";
import algo_data from "../../assets/data/algorithms";
import { Projects } from "../projects/Projects";
interface PortfolioProps {}

export const Portfolio: React.FC<PortfolioProps> = ({}) => {
  return (
    <div className="min-h-full min-w-full" id="portfolio">
      <div className="h-[5%] w-full flex items-center justify-start">
        <div className="h-full w-fit">
          <h1 className="section_title play_font">Portfolio</h1>
        </div>
      </div>

      <div className="h-[95%] w-full flex items-center justify-center flex-wrap">
        <div className="portfolio_cards">
          <Card title={"Algorithms"}>
            <AlgoView algoData={algo_data} cnt={35} />
          </Card>
          <Card title={"Projects"}>
            <Projects />
          </Card>
        </div>
      </div>
    </div>
  );
};
