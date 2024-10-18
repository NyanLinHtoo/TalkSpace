import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Header from "../components/Header";
import MeetingCard from "../components/MeetingCard";
import dashboard1 from "../assets/dashboard1.gif";
import dashboard2 from "../assets/dashboard2.gif";
import dashboard3 from "../assets/dashboard3.gif";
import "../App.css";

const Dashboard = () => {
  const navigate = useNavigate();
  useAuth();

  return (
    <>
      <Header />
      <div className="dashboard-container">
        <Row gutter={24}>
          <Col xs={24} sm={12} md={8}>
            <MeetingCard
              image={dashboard1}
              title="Create Meeting"
              description="Create a new meeting and invite people."
              onClick={() => navigate("/create")}
            />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <MeetingCard
              image={dashboard2}
              title="My Meeting"
              description="View your created meetings."
              onClick={() => navigate("/mymeeting")}
            />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <MeetingCard
              image={dashboard3}
              title="Meetings"
              description="View the meeting that you are invited to."
              onClick={() => navigate("/create")}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;
