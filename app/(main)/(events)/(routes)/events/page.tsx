import React from 'react'
import EventCard from '@/components/EventCard/EventCard'
import { Separator } from '@/components/ui/separator'
import events from '@/components/eventsjson/events.json'
import Link from 'next/link'

// ... (your imports remain the same)

const Page = () => {
  return (
    <div className='w-screen pt-20'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-5xl'>Events</h1>
        <Separator className='mt-9 w-[80%] bg-white'/>
      </div>

      <div className='grid grid-cols-3 gap-8 items-center pl-32 pt-10'>
        {events.map((event, index) => (
          <div className={index % 2 ? `col-span-2 col-start-2` : `col-span-2 col-start-1`} key={index}>
            <Link key={event.Wname} href={`/events/${event.Wname}`}>
              <EventCard
                name={event.name}
                img={event.img}
                eventDate={event.eventDate}
                regDate={event.regDate}
                organizingClub={event.organizingClub}
                accent={event.accent}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
