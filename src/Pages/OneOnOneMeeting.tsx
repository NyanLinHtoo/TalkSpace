import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, DatePickerProps, Flex, Form } from "antd";
import useAuth from "../hooks/useAuth";
import useFetchUsers from "../hooks/useFetchUsers";
import Header from "../components/Header";
import MeetingNameField from "../components/FormComponent/MeetingNameField";
import MeetingUserField from "../components/FormComponent/MeetingUserField";
import MeetingDateField from "../components/FormComponent/MeetingDateField";
import { MeetingFormValues } from "../utils/Types";
import "../App.css";
import dayjs from "dayjs";

const OneOnOneMeeting: React.FC = () => {
  const [form] = Form.useForm<MeetingFormValues>();
  const [users] = useFetchUsers();
  const navigate = useNavigate();

  useAuth();

  const onUserChange = (value: string) => {
    form.setFieldsValue({ invitedUser: value });
  };

  const onDateChange: DatePickerProps["onChange"] = (date) => {
    if (date) {
      form.setFieldsValue({ meetingDate: dayjs(date).format("DD/MM/YYYY") });
    } else {
      form.setFieldsValue({ meetingDate: undefined });
    }
  };

  const onFinish = (values: MeetingFormValues) => {
    console.log("Success:", values);
    // Here you would typically send the data to your backend
  };

  return (
    <>
      <Header />
      <div className="form-container">
        <Form
          form={form}
          name="oneOnOneMeeting"
          layout="vertical"
          onFinish={onFinish}>
          <Form.Item
            name="meetingName"
            rules={[
              { required: true, message: "Please enter a meeting name" },
            ]}>
            <MeetingNameField placeholder="Meeting Name" title="Meeting Name" />
          </Form.Item>

          <Form.Item
            name="invitedUser"
            rules={[{ required: true, message: "Please select a user" }]}>
            <MeetingUserField
              title="Invite User"
              options={users}
              onChange={onUserChange}
            />
          </Form.Item>

          <Form.Item
            name="meetingDate"
            rules={[
              {
                required: true,
                message: "Please select a date",
                validator: (_, value) => {
                  if (!value) {
                    return Promise.reject("Please select a date");
                  }
                  return Promise.resolve();
                },
              },
            ]}>
            <MeetingDateField onChange={onDateChange} />
          </Form.Item>

          <Form.Item>
            <Flex gap="middle" align="center" justify="space-between">
              <Button
                danger
                type="primary"
                block
                onClick={() => navigate("/create")}>
                Cancel
              </Button>
              <Button htmlType="submit" type="primary" block>
                Submit
              </Button>
            </Flex>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default OneOnOneMeeting;
