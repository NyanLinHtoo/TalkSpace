import { Button, Flex, Image, Space, Typography } from "antd";
import Lottie from "lottie-react";
import animationData from "../lotties/LoginAnimation.json";
import logoBlack from "../assets/logoBlack.svg";

const Login = () => {
  const { Title } = Typography;

  return (
    <Flex justify="center" align="center">
      <div
        style={{
          backgroundColor: "#e6e4e4",
          margin: "8%",
          padding: "2%",
          borderRadius: "20px",
        }}>
        <Flex gap="middle" justify="center" align="center">
          <Lottie animationData={animationData} />
          <Flex vertical align="center">
            <Space size="middle" direction="vertical">
              <Image
                width={200}
                preview={false}
                src={logoBlack}
                style={{ marginLeft: "40%" }}
              />
              <Title level={4}>
                Connect Anytime,{" "}
                <span style={{ color: "#58ABDF" }}>Without Boundaries</span>
              </Title>
              <Button type="primary" block size="large">
                Login With Google
              </Button>
            </Space>
          </Flex>
        </Flex>
      </div>
    </Flex>
  );
};

export default Login;
