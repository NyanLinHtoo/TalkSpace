import { MeetingCardProps } from "../utils/Types";

const MeetingCard = ({
  image,
  title,
  description,
  onClick,
  imageStyle,
}: MeetingCardProps) => {
  return (
    <div className="dashboard-card" onClick={onClick}>
      <img src={image} alt="" className="dashboard-image" style={imageStyle} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default MeetingCard;
