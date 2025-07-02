import "./Card.css";

interface CardProps {
  title: string;
  description: string;
  image: string;
  onClose: () => void;
}

function Card({ title, description, image, onClose }: CardProps) {
  return (
    <div className="card popup-card">
      <div className="card-image-container">
        <img src={image} alt={title} className="popup-image" />
        <button className="close-btn" onClick={onClose}>✖</button>
      </div>
      <p className="card-title">{title}</p>
      <p className="card-des">{description}</p>
    </div>
  );
}

export default Card;
