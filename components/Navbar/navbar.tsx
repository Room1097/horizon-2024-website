"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

function Navbar() {

    const [navToggle, setNavToggle] = useState(false);

    return (
        <div className='flex justify-between items-center w-full px-16 py-2'>
            <h1>
                HORIZON 24'
            </h1>
            <div className='flex gap-8 text-lg'>
                {navToggle ? (
                    ["Home", "About", "Guests", "Sponsors", "Team", "Events", "Contact"].map((item, index) => (
                        <Link key={index} href={index !== 0 ? `/${item.toLowerCase()}` : '/'}>
                            {item}
                        </Link>
                    ))
                ) : (
                    <div onClick={() => setNavToggle(true)}>Menu</div>
                )}
            </div>
        </div>
    )
}

export default Navbar
