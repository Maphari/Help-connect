import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const localizer = momentLocalizer(moment);

interface IAccessor {
  title: string;
  start: Date;
  end: Date;
}

const events: IAccessor[] = [
  {
    title: "Event 1",
    start: new Date(2023, 9, 25),
    end: new Date(2023, 9, 25),
  },
  {
    title: "Event 2",
    start: new Date(2023, 9, 27),
    end: new Date(2023, 9, 27),
  },
];
const currentDate: Date = new Date();
const endDate: Date = new Date(currentDate);

endDate.setDate(endDate.getDate() + 30);

export const DisplayCalendar: React.FC = () => {

  return (
    <>
      <Calendar
        localizer={localizer}
        events={events}
        views={['month', 'week']}
        startAccessor={(events: IAccessor) => new Date(events["start"])}
        endAccessor={(events: IAccessor) => new Date(events["end"])}
        defaultDate={currentDate}
        defaultView={"month"}
        // min={currentDate}
        // max={endDate}
        toolbar={true}
      />
    </>
  );
};
