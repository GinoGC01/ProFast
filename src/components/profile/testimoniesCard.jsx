import { StarRating } from "../utils/StarRating.jsx";
import { User } from "../../icons/react/user.jsx";
import { GoogleIcon } from "../../icons/react/google";
import "./testimoniesCard.css";

export function TestimoniesCard({ testimonie }) {
  const { client, feedback, punctuation, date, profileImg } = testimonie;
  return (
    <div className="card-container">
      <figure>
        {profileImg ? (
          <img
            src={profileImg}
            alt={`imagen de perfil de ${client}`}
            loading="lazy"
          />
        ) : (
          <div className="user">
            <User />
          </div>
        )}
      </figure>
      <div className="data">
        <div className="header-data">
          <span className="nombre">{client}</span>
          <div className="star-date">
            <StarRating rating={punctuation} />
            <span className="fecha">{date}</span>
          </div>
          <span className="google-icon">
            <GoogleIcon />
          </span>
        </div>
        <p>{feedback}</p>
      </div>
    </div>
  );
}
