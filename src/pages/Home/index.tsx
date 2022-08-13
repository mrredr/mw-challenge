import React, { useEffect } from "react";
import { CalendarContainer, EventListContainer, HomeContainer } from "./styles";
import EventList from "../../components/EventList";
import Calendar from "../../components/Calendar";
import { useDispatch, useSelector } from "react-redux";
import { eventsSelector } from "../../redux/events/selectors";
import { getEvents } from "../../redux/events/events";

export interface Props {}

export function HomePage(props: Props) {
  const events = useSelector(eventsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  if (!events) {
    return <p>Loading...</p>;
  }

  return (
    <HomeContainer>
      <EventListContainer>
        <EventList events={events} />
      </EventListContainer>
      <CalendarContainer>
        <Calendar events={events} />
      </CalendarContainer>
    </HomeContainer>
  );
}
