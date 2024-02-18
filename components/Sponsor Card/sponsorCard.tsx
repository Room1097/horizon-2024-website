import React from "react";
import "./sponsor.css";
import { Separator } from "@/components/ui/separator";

interface SponsorCardProps {
  img: string;
  name: string;
  title: string;
}

const SponsorCard: React.FC<SponsorCardProps> = (props) => {
  const { img, name, title } = props;

  return (
    <div className="sponsor-card-container rounded-xl w-max h-[30rem] bordear-2 p- flex flex-col items-center " >
      <h2 className="text-2xl font-primary pb-5 text-wrap bordaer-2">{title}</h2>
      <h2 className="text-2xl font-primary pb-5 text-wrap bordaer-2">Sponsor</h2>
      
      {/* <Separator className="w-[100%] mb-5 bg-gradient-to-r from-violet-200 to-pink-200"/> */}
    <div className=" w-[22rem] bordear-2  h-72 sponsor-card bg-gradient-to-r from-fuchsia-600 to-purple-600">
     <img src={img} className=" bordear-2 absolute mt-4 ml-4 h-[16rem] w-[20rem]"/>
    </div>
    </div>
  );
};

export default SponsorCard;
