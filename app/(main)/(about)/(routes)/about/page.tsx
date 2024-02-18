import React from "react";
import JoinUsCard from "@/components/JoinUsCard/joinUsCard";
import Image from "next/image";

const About = () => {
  const joinUsData = [
    {
      title: "Workshops",
      description: "",
    },
    {
      title: "Hands On Experience",
      description: "",
    },
    {
      title: "Guest Lectures",
      description: "",
    },
  ];

  return (
    <div className="w-full pt-20 min-h-screen relative">
      <div className="relative">
        <div className="lg:w-full lg:h-screen w-[90%] h-[55vh]">
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          <Image
            src="/images/HOME.svg"
            alt="campus-image"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
        </div>
        {/* Text */}
        <div className="top-[15%] w-[80%] left-1/2 absolute lg:top-[20%] lg:left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-zinc-100 text-center z-20">
          <h1 className="lg:text-4xl text-xl tracking-wide font-mono font-bold">
            Indian Institute of Information Technology Vadodara
          </h1>
          <h3 className="lg:text-2xl tracking-wide font-mono font-bold">
            International Campus Diu
          </h3>
        </div>
      </div>

      <div className="text-center mt-8 lg:mt-16">
        <h1 className="text-4xl tracking-wide font-mono font-bold">About Us</h1>
        <div className="text-left pl-12 pr-4 lg:text-center text-sm lg:text-lg font-mono mt-8 lg:mt-16 text-zinc-200 flex flex-col gap-8 items-center lg:px-16">
          <p>
            Join us for an incredible experience at{" "}
            <span className="font-primary tracking-widest">HORIZON</span>, the
            Annual Festival of Indian Institute of Information Technology
            Vadodara, International Campus Diu! It's not just an event, it's a
            celebration of technology, innovation, and intellect. Here,
            participants from all corners of India unite to create something
            truly extraordinary.
          </p>
          <p>
            <span className="font-primary tracking-widest">Horizon</span> this
            year is bigger and better, with a focus on both hardware and
            software. We're thrilled to introduce our recently established
            Robotics Club and our ever-so-elegant Coding Club with the Classical
            events of our Design Club. Get ready for our Flagship Events:
            Capture the Flag, RoboArena, ScrapWeb and the most awaited
            Hackathon. We're expecting a footfall of over 400 enthusiasts! Don't
            miss out on the opportunity!
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-5 w-screen lg:px-20 px-4 lg:my-28 my-16">
        {joinUsData.map((workshop, index) => (
          <JoinUsCard
            key={index}
            title={workshop.title}
            description={workshop.description}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
