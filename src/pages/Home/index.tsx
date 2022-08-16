import React, { useEffect, useState } from "react";
import { Segmented, Space } from "antd";
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
import EventsManage from "../../components/EventsManage";
import { setSearch } from "../../redux/search/events";
import { filtredEventsSelector } from "../../redux/events/selectors";
import { useSelector } from "../../redux/hooks";

export interface Props {}

enum PageTypes {
  CALENDAR = "Calendar",
  LIST = "Event List",
}

export function HomePage(props: Props) {
  const [page, setPage] = useState<PageTypes>(PageTypes.LIST);

  const events = useSelector(filtredEventsSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  const setSearchValue = (value) => {
    dispatch(setSearch(value));
  };

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
          <EventsManage onFilter={setSearchValue} />
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
