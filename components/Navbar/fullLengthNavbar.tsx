import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

const FullLengthNavbar = () => {

  useEffect(() => {
    gsap.fromTo(".links" ,{
      opacity: 0,
      x: "-50px",
    },{
      opacity: 1,
      x: "0px",
      duration: 0.5,
      stagger: 0.5,
    })

  }, []);

  return (
    <div className='flex gap-8 text-lg links' >
      {["Home", "About", "Guests", "Sponsors", "Team", "Events", "Contact"].map((item, index) => (
        <Link key={index} href={index !== 0 ? `/${item.toLowerCase()}` : '/'} passHref>
          <div>{item}</div>
        </Link>
      ))}
    </div>
  );
};

export default FullLengthNavbar;
