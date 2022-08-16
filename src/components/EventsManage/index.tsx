import { Button, Input, Space } from "antd";
import { useDispatch } from "react-redux";
import { setShowModal } from "../../redux/modal/actions";

const { Search } = Input;

type Props = {
  onFilter: (val: string) => void;
};

export default function EventsManage({ onFilter }: Props) {
  const dispatch = useDispatch();

  return (
    <Space direction="horizontal">
      <Search placeholder="input search text" onSearch={onFilter} enterButton allowClear />
      <Button type="primary" onClick={() => dispatch(setShowModal())}>Create event</Button>
    </Space>
  );
}
