import Button from "@material-ui/core/Button";

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="jumbotron-title">
        <span className="jumbotron-logo">RESTAURANT!</span> Accra,Ghana
      </div>
      <div className="jumbotron-text">
        TAKE ADVANTAGE OF THIS EXCLUSIVE OFFER. DO THIS FOR YOUR BUSINESS
      </div>
      <div className="jumbotron-button">
        <Button
          variant="contained"
          style={{ backgroundColor: "rgb(248, 200, 136)", padding: "1rem" }}
        >
          ORDER NOW AT 15% OFF
        </Button>
      </div>
    </div>
  );
};

export default Jumbotron;
