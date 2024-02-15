import React from "react";
import "./sponsor.css";

interface SponsorCardProps {
  img: string;
  name: string;
  title: string;
}

const SponsorCard: React.FC<SponsorCardProps> = (props) => {
  const { img, name, title } = props;

  return (
    <div className="flex flex-col justify-center items-center w-[250px] h-[155px]">
      <h1>{title}</h1>
      <div className="sponsor-card-container w-[243px] h-[153px] bg-white">
        <div className="sponsor-card overflow-hidden relative left-[1.5px] top-[1.5px] bg-red-200 w-[240px] h-[150px] flex flex-col justify-center items-center border-2 border-zinc-50 inset-1">
          <div className="sponsor-image justify-center items-center bg-black w-full h-[80%]">
            <img
              className="overflow-hidden"
              src={img}
              alt=""
              loading="lazy"
            />
          </div>
          <div className="h-[20%] flex justify-center items-center bg-red-200 w-full">
            <h1>{name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorCard;
