import { Col, Row } from "antd";
import dashboard1 from "../assets/dashboard1.gif";
import dashboard2 from "../assets/dashboard2.gif";
import dashboard3 from "../assets/dashboard3.gif";
// import "./dashboard.css";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import useAuth from "../hooks/useAuth";

interface DashboardCardProps {
  image: string;
  title: string;
  description: string;
  onClick: () => void;
}

const DashboardCard = ({
  image,
  title,
  description,
  onClick,
}: DashboardCardProps) => {
  return (
    <div className="dashboard-card" onClick={onClick}>
      <img src={image} alt="" className="dashboard-image" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

const Dashboard = () => {
  useAuth();
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="dashboard-container">
        <Row gutter={24}>
          <Col xs={24} sm={12} md={8}>
            <DashboardCard
              image={dashboard1}
              title="Create Meeting"
              description="Create a new meeting and invite people."
              onClick={() => navigate("/create")}
            />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <DashboardCard
              image={dashboard2}
              title="My Meeting"
              description="View your created meetings."
              onClick={() => navigate("/mymeeting")}
            />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <DashboardCard
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
