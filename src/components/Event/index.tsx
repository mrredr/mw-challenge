import { Button, Card, Popconfirm, Space } from "antd";
import { useDispatch } from "react-redux";
import { STATUS_COLOR } from "../../constants/statusColors";
import { deleteEvent } from "../../redux/events/actions";
import { EventType } from "../../types/event";

type Props = {
  event: EventType;
};

export default function Event({ event }: Props) {
  const dispatch = useDispatch();

  const onDeleteClick = () => {
    dispatch(deleteEvent(event.id));
  };

  return (
    <Card
      title={`${event.title} - ${event.status}`}
      extra={
        <Space direction="horizontal">
          <Popconfirm placement="left" title={"Are you sure want to delete this event?"} onConfirm={onDeleteClick} okText="Yes" cancelText="No">
            <Button type="link" style={{color: 'red'}}>Delete</Button>
          </Popconfirm>
        </Space>
      }
      headStyle={{background: STATUS_COLOR[event.status]}}
    >
      <ul>
        <li>
          <b>Address:</b> {event.address}
        </li>
        <li>
          <b>Start date:</b> {new Date(event.start_time).toLocaleString()}
        </li>
        <li>
          <b>End date:</b> {new Date(event.end_time).toLocaleString()}
        </li>
      </ul>
    </Card>
  );
}
