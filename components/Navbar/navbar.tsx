"use client"
import React, { useState, useRef, useEffect } from 'react';
import FullLengthNavbar from './fullLengthNavbar';

function Navbar() {
    const [navToggle, setNavToggle] = useState(false);
    const Nav = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setNavToggle(false); 
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='flex justify-between items-start w-full lg:px-16  lg:py-2 fixed z-30 '>
            <h1 className='p-2'>HORIZON</h1>
            <div className='flex gap-8 text-lg' ref={Nav}>
                {navToggle ? (
                    <FullLengthNavbar />
                ) : (
                    <div className="hover:cursor-pointer p-2" onClick={() => setNavToggle(true)}>Menu</div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
