import useAuth from "../hooks/useAuth";
import Header from "../components/Header";
import "../App.css";
import MeetingNameField from "../components/FormComponent/MeetingNameField";
import MeetingUserField from "../components/FormComponent/MeetingUserField";
import { Form } from "antd";
import { useState } from "react";
import useFetchUsers from "../hooks/useFetchUsers";

const OneOnOneMeeting = () => {
  const [meetingName, setMeetingName] = useState("");
  const [users] = useFetchUsers();

  useAuth();

  const onUserChange = () => {};

  return (
    <>
      <Header />
      <div className="form-container">
        <Form
          name="basic"
          layout="vertical"
          // style={{ maxWidth: 600 }}
          // initialValues={{ remember: true }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          // autoComplete="off"
        >
          <Form.Item>
            <MeetingNameField
              placeholder="Meeting Name"
              title="Meeting Name"
              value={meetingName}
              setMeetingName={setMeetingName}
            />
          </Form.Item>
          <Form.Item>
            <MeetingUserField
              title="Invite User"
              defaultValue="Select a user"
              options={users}
              onChange={onUserChange}
            />
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default OneOnOneMeeting;
