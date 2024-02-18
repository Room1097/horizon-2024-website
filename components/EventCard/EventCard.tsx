"use client";
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
    <div className="border lg:w-max w-[80vw] border-gray-300 rounded-lg p-4 shadow-md flex flex-col">
      <div className="flex items-center justify-center">
        <BlurImage
          alt="poster"
          image={img}
          width={253}
          height={400}
          zoomin={false}
          rounded="rounded-xl"
        />
      </div>
      <div className="mt-4 font-mono">
        <h2 className="text-xl font-semibold">{name}</h2>
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
