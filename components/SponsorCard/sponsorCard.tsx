import React from "react";
import "./sponsor.css";
import BlurImage from "../BlurImage/blurimage";
import { Separator } from "@/components/ui/separator";

interface SponsorCardProps {
  img: string;
  name: string;
  title: string;
}

const SponsorCard: React.FC<SponsorCardProps> = (props) => {
  const { img, name, title } = props;

  return (
    <div className="main-sponsor-container w-[20rem] h-[20rem]">
        {/* <BlurImage /> */}
    </div>
  );
};

export default SponsorCard;
