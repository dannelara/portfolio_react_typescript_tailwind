import React from "react";
import { AlgoView } from "../algo_view/AlgoView";
import { Card } from "components";
import algo_data from "../../assets/data/algorithms";
import { Projects } from "../projects/Projects";
import { Section } from "components/section/Section";
interface PortfolioProps {}

export const Portfolio: React.FC<PortfolioProps> = ({}) => {
  return (
    <Section id="portfolio" title="Portfolio">
      <div className="portfolio_cards">
        <Card title={"Algorithms"}>
          <AlgoView algoData={algo_data} cnt={35} />
        </Card>
        <Card title={"Projects"}>
          <Projects />
        </Card>
      </div>
    </Section>
  );
};
