import SponsorCard from '@/components/Sponsor Card/sponsorCard'
import React from 'react'

const Sponsors = () => {
  return (
    <div className='pt-20 w-screen'>
      <h1 className='text-4xl font-primary w-screen text-center'>Sponsors</h1>
      <div className='flex flex-wrap gap-6 justify-center'>
      <SponsorCard img='https://logowik.com/content/uploads/images/wolfram-corporate6412.logowik.com.webp' title='Title' name='Wolfram'/>
      <SponsorCard img='https://logowik.com/content/uploads/images/wolfram-corporate6412.logowik.com.webp' title='Ecosystem' name='Wolfram'/>
      <SponsorCard img='https://logowik.com/content/uploads/images/wolfram-corporate6412.logowik.com.webp' title='Logistics' name='Wolfram'/>
      <SponsorCard img='https://logowik.com/content/uploads/images/wolfram-corporate6412.logowik.com.webp' title='Title' name='Wolfram'/>
      </div>
    </div>
  )
}

export default Sponsors
