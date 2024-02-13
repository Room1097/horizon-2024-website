import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div>
        {["Home", "About", "Guests", "Sponsors", "Team", "Events" , "Contact"].map((item, index) => {
            return(
                <Link key={index} href={index !== 0 ? `/${item.toLowerCase()}` : '/'}>
                    {item}
                </Link>
            )
        })}
    </div>
  )
}

export default Navbar
