'use client'
import React from "react";
import { Button } from "../ui/button";
import BlurImage from "../BlurImage/blurimage";
interface EventCardProps {
  img: string;
  name: string;
  eventDate: string;
  regDate: string;
  organizingClub: string;
  accent: string;
}

const EventCard: React.FC<EventCardProps> = (props) => {
  const { img, name, eventDate, regDate, organizingClub, accent } = props;

  return (
    <div className="border lg:w-max w-full lg:max-w-[24rem] border-gray-300 rounded-lg p-4 lg:p-[0.75rem] shadow-md flex flex-col">
      <div className="flex items-center justify-center w-[75vw] lg:w-[19.6875rem] h-[27.8125rem] lg:h-[28rem] object-cover">
        <BlurImage
          alt="poster"
          image={img}
          width={210}
          height={297}
          zoomin={false}
          rounded="rounded-xl"
        />
      </div>
      <div className="mt-4 font-mono">
        <h2 className="text-xl lg:text-[1.25rem] font-semibold">{name}</h2>
        <p className="text-gray-100">
          <span className="text-zinc-500 underline">Event Date</span> :{" "}
          {eventDate}
        </p>
        <p className="text-gray-100">
          <span className="text-zinc-500 underline">Registration Date</span> : {regDate}
        </p>
        <p className="text-gray-100">
          <span className="text-zinc-500 underline">Organizing Club</span> :{" "}
          {organizingClub}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
