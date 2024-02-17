"use client"
import React, { useEffect } from "react";
import Preloader from "../Preloader/preloader";
import { WavyBackground } from "../Wavy Background/background";
import gsap from "gsap";

const Landing = () => {

  useEffect(() => {
    gsap.fromTo("#hero-text", {
      y: 50,
      opacity: 0,
  },{
      delay: 4,
      duration : 1,
      y: 0,
      opacity: 1,
  })
  
  gsap.fromTo("#hero-sub-text", {
      opacity: 0,
  },{
      delay: 5,
      duration:1,
      opacity:1
  })
  }, [])

  return (
    <div className="landing-container">
      <Preloader />
      <WavyBackground className="max-w-4xl mx-auto pb-40 wavy-background">
        <div className="text-center">
          <p
            id="hero-text"
            className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var"
          >
            Horizon 24'
          </p>
          <p
            id="hero-sub-text"
            className="text-base md:text-lg mt-4 text-white font-normal inter-var"
          >
            Welcome to the Technical Festival of IIIT Vadodara - ICD.
          </p>
        </div>
      </WavyBackground>
    </div>
  );
};

export default Landing;
