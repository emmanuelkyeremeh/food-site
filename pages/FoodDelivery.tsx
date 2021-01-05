import Image from "next/image";
import Button from "@material-ui/core/Button";
const FoodDelivery = () => {
  return (
    <div className="food-delivery">
      <div className="food-delivery-title">FOOD DELIVERY</div>
      <div className="food-delivery-text">
        Offer to your customers an extra service. Create your products in a very
        simple way and start receiving money thanks to payment systems. The
        management & shipping of your products will be very simple.
      </div>
      <div className="food-delivery-payment">
        <div>PAYMENT METHODS</div>
        <div className="payment-images">
          <Image src="/visa.svg.png" alt="" width="30" height="30" />
          <Image src="/mastercard.png" alt="" width="30" height="30" />
          <Image src="/paypal.png" alt="" width="30" height="30" />
        </div>
      </div>
      <div className="food-delivery-button">
        <Button
          variant="contained"
          style={{
            backgroundColor: "rgb(248, 200, 136)",
            padding: "1rem",
            width: "12rem",
          }}
        >
          SHOP NOW
        </Button>
      </div>
    </div>
  );
};

export default FoodDelivery;
