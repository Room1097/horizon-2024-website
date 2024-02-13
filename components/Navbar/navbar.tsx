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
        <div className='flex justify-between items-center w-full px-16 py-2'>
            <h1>HORIZON 24'</h1>
            <div className='flex gap-8 text-lg' ref={Nav}>
                {navToggle ? (
                    <FullLengthNavbar />
                ) : (
                    <div className="hover:cursor-pointer" onClick={() => setNavToggle(true)}>Menu</div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
