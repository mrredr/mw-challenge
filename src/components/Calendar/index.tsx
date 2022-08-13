import FullCalendar, { EventSourceInput } from "@fullcalendar/react";
import React, { useEffect, useState } from "react";
import { EventType } from "../../types/event";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

type Props = {
  events: EventType[] | undefined;
};

export default function Calendar({ events }: Props) {
  const [calendarEvents, setCalendarEvents] = useState([]);

  useEffect(() => {
    setCalendarEvents(
      events.map((event) => {
        return {
          id: event.id,
          title: event.title,
          start: event.start_time,
          end: event.end_time,
          color: "red", //@todo: bonus! Change color based on status!
        };
      })
    );
  }, [events]);

  return (
    <div>
      <h1>Calendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={calendarEvents as EventSourceInput}
      />
    </div>
  );
}
