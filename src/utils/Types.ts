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
  value: string;
  setMeetingName: React.Dispatch<React.SetStateAction<string>>;
}

export interface MeetingUserFieldProps {
  title: string;
  defaultValue: string;
  onChange: (value: string) => void;
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
