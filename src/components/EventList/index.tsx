import { FixedSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { EventContainer } from "../../pages/Home/styles";
import { EventType } from "../../types/event";
import Event from "../Event";
import { useSelector } from "../../redux/hooks";
import { Skeleton } from "antd";

type Props = {
  events?: EventType[] | undefined;
};

export default function EventList({ events }: Props) {
  const isLoading = useSelector((state) => state.events.isLoading);

  if (isLoading) {
    return <Skeleton active paragraph={{rows: 10}} style={{ marginTop: '100px' }} />
  }

  if (!events) {
    return <p>No events.</p>;
  }

  const Row = ({ index, style }) => {
    return (
      <EventContainer key={events[index].id} style={style}>
        <Event event={events[index]} />
      </EventContainer>
    );
  };

  return (
    <div>
      <h1>Event List</h1>
      <AutoSizer>
        {({ height, width }) => (
          <FixedSizeList
            width={width}
            height={height}
            itemCount={events.length}
            itemSize={194}
            style={{scrollBehavior: 'smooth'}}
          >
            {Row}
          </FixedSizeList>
        )}
      </AutoSizer>
    </div>
  );
}
