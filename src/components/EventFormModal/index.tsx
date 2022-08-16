import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Popconfirm,
  Select,
  TimePicker,
} from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";

import { getNewId, selectedEventSelector } from "../../redux/events/selectors";
import { useSelector } from "../../redux/hooks";
import { setHideModal } from "../../redux/modal/actions";
import { createEvent, deleteEvent, updateEvent } from "../../redux/events/actions";

const joinDateAndTime = (date, time) => {
  return `${date.format("YYYY-MM-DD")}${time.format("THH:mm:ssZ")}`;
};

const maptEventToSave = (formEvent) => {
  return {
    title: formEvent.title,
    address: formEvent.address,
    status: formEvent.status,
    start_time: joinDateAndTime(
      formEvent.start_date_date,
      formEvent.start_date_time
    ),
    end_time: joinDateAndTime(formEvent.end_date_date, formEvent.end_date_time),
  };
};

const mapEventToForm = (selectedEvent) => ({
  title: selectedEvent?.title || "",
  address: selectedEvent?.address || "",
  start_date_date: moment(new Date(selectedEvent?.start_time || new Date())),
  start_date_time: moment(new Date(selectedEvent?.start_time || new Date())),
  end_date_date: moment(new Date(selectedEvent?.end_time || new Date())),
  end_date_time: moment(new Date(selectedEvent?.end_time || new Date())),
  status: selectedEvent?.status || "in-progress",
});

export const EventFormModal: React.FC = () => {
  const dispatch = useDispatch();
  const isModalVisible = useSelector(({ modal }) => modal.visible);
  const selectedEvent = useSelector(selectedEventSelector);
  const newId = useSelector(getNewId);
  const [form] = Form.useForm();

  let initalValue = mapEventToForm(selectedEvent);

  useEffect(() => {
    initalValue = mapEventToForm(selectedEvent);
    form.resetFields();
  }, [isModalVisible]);

  const onFinish = (args) => {
    const event = maptEventToSave(args);
    event["id"] = selectedEvent?.id || newId;
    if (selectedEvent) {
      dispatch(updateEvent(event));
    } else {
      dispatch(createEvent(event));
    }
    dispatch(setHideModal());
  };

  const onDeleteClick = () => {
    dispatch(deleteEvent(selectedEvent.id));
    dispatch(setHideModal());
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={() => dispatch(setHideModal())}
        onOk={null}
        footer={<></>}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          form={form}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input event title!" }]}
            initialValue={initalValue.title}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please input event address!" }]}
            initialValue={initalValue.address}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Start date & time" style={{ marginBottom: 0 }}>
            <Form.Item
              name="start_date_date"
              rules={[
                { required: true, message: "Please input event start date!" },
              ]}
              initialValue={initalValue.start_date_date}
              style={{ display: "inline-block", width: "calc(50% - 12px)" }}
            >
              <DatePicker />
            </Form.Item>

            <Form.Item
              name="start_date_time"
              rules={[
                { required: true, message: "Please input event start time!" },
              ]}
              initialValue={initalValue.start_date_time}
              style={{ display: "inline-block", width: "calc(50% - 12px)" }}
            >
              <TimePicker />
            </Form.Item>
          </Form.Item>

          <Form.Item label="End date & time" style={{ marginBottom: 0 }}>
            <Form.Item
              name="end_date_date"
              rules={[
                { required: true, message: "Please input event end date!" },
              ]}
              initialValue={initalValue.end_date_date}
              style={{ display: "inline-block", width: "calc(50% - 12px)" }}
            >
              <DatePicker />
            </Form.Item>

            <Form.Item
              name="end_date_time"
              rules={[
                { required: true, message: "Please input event end time!" },
              ]}
              initialValue={initalValue.end_date_time}
              style={{ display: "inline-block", width: "calc(50% - 12px)" }}
            >
              <TimePicker />
            </Form.Item>
          </Form.Item>

          <Form.Item
            label="Status"
            name="status"
            rules={[{ required: true, message: "Please input event status!" }]}
            initialValue={initalValue.status}
          >
            <Select>
              {/* TODO:: use constants  */}
              <Select.Option value="done">Done</Select.Option>
              <Select.Option value="pending">Pending</Select.Option>
              <Select.Option value="in-progress">In progress</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              {selectedEvent ? "Save" : "Create"}
            </Button>
            {selectedEvent && (
              <Popconfirm
                placement="left"
                title={"Are you sure want to delete this event?"}
                onConfirm={onDeleteClick}
                okText="Yes"
                cancelText="No"
              >
                <Button type="default">Delete</Button>
              </Popconfirm>
            )}
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
