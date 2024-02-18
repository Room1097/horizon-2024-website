import SponsorCard from '@/components/Sponsor Card/sponsorCard'
import React from 'react'

const Sponsors = () => {
  return (
    <div className='pt-20 w-full'>
      <h1 className='text-4xl font-primary bordear-2 w-full pb-7 text-center'>Sponsors</h1>
      <div className='flex flex-wrap gap-y-10 gap-x-10 justify-evenly  lg:ml-0 '>
      <SponsorCard img='https://logowik.com/content/uploads/images/wolfram-corporate6412.logowik.com.webp' title='Title' name='Wolfram'/>
      <SponsorCard img='https://logowik.com/content/uploads/images/wolfram-corporate6412.logowik.com.webp' title='Ecosystem' name='Wolfram'/>
      <SponsorCard img='https://logowik.com/content/uploads/images/wolfram-corporate6412.logowik.com.webp' title='Logistics' name='Wolfram'/>
      <SponsorCard img='https://logowik.com/content/uploads/images/wolfram-corporate6412.logowik.com.webp' title='Title' name='Wolfram'/>
      <SponsorCard img='https://logowik.com/content/uploads/images/wolfram-corporate6412.logowik.com.webp' title='Title' name='Wolfram'/>
      <SponsorCard img='https://logowik.com/content/uploads/images/wolfram-corporate6412.logowik.com.webp' title='Media' name='Wolfram'/>
      </div>
    </div>
  )
}

export default Sponsors
