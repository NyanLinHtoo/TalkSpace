import { Button, Divider, Flex, Image, Tag, Typography } from "antd";
import TSlogo from "../assets/TS-short-logo.svg";
import { useAppSelector } from "../app/hook";
import { Link } from "react-router-dom";
import { LogoutOutlined } from "@ant-design/icons";
import useAuth from "../hooks/useAuth";
import BreadCrumbs from "./BreadCrumbs";
import { useState } from "react";

const Header = () => {
  const { Text } = Typography;
  const { logout } = useAuth();

  const username = useAppSelector((state) => state.auth.userInfo?.name);

  const [breadCrumbs, setBreadCrumbs] = useState([
    {
      title: "Dashboard",
    },
    {
      title: "Dashboard",
    },
  ]);

  return (
    <>
      <Flex
        gap="middle"
        align="center"
        justify="space-between"
        style={{ height: "8vh" }}>
        <Link to="/">
          <Image
            width={60}
            src={TSlogo}
            preview={false}
            style={{ marginLeft: "50%" }}
          />
        </Link>
        {username && (
          <Text
            strong
            style={{
              fontSize: 20,
            }}>
            Hello,{" "}
            <Tag
              color="blue"
              style={{
                fontSize: 15,
              }}>
              {username}
            </Tag>
          </Text>
        )}
        <Button
          icon={<LogoutOutlined />}
          style={{ marginRight: "1%" }}
          onClick={logout}
        />
      </Flex>
      <Divider />
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <Divider />
    </>
  );
};

export default Header;
