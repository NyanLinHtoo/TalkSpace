import { DatePicker } from "antd";
import { MeetingDateFieldProps } from "../../utils/Types";

const MeetingDateField = ({ onChange }: MeetingDateFieldProps) => {
  return (
    <DatePicker onChange={onChange} style={{ width: "100%" }} size="large" />
  );
};

export default MeetingDateField;
