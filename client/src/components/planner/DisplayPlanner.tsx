import { FC } from "react";
import { Calendar, DateLocalizer, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const localizer: DateLocalizer = momentLocalizer(moment);

interface IEvents {
  title: string;
  start: Date;
  end: Date;
}

export const DisplayPlanner: FC = () => {
  const currentDate: Date = new Date();
  const endDate: Date = new Date(currentDate);
  endDate.setDate(endDate.getDate() + 30); // Add 30 days to the start date

  const events: IEvents[] = [
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

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        views={["month", "agenda"]} // Display only the month view
        defaultDate={currentDate} // Set the initial date
        defaultView={"month"} // Set the default view to month
        min={currentDate} // Set the minimum date to the start date
        max={endDate} // Set the maximum date to 30 days from the start date
        style={{ height: "550px" }}
      />
    </div>
  );
};
