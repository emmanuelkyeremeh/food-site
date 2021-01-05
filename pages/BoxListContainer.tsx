import BoxList from "./BoxList";

const BoxListContainer = () => {
  return (
    <div className="box-list-container">
      <div className="box-list-items">
        <BoxList Img="/restaurant.jpg" text="RESTAURANT" />
        <BoxList Img="/asia-food.jpg" text="ASIAN CUISINE" />
        <BoxList Img="/hamburger.jpg" text="HAMBURGERS" />
      </div>
      <br />
      <br />
      <br />
      <div className="box-list-items">
        <BoxList Img="/pizza.jpg" text="PIZZA" />{" "}
        <BoxList Img="/italian-food.jpg" text="ITALIAN FOOD" />{" "}
        <BoxList Img="/cafe.jpg" text="BAR & CAFE" />
      </div>
    </div>
  );
};

export default BoxListContainer;
