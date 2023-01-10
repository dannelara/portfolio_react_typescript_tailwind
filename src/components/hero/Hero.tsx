import React from "react";
import profile from "../../assets/imgs/profile_v2.jpg";
interface HeroProps {}

export const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <div className="card flex items-center justify-center h-full w-full">
      <div className="h-full w-2/3 overflow-hidden">
        <div className="h-1/3 w-full flex items-center justify-center  mdl: text-center xlg:text-left">
          <h1 className="bg-transparent hero-title text-white hover_underline">
            Web Development by Daniel Lara
          </h1>
        </div>
        <div className="h-1/3 w-full flex items-center justify-center relative">
          <img
            src={profile}
            alt="profile"
            className="h-full w-full cover_image"
          />
        </div>
        <div className="h-1/3 w-full flex items-center justify-center sm: overflow-y-scroll lg:overflow-y-hidden">
          <span className="text-white  play_font">
            Let me introduce myself, - I'm a full-stack developer who is
            passionate about back-end -, front-end development, algorithms and
            data structures. Currently, I’m studying web programming at Linneus
            University in Sweden.
          </span>
        </div>
      </div>
    </div>
  );
};
