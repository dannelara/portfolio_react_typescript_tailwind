import React from "react";

interface BioProps {}

export const Bio: React.FC<BioProps> = ({}) => {
  return (
    <div className="h-full w-full flex items-center justify-center sm: flex-wrap md:flex-nowrap">
      <div className="sm: h-1/2 md:h-full sm: w-full md:w-1/2">
        <div className="h-1/2 w-full flex items-center justify-center flex-wrap gap-5">
          <div className="h-fit w-full flex items-center justify-center">
            <h1 className="bg-transparent hero-title text-white">
              Web Development by Daniel Lara
            </h1>
          </div>
          <div className="h-fit w-full ">
            <span className="text-xl text-white play_font">
              Let me introduce myself, - I'm a full-stack developer who is
              passionate about back-end -, front-end development, algorithms and
              data structures. Currently, I’m studying web programming at
              Linneus University in Sweden.
            </span>
          </div>
        </div>
      </div>

      <div className="sm: h-1/2 md:h-full sm: w-full md:w-1/2"></div>
    </div>
  );
};
