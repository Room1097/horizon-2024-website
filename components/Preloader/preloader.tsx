"use client";
import React, { useEffect } from "react";
import { preLoaderAnim } from "../Animation/preloader";

const Preloader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader h-screen w-full fixed right-0 bottom-0 left-0 z-[55] bg-black flex justify-center items-center overflow-hidden">
      <div className="texts-container flex items-center gap-20 justify-center h-[60px] w-full overflow-hidden font-extrabold">
        <span className="text-2xl">Step.</span>
        <span className="text-2xl">Into.</span>
        <span className="text-2xl">Horizon.</span>
      </div>
    </div>
  );
};

export default Preloader;
