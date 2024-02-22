import React from "react";

interface TimelineEventProps {
  title: string;
  startTime: string;
  endTime: string;
}

interface TimelineElementProps {
  date: string;
  events: TimelineEventProps[];
}

const tlDb = [
  {
    date: "24th February",
    events: [
      {
        title: "Coding Contest Mock-1",
        startTime: "10:00 Am",
        endTime: "12:00 PM"
      },
      {
        title: "RoboArena",
        startTime: "1:30 PM",
        endTime: "6:00 PM"
      },
      {
        title: "Inauguration Ceremony",
        startTime: "6:00 PM",
        endTime: "8:00 PM"
      },
    ]
  },
  {
    date: "25th February",
    events: [
      {
        title: "Code Voyage Round-1",
        startTime: "10:00 AM",
        endTime: "12:00 PM"
      },
      {
        title: "Scenario Showdown Round-1",
        startTime: "2:00 PM",
        endTime: "5:00 PM"
      }
    ]
  },
  {
    date: "26th February",
    events: [
      {
        title: "Frontend Workshop",
        startTime: "6:00 PM",
        endTime: "8:00 PM"
      }
    ]
  },
  {
    date: "27th February",
    events: [
      {
        title: "Introduction to Figma",
        startTime: "6:00 PM",
        endTime: "8:00 PM"
      }
    ]
  },
  {
    date: "28th February",
    events: [
      {
        title: "Frontend Workshop 2",
        startTime: "6:00 PM",
        endTime: "8:00 PM"
      }
    ]
  },
  {
    date: "29th February",
    events: [
      {
        title: "Coding Contest Mock-2",
        startTime: "6:00 PM",
        endTime: "8:00 PM"
      }
    ]
  },
  {
    date: "1st March",
    events: [
      {
        title: "Frontend Workshop 3",
        startTime: "6:00 PM",
        endTime: "8:00 PM"
      }
    ]
  },
  {
    date: "2nd  March",
    events: [
      {
        title: "Scenario Showdown Round-2",
        startTime: "2:00 PM",
        endTime: "5:00 PM"
      },
      {
        title: "Finance Speaker Session",
        startTime: "6:00 PM",
        endTime: "8:00 PM"
      }
    ]
  },
  {
    date: "3rd  March",
    events: [
      {
        title: "Code Voyage Round-2",
        startTime: "10:00 AM",
        endTime: "1:00 PM"
      },
      {
        title: "Gaming Event Finale",
        startTime: "2:00 PM",
        endTime: "5:00 PM"
      },
      {
        title: "Hackathon Finals",
        startTime: "6:00 PM",
        endTime: "8:00 PM"
      },
    ]
  },
];

const TimelineEvent: React.FC<TimelineEventProps> = ({ title, startTime, endTime }) => (
  <div>
    <h3 className="timeline-title">{title}</h3>
    <div className="flex flex-col text-gray-400">
      <h5>Start Time: {startTime}</h5>
      <h5>End Time: {endTime}</h5>
    </div>
  </div>
);

const TimelineElement: React.FC<TimelineElementProps> = ({ date, events }) => (
  <div className="relative flex flex-col gap-4">
    <div className="dot"></div>
    <div className="ml-10 border-zinc-800 bg-zinc-900 border-2 p-4 rounded-xl mr-8">
      <span className="timeline-date">{date}</span>
      <div className="flex flex-col sm:flex-row gap-20">
        {events.map((event, index) => (
          <TimelineEvent
            key={index}
            title={event.title}
            startTime={event.startTime}
            endTime={event.endTime}
          />
        ))}
      </div>
    </div>
  </div>
);

const VerticalTimeline = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-20">
      <section>
        <div className="top-0 bg-zinc-800 py-3 mb-8 z-10 shadow-xl shadow-zinc-700">
          <h2 className="group-date font-primary text-center">Horizon 24'</h2>
        </div>
        <div className="timeline">
          {tlDb.map((item, index) => (
            <TimelineElement key={index} date={item.date} events={item.events} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default VerticalTimeline;