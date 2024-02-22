import React from "react";
import {
  FaXTwitter,
} from "react-icons/fa6";
import { FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import ContactForm from "@/components/ContactForm/contactform";

const page = () => {
  return (
    <div className="pt-20 flex flex-col justify-center gap-12 items-center">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-5xl font-secondary">Contact Us</h1>
        <h3 className="text-lg text-zinc-400 text-center px-48">
          Fill out the Form if there are any queries in particular you would
          want to Discuss About. Someone from the team would respond you within
          2-3 Working Days.
        </h3>
      </div>
      <div className="w-[90vw] px-4 h-[80vh] rounded-lg bg-zinc-800 grid grid-cols-3 gap-4">
        <div className="bg-zinc-600 rounded-lg my-4 h-[96%] flex flex-col justify-between py-20">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl text-center font-transformer tracking-wider">
              Contact the Technical Committee
            </h1>
            <h3 className="text-center text-zinc-300">
              Facing any Issue? Tell us how can we help you.
            </h3>
          </div>
          <div className="flex flex-col gap-4 text-lg">
            <h1 className="text-2xl text-center font-transformer tracking-wider">
              Connect With US!
            </h1>

            <div className="flex flex-col items-start gap-3 mx-4 text-zinc-300">
              <a
                href=""
                target="_blank"
                className="flex justify-center items-center gap-2 cursor-pointer"
              >
                <FaXTwitter /> Official Twitter of IIIT Vadodara.
              </a>
              <a
                href=""
                target="_blank"
                className="flex justify-center items-center gap-2"
              >
                <FaFacebook /> Official FaceBook of IIIT Vadodara.
              </a>
              <a
                href=""
                target="_blank"
                className="flex justify-center items-center gap-2"
              >
                <FaInstagram />
                Instagram for Technical Committee.
              </a>
              <a
                href=""
                target="_blank"
                className="flex justify-center items-center gap-2"
              >
                <FaLinkedin /> LinkedIN Page for Technical Committee
              </a>
              <a
                href=""
                target="_blank"
                className="flex justify-center items-center gap-2"
              >
                <FaWhatsapp />
                Join updates Group for HORIZON.
              </a>
              <a
                href=""
                target="_blank"
                className="flex justify-center items-center gap-2"
              >
                <IoMdMail /> Email Technical Committee
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-2 rounded-lg flex justify-center items-center bg-zinc-900 h-[96%] my-4">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default page;
