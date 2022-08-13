import React from "react";
import { EventType } from "../../types/event";

type Props = {
  events?: EventType[] | undefined;
};

export default function EventList({ events }: Props) {
  if (!events) {
    return <p>No events.</p>;
  }

  return (
    <div>
      <h1>Event List</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.id} {event.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
