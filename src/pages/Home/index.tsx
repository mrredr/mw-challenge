import React, { useEffect, useState } from "react";
import {
  CalendarContainer,
  EventListContainer,
  HeaderContainer,
  HomeContainer,
} from "./styles";
import EventList from "../../components/EventList";
import Calendar from "../../components/Calendar";
import { useDispatch } from "react-redux";
import { getEvents } from "../../redux/events/events";
import { eventsSelector } from "../../redux/events/selectors";
import { Segmented, Space } from "antd";
import { useSelector } from "../../redux/hooks";

export interface Props {}

enum PageTypes {
  CALENDAR = "Calendar",
  LIST = "Event List",
}

export function HomePage(props: Props) {
  const [page, setPage] = useState<PageTypes>(PageTypes.LIST);

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
      <HeaderContainer>
        <Space direction="vertical">
          <Segmented
            options={[PageTypes.LIST, PageTypes.CALENDAR]}
            onChange={(value: PageTypes) => setPage(value)}
            size="large"
          />
        </Space>
      </HeaderContainer>
      {page === PageTypes.LIST && (
        <EventListContainer>
          <EventList events={events} />
        </EventListContainer>
      )}
      {page === PageTypes.CALENDAR && (
        <CalendarContainer>
          <Calendar events={events} />
        </CalendarContainer>
      )}
    </HomeContainer>
  );
}
