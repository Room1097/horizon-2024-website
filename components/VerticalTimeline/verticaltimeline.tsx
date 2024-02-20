import React from "react";

interface TimelineEventProps {
  title: string;
  startTime: string;
  endTime: string;
}

interface TimelineElementProps {
  date: string;
  event1 : TimelineEventProps;
  event2 : TimelineEventProps;
  event3 ?: TimelineEventProps;
}

const tlDb = [
  {
    date : "24th February",
    event1:{
      title : "Event1",
      startTime : "10:00 am",
      endTime : "12:00 pm"
    },
    event2:{
      title : "Event1",
      startTime : "10:00 am",
      endTime : "12:00 pm"
    },
    event3:{
      title : "Event1",
      startTime : "10:00 am",
      endTime : "12:00 pm"
    }
  },
  {
    date : "25th February",
    event1:{
      title : "Event1",
      startTime : "10:00 am",
      endTime : "12:00 pm"
    },
    event2:{
      title : "Event1",
      startTime : "10:00 am",
      endTime : "12:00 pm"
    }
  }
]

const TimelineEvent: React.FC<TimelineEventProps> = ({ title, startTime, endTime }) => (
  <div>
    <h3 className="timeline-title">{title}</h3>
    <div className="flex flex-col text-gray-400">
      <h5>Start Time: {startTime}</h5>
      <h5>End Time: {endTime}</h5>
    </div>
  </div>
);

const TimelineElement: React.FC<TimelineElementProps> = ({ date,event1,event2,event3 }) => {
  var third = true;
  if(event3 === undefined){third=false;}
  return (
    <div className="relative flex flex-col gap-4">
      <div className="dot"></div>
      <div className="ml-10 border-zinc-800 bg-zinc-900 border-2 p-4 rounded-xl">
        <span className="timeline-date">{date}</span>
        <div className="flex gap-20">
          <TimelineEvent
            title={event1.title}
            startTime={event1.startTime}
            endTime={event1.endTime}
          />
          <TimelineEvent
            title={event2.title}
            startTime={event2.startTime}
            endTime={event2.endTime}
          />
          
        </div>
      </div>
    </div>
  );
};

const VerticalTimeline = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-20">
      <section>
        <div className="sticky top-0 bg-zinc-800 py-3 mb-8 z-10 shadow-xl shadow-zinc-700">
          <h2 className="group-date font-primary text-center">Horizon 24'</h2>
        </div>
        <div className="timeline">
          {tlDb.map((item,index)=><TimelineElement date={item.date} event1={item.event1} event2={item.event2}/>)}
        </div>
      </section>
    </div>
  );
};

export default VerticalTimeline;
