interface MeetingCardProps {
  image: string;
  title: string;
  description: string;
  onClick: () => void;
  imageStyle?: React.CSSProperties;
}

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
