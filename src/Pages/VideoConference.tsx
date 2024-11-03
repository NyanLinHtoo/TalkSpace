import { useNavigate } from "react-router-dom";
import { Button, DatePickerProps, Flex, Form } from "antd";
import useAuth from "../hooks/useAuth";
import useFetchUsers from "../hooks/useFetchUsers";
import Header from "../components/Header";
import MeetingNameField from "../components/FormComponent/MeetingNameField";
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
import MeetingMultipleUser from "../components/FormComponent/MeetingMultipleUser";

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

  const onUserChange = (value: string | number | null) => {
    form.setFieldsValue({
      invitedUser: value !== null ? String(value) : undefined,
    });
  };

  const onDateChange: DatePickerProps["onChange"] = (date) => {
    if (date) {
      form.setFieldsValue({ meetingDate: dayjs(date).format("DD/MM/YYYY") });
    } else {
      form.setFieldsValue({ meetingDate: undefined });
    }
  };

  const onFinish = async (values: MeetingFormValues) => {
    console.log(values);

    const meetingId = generateMeetingId();
    await addDoc(meetingRef, {
      createdBy: uid,
      meetingId,
      meetingName: values.meetingName,
      meetingType: anyoneCanJoin ? "Anyone-can-join" : "Video-Conference",
      invitedUser: anyoneCanJoin ? [] : values.invitedUser,
      meetingDate: values.meetingDate,
      maxUsers: anyoneCanJoin ? +values.invitedUser : values.invitedUser.length,
      status: true,
    });
    toast.success(
      anyoneCanJoin
        ? "Anyone can join meeting created successfully"
        : "Video Conference created successfully"
    );
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
            <MeetingMultipleUser
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
