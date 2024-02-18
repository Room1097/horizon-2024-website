import SponsorCard from '@/components/SponsorCard/sponsorCard'
import React from 'react'

const Sponsors = () => {
  return (
    <div className='pt-20 w-full'>
      <h1 className='text-4xl font-mono w-full pb-7 text-center'>Sponsors</h1>
      <div className='flex flex-wrap gap-y-10 gap-x-10 justify-evenly  lg:ml-0 '>
        <SponsorCard img='https://logowik.com/content/uploads/images/wolfram-corporate6412.logowik.com.webp' title='Title' name='Wolfram'/>
      </div>
    </div>
  )
}

export default Sponsors
