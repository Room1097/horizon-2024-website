import React from 'react'
import SponsorCard from '@/components/Sponsor Card/sponsorCard'
import EventCard from '@/components/EventCard/EventCard'
import { Separator } from '@/components/ui/separator'

const page = () => {
  return (
    <div className='w-screen pt-10'>
      <div className='flex flex-col justify-center items-center  '>
        <h1 className='text-5xl'>Events</h1>
        <Separator className='mt-9 w-[80%] bg-white'/>
      </div>

    <div className='flex flex-wrap gap-8 justify-center p-10'>
      <EventCard
       name='Code Voyage'
       img='https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
       eventDate='25 Feb - 26 Feb'
       regDate='20 Feb'
       organizingClub='Coding club'
       accent='orange'
       
       ></EventCard>
      <EventCard
       name='Code Voyage'
       img='https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
       eventDate='25 Feb - 26 Feb'
       regDate='20 Feb'
       organizingClub='Coding club'
       accent='orange'
       
       ></EventCard>
      <EventCard
       name='Code Voyage'
       img='https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
       eventDate='25 Feb - 26 Feb'
       regDate='20 Feb'
       organizingClub='Coding club'
       accent='orange'
       
       ></EventCard>
      <EventCard
       name='Code Voyage'
       img='https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
       eventDate='25 Feb - 26 Feb'
       regDate='20 Feb'
       organizingClub='Coding club'
       accent='orange'
       
       ></EventCard>
      <EventCard
       name='Code Voyage'
       img='https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
       eventDate='25 Feb - 26 Feb'
       regDate='20 Feb'
       organizingClub='Coding club'
       accent='orange'
       
       ></EventCard>
      <EventCard
       name='Code Voyage'
       img='https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
       eventDate='25 Feb - 26 Feb'
       regDate='20 Feb'
       organizingClub='Coding club'
       accent='orange'
       
       ></EventCard>
      <EventCard
       name='Code Voyage'
       img='https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
       eventDate='25 Feb - 26 Feb'
       regDate='20 Feb'
       organizingClub='Coding club'
       accent='orange'
       
       ></EventCard>
    </div>
       </div>
  )
}

export default page
