import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
const Rating = () => {
  return (
    <div className="rating">
      <div className="rating-icons">
        <StarIcon className="star-icon" />
        <StarIcon className="star-icon" />
        <StarIcon className="star-icon" />
        <StarIcon className="star-icon" />
        <StarHalfIcon className="star-icon" />
      </div>
      <div className="rating-caption">
        <p>
          WE HAVE OVER <span>50,000</span> STARS ON GOOGLE PLUS!
        </p>
      </div>
    </div>
  );
};

export default Rating;
