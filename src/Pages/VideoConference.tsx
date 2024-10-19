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
import { generateMeetingId } from "../utils/generateMeetingId";
import { addDoc } from "firebase/firestore";
import { meetingRef } from "../utils/FirebaseConfig";
import { useAppSelector } from "../app/hook";
import { toast } from "sonner";
import MeetingSwitch from "../components/FormComponent/MeetingSwitch";
import { useState } from "react";

const VideoConference = () => {
  const [form] = Form.useForm<MeetingFormValues>();
  const [users] = useFetchUsers();
  const navigate = useNavigate();

  const uid = useAppSelector((state) => state.auth.userInfo?.uid);
  useAuth();

  const [anyoneCanJoin, setAnyoneCanJoin] = useState(false);

  const onSwitchChange = () => {
    setAnyoneCanJoin(!anyoneCanJoin);
  };

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

  const onFinish = async (values: MeetingFormValues) => {
    const meetingId = generateMeetingId();
    await addDoc(meetingRef, {
      createdBy: uid,
      meetingId,
      meetingName: values.meetingName,
      meetingType: "1-on-1",
      invitedUser: values.invitedUser,
      meetingDate: values.meetingDate,
      maxUsers: 1,
      status: true,
    });
    toast.success("One On One Meeting created successfully");
    navigate("/");
  };

  return (
    <>
      <Header />
      <div className="form-container">
        <Form form={form} name="oneOnOneMeeting" onFinish={onFinish}>
          <Form.Item name="anyoneCanJoin">
            <MeetingSwitch title="Anyone can join" onChange={onSwitchChange} />
          </Form.Item>
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
              anyoneCanJoin={anyoneCanJoin}
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
            <Flex
              gap="middle"
              align="center"
              justify="space-between"
              style={{
                marginTop: "8px",
              }}>
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

export default VideoConference;
