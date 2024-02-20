import React from "react";

interface TimelineEventProps {
  title: string;
  startTime: string;
  endTime: string;
}

interface TimelineElementProps {
  date: string;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ title, startTime, endTime }) => (
  <div>
    <h3 className="timeline-title">{title}</h3>
    <div className="flex flex-col text-gray-400">
      <h5>Start Time: {startTime}</h5>
      <h5>End Time: {endTime}</h5>
    </div>
  </div>
);

const TimelineElement: React.FC<TimelineElementProps> = ({ date }) => {
  return (
    <div className="relative flex flex-col gap-4">
      <div className="dot"></div>
      <div className="ml-10 border-zinc-800 bg-zinc-900 border-2 p-4 rounded-xl">
        <span className="timeline-date">{date}</span>
        <div className="flex gap-20">
          <TimelineEvent
            title="Event 1"
            startTime="10:00 AM"
            endTime="12:00 PM"
          />
          <TimelineEvent
            title="Event 2"
            startTime="2:00 PM"
            endTime="5:00 PM"
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
          <TimelineElement date="24th February" />
          <TimelineElement date="25th February" />
        </div>
      </section>
    </div>
  );
};

export default VerticalTimeline;
