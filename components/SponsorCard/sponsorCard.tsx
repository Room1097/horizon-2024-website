"use client";
import React from "react";
import BlurImage from "../BlurImage/blurimage";
import Image from "next/image";

interface SponsorCardProps {
  img: string;
  name: string;
  title: string;
  subtitle: string;
}

const SponsorCard: React.FC<SponsorCardProps> = (props) => {
  const { img, name, title, subtitle } = props;

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-mono text-xl">{title}</h1>
      <h1 className="font-mono text-xl">{subtitle}</h1>
      <div className="main-sponsor-box w-[20rem] h-[20rem] relative">
      <div className="absolute inset-0">
        <BlurImage
          image="/images/SponsorCard/sponsor-bg.svg"
          width={400}
          height={400}
          alt="missing"
          rounded="rounded-xl"
        />
      </div>
      <div className="w-[16rem] absolute top-[30%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <Image
          src={img}
          width={800}
          height={800}
          alt="missing"
        />
      </div>
    </div>
    </div>
  );
};

export default SponsorCard;
