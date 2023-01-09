import React from "react";
import profile from "../../assets/imgs/profile.jpg";
interface HeroProps {}

export const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <div className="card flex items-center justify-center">
      <div className="h-1/3 w-1/2 flex items-center justify-center">
        {/* <img
          src={profile}
          alt="profile"
          className="h-full w-full rounded-sm hover:scale-[120%] transi"
        /> */}
      </div>
    </div>
  );
};
