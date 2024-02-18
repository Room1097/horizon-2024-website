import React from "react";
import { Button } from "../ui/button";

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
    <div className="border border-gray-300 rounded-lg p-4 shadow-md flex flex-col">
      <div className="w-[30vh]">
        <img src={img} alt={name} loading="lazy" className="rounded-lg" />
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">Event Date: {eventDate}</p>
        <p className="text-gray-600">Registration Date: {regDate}</p>
        <p className="text-gray-600">Organizing Club: {organizingClub}</p>
      </div>
      <div className="mt-4">
        <Button color={accent}>Register Now</Button>
      </div>
    </div>
  );
};

export default EventCard;
