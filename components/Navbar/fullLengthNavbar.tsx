import React from 'react'
import Link from 'next/link'

const FullLengthNavbar = () => {
  return (
    <div className='flex gap-8 text-lg'>
        {["Home", "About", "Guests", "Sponsors", "Team", "Events", "Contact"].map((item, index) => (
            <Link key={index} href={index !== 0 ? `/${item.toLowerCase()}` : '/'}>
                {item}
            </Link>
        ))}
    </div>
  )
}

export default FullLengthNavbar
