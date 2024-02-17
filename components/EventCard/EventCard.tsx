import React from "react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
// import "./sponsor.css";

interface EventCardProps {
  img: string;
  name: string;
  eventDate: string;
  regDate: string;
  organizingClub: string;
  accent : string;

}

const EventCard: React.FC<EventCardProps> = (props) => {
  const { img, name, eventDate,regDate,organizingClub,accent } = props;

  return (
    <div className={ `w-[50rem] h-max p-6 border-2  rounded-sm`}>
         <h1 className=" text-4xl">{name}</h1>
         <Separator className="my-3 "/>
         <div className="w-full h-full flex gap-x-12">
            <img src={img} alt={name} className=" h-72 w-"/>
            <div>
                <h3 className="text-xl">Event date : {eventDate}</h3>
                <h3 className="text-xl">Registration date : {regDate}</h3>
                <h3 className="text-xl">Organizing Club : {organizingClub}</h3>
                <Button variant="outline" size="lg" className="mt-24 text-xl h-10">
                    Register
                </Button>
            </div>
         </div>

    </div>
  );
};

export default EventCard;
