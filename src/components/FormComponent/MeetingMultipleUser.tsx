import { Select, Typography } from "antd";
import { MeetingUserFieldProps } from "../../utils/Types";
import { useState } from "react";

const MeetingMultipleUser = ({
  title,
  onChange,
  options,
}: MeetingUserFieldProps) => {
  const { Text } = Typography;

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div>
      <Text
        strong={!isFocused}
        style={{
          color: isFocused ? "#1661db" : "rgba(0, 0, 0, 0.85)",
          transition: "color 0.3s",
        }}>
        {title}
      </Text>
      <Select
        mode="multiple"
        defaultValue="Select a user"
        onChange={onChange}
        options={options}
        size="large"
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          marginTop: "8px",
        }}
      />
    </div>
  );
};
export default MeetingMultipleUser;
