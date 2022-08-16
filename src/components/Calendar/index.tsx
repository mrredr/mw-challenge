import { useEffect, useState } from "react";
import FullCalendar, { EventSourceInput } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { EventType } from "../../types/event";
import { STATUS_COLOR } from "../../constants/statusColors";
import { useDispatch } from "react-redux";
import { setShowModal } from "../../redux/modal/actions";

type Props = {
  events: EventType[] | undefined;
};

export default function Calendar({ events }: Props) {
  const [calendarEvents, setCalendarEvents] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setCalendarEvents(
      events.map((event) => {
        return {
          id: event.id,
          title: event.title,
          start: event.start_time,
          end: event.end_time,
          color: STATUS_COLOR[event.status],
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
        eventClick={(e) => dispatch(setShowModal(Number(e.event.id)))}
      />
    </div>
  );
}
