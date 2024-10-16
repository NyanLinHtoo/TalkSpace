import { Breadcrumb, Flex, Tag } from "antd";

interface breadCrumbsItems {
  title: string;
}
interface BreadCrumbsProps {
  breadCrumbs: breadCrumbsItems[];
}

const BreadCrumbs = ({ breadCrumbs }: BreadCrumbsProps) => {
  return (
    <Flex align="center" style={{ height: "8vh", marginLeft: "2.5%" }}>
      <Tag>
        <Breadcrumb items={breadCrumbs} />
      </Tag>
    </Flex>
  );
};

export default BreadCrumbs;
