import { Button, Flex, Image, Typography } from "antd";
import Lottie from "lottie-react";
import animationData from "../lotties/LoginAnimation.json";
import logoBlack from "../assets/logoBlack.svg";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/FirebaseConfig";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const { Title } = Typography;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) navigate("/");
    });
    return () => unsubscribe();
  }, [navigate]);

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
          <Flex vertical align="center" gap="large">
            <Image width={200} preview={false} src={logoBlack} />
            <Title level={4}>
              Connect Anytime,{" "}
              <span style={{ color: "#58ABDF" }}>Without Boundaries</span>
            </Title>
            <Button type="primary" block size="large" onClick={login}>
              Login With Google
            </Button>
          </Flex>
        </Flex>
      </div>
    </Flex>
  );
};

export default Login;
