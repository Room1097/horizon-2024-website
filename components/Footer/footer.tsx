import React from "react";
import { FaInstagram, FaWhatsapp, FaRegCalendarAlt} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { CiLinkedin, CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-20 justify-around items-center pb-8">
      <div className="flex flex-col justify-center gap-8 items-center ">
      <img src="/images/H_logo_.svg" className="w-[8rem]" alt="" />
        <ul className="flex gap-4 w-[24rem] text-xl flex-wrap items-center justify-center">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/guests">Guest</a>
          </li>
          <li>
            <a href="/sponsors">Sponsor</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="/team">Team</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-around gap-4 text-xl">
        <p className="flex justify-start items-center gap-2"><span className="bg-zinc-700 border-2 border-zinc-500 rounded-full p-4"><FaLocationDot /> </span>IIIT Vadodara - ICD</p>
        <p className="flex justify-start items-center gap-2 "><span className="bg-zinc-700 border-2 border-zinc-500 rounded-full p-4"><a href="mailto:technical@diu.iiitvadodara.ac.in"><IoMdMail /></a></span> <a href="mailto:technical@diu.iiitvadodara.ac.in">Contact Us</a></p>
        <p className="flex justify-start items-center gap-2"><span className="bg-zinc-700 border-2 border-zinc-500 rounded-full p-4"><FaRegCalendarAlt /></span> 24th Feb 2024</p>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="font-primary text-xl tracking-wider text-zinc-100">Horizon</h1>
        <p className="lg:w-[32rem] lg:text-left px-4 text-center text-zinc-400">Horizon is the annual Technical Festival of IIIT Vadodara, International Campus Diu. It is organized by the Technical Committee of IIITV - ICD and its clubs.</p>
        <ul className="flex gap-8 text-zinc-400">
          <li className="hover:translate-y-[-6px] duration-300 text-4xl">
            {" "}
            <a href="">
              {" "}
              <FaInstagram />{" "}
            </a>
          </li>
          <li className="hover:translate-y-[-6px] duration-300 text-4xl">
            {" "}
            <a href="">
              {" "}
              <CiMail />{" "}
            </a>
          </li>
          <li className="hover:translate-y-[-6px] duration-300 text-4xl">
            {" "}
            <a href="">
              {" "}
              <FaWhatsapp />{" "}
            </a>
          </li>
          <li className="hover:translate-y-[-6px] duration-300 text-4xl">
            {" "}
            <a href="">
              <CiLinkedin />{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
