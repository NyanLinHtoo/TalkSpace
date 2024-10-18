import { Input, Typography } from "antd";
import "../../App.css";
import { useState } from "react";
import { MeetingNameFieldProps } from "../../utils/Types";

const MeetingNameField = ({
  placeholder,
  title,
  value,
  onChange,
}: MeetingNameFieldProps) => {
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
      <Input
        size="large"
        placeholder={placeholder}
        value={value}
        className="custom-input meeting-name"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
      />
    </div>
  );
};

export default MeetingNameField;
