import React from 'react'
import eventList from '@/components/eventsjson/events.json'
import { notFound } from 'next/navigation'

export async function generateStatic() {
    return eventList.map((p)=>({
        eventName : p.Wname,
    }))
}

const page = ({params : {eventName}}:{params:{eventName : string}}) => {
    const event = eventList.find(p=>p.Wname === eventName)
    if(!event){
        return notFound();
    }
 
    return (
    <div className='pt-10'>page</div>
  )
}

export default page