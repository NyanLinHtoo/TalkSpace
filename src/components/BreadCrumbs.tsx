import { Breadcrumb, Flex } from "antd";
import { Link, useLocation } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import { getBreadcrumbItems } from "../utils/breadCrumbs";
import { BreadcrumbItem } from "../utils/Types";

const BreadCrumbs = () => {
  const location = useLocation();
  const breadcrumbItems: BreadcrumbItem[] = getBreadcrumbItems(location);

  return (
    <Flex
      align="center"
      style={{
        height: "8vh",
        paddingLeft: "2.5%",
        boxShadow: "0 8px 24px rgba(149, 157, 165, 0.2)",
      }}>
      <Breadcrumb
        items={breadcrumbItems.map((item, index) => ({
          title:
            index === 0 ? (
              <Link to={item.path}>
                <HomeOutlined />
              </Link>
            ) : (
              <Link to={item.path}>{item.title}</Link>
            ),
        }))}
      />
    </Flex>
  );
};

export default BreadCrumbs;
