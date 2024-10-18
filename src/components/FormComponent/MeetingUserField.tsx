import { Select, Typography } from "antd";
import { MeetingUserFieldProps } from "../../utils/Types";
import { useState } from "react";

const MeetingUserField = ({
  title,
  defaultValue,
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
        defaultValue={defaultValue}
        onChange={onChange}
        options={options}
        size="large"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default MeetingUserField;
