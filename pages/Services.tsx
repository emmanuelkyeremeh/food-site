import CheckIcon from "@material-ui/icons/Check";
import RestaurantIcon from "@material-ui/icons/Restaurant";
const Services = () => {
  return (
    <div className="services-container">
      <div className="services-title">
        THE <span>BEST</span> SERVICES{" "}
      </div>
      <div className="services">
        <div className="services-left">
          <div className="services-left-check">
            <CheckIcon /> <p>SERVICE</p>
          </div>
          <div className="services-left-check">
            <CheckIcon /> <p>COMPATIBILITY</p>
          </div>
        </div>
        <div className="services-right">
          <RestaurantIcon style={{ fontSize: "4rem" }} /> Restaurant
          Reservations
        </div>
      </div>
    </div>
  );
};

export default Services;
