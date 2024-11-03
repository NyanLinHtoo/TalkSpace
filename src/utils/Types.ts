import { Dayjs } from "dayjs";

export interface initialStateType {
  userInfo:
    | {
        uid: string;
        name: string;
        email: string;
      }
    | undefined;
}

export interface MeetingNameFieldProps {
  placeholder: string;
  title: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface MeetingUserFieldProps {
  anyoneCanJoin?: boolean;
  title: string;
  onChange: (value: string | number | null) => void;
  options: UserType[];
}

export interface MeetingCardProps {
  image: string;
  title: string;
  description: string;
  onClick: () => void;
  imageStyle?: React.CSSProperties;
}

export interface BreadcrumbItem {
  path: string;
  title: string;
}

export interface UserType {
  email: string;
  name: string;
  uid: string;
  label?: string;
  value?: string;
}

export interface MeetingDateFieldProps {
  onChange: (date: Dayjs, dateString: string | string[]) => void;
}

export interface MeetingFormValues {
  meetingName: string;
  invitedUser: string;
  meetingDate: Dayjs;
}
