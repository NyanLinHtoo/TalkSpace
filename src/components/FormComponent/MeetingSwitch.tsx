import { Switch, Typography } from "antd";

interface MeetingSwitchProps {
  title: string;
  onChange: (checked: boolean) => void;
}

const MeetingSwitch = ({ title, onChange }: MeetingSwitchProps) => {
  const { Text } = Typography;

  return (
    <div>
      <Text
        strong
        style={{
          // color: "#1661db",
          marginRight: "10%",
        }}>
        {title}
      </Text>
      <Switch onChange={onChange} />
    </div>
  );
};

export default MeetingSwitch;
