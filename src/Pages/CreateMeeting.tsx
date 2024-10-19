import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Header from "../components/Header";
import MeetingCard from "../components/MeetingCard";
import meeting1 from "../assets/meeting1.svg";
import meeting2 from "../assets/meeting2.svg";
import "../App.css";

const CreateMeeting = () => {
  useAuth();
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="dashboard-container">
        <Row gutter={24}>
          <Col xs={24} md={12}>
            <MeetingCard
              image={meeting1}
              title="Create 1 on 1 Meeting"
              description="Create a personal meeting."
              onClick={() => navigate("/create1on1")}
              imageStyle={{ width: "122px" }}
            />
          </Col>
          <Col xs={24} md={12}>
            <MeetingCard
              image={meeting2}
              title="Video Conference"
              description="Invite multiple persons to the meeting."
              onClick={() => navigate("/videoConference")}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CreateMeeting;
