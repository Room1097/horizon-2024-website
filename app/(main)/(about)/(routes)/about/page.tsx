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
        <div style={{ width: "100%", height: "100vh" }}>
          <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
          <Image
            src="/images/HOME.svg"
            alt="campus-image"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
        </div>
        {/* Text */}
        <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-zinc-100 text-center z-20">
          <h1 className="text-4xl tracking-wide font-mono font-bold">
            Indian Institute of Information Technology Vadodara
          </h1>
          <h3 className="text-2xl tracking-wide font-mono font-bold">International Campus Diu</h3>
        </div>
      </div>

      <div className="text-center mt-16">
        <h1 className="text-4xl tracking-wide font-mono font-bold">About Us</h1>
        <div className="text-lg font-mono mt-16 text-zinc-200 flex flex-col gap-8 items-center px-16">
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

      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex justify-around w-screen my-28">
          {joinUsData.map((workshop, index) => (
            <JoinUsCard
              key={index}
              title={workshop.title}
              description={workshop.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
