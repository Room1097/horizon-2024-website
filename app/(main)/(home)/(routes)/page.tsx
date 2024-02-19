"use client";
import React from "react";
import Image from "next/image";
import Preloader from "@/components/Preloader/preloader";
import Landing from "@/components/Landing/landing";
import { Separator } from "@radix-ui/react-separator";
import SponsorInfinite from "@/components/SponsorLogoMoving/SponsorInfinite";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Landing />
      <Separator className="my-6 w-full mx-auto bg-white p-[0.05rem] mt-4" />
      <div className="flex flex-col items-center w-full overflow-hidden">
        <h1 className="font-mono text-4xl mb-8">Meet our Sponsors!</h1>
        <SponsorInfinite />
      </div>
      <Separator className="my-6 w-full mx-auto bg-white p-[0.05rem] mt-4" />
      <div className="flex flex-col items-center w-full">
        <h1 className="font-fancy pb-8 text-3xl">Key Events</h1>
        <div className="flex flex-col w-full justify-center items-center gap-8">

          <div className="lg:w-1/2 w-[90%] flex flex-col lg:flex-row items-center gap-8 border-2 p-6 rounded-lg border-zinc-600 bg-zinc-800">
            <div className="rounded-xl">
              <Image
                src="/images/Posters/RoboArena.png"
                width={190}
                height={300}
                alt="poster"
              />
            </div>
            <div className="w-full gap-8 flex flex-col items-center">
              <h1 className="text-2xl font-transformer underline tracking-widest">
                RoboArena
              </h1>
              <p className="text-sm text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maiores doloremque tenetur temporibus similique accusantium id
                sit a, nihil corrupti vitae provident incidunt obcaecati itaque
                reiciendis omnis, illo qui facilis dolore commodi, eum
                laboriosam fugiat nam? Eaque, sed!
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 w-[90%] flex lg:flex-row flex-col-reverse items-center gap-8 border-2 p-6 rounded-lg border-zinc-600 bg-zinc-800">
            <div className="w-full gap-8 flex flex-col items-center">
              <h1 className="text-2xl font-transformer underline tracking-widest">
                RoboArena
              </h1>
              <p className="text-sm text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maiores doloremque tenetur temporibus similique accusantium id
                sit a, nihil corrupti vitae provident incidunt obcaecati itaque
                reiciendis omnis, illo qui facilis dolore commodi, eum
                laboriosam fugiat nam? Eaque, sed!
              </p>
            </div>
            <div className="rounded-xl">
              <Image
                src="/images/Posters/RoboArena.png"
                width={190}
                height={300}
                alt="poster"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
