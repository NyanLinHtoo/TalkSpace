import { InputNumber, Select, Typography } from "antd";
import { MeetingUserFieldProps } from "../../utils/Types";
import { useState } from "react";

const MeetingMultipleUser = ({
  title,
  onChange,
  options,
  anyoneCanJoin,
}: MeetingUserFieldProps) => {
  const { Text } = Typography;

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div>
      {anyoneCanJoin ? (
        <>
          <Text
            strong={!isFocused}
            style={{
              color: isFocused ? "#1661db" : "rgba(0, 0, 0, 0.85)",
              transition: "color 0.3s",
            }}>
            Maximum People
          </Text>
          <InputNumber
            size="large"
            min={1}
            max={100}
            onChange={(value) => onChange(value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{
              marginTop: "8px",
              width: "100%",
            }}
          />
        </>
      ) : (
        <>
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
            onChange={onChange}
            options={options}
            size="large"
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{
              marginTop: "8px",
            }}
          />
        </>
      )}
    </div>
  );
};
export default MeetingMultipleUser;
