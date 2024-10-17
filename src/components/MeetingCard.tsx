interface MeetingCardProps {
  image: string;
  title: string;
  description: string;
  onClick: () => void;
}

const MeetingCard = ({
  image,
  title,
  description,
  onClick,
}: MeetingCardProps) => {
  return (
    <div className="dashboard-card" onClick={onClick}>
      <img src={image} alt="" className="dashboard-image" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default MeetingCard;
