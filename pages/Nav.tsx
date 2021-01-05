import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const Nav = () => {
  return (
    <nav>
      <div className="nav-logo">Restaurant</div>
      <div className="nav-links">
        <ul>
          <li>HOME</li>
          <li>RESTAURANT</li>
          <li>CUISINES</li>
          <li>FOOD DELIVERY</li>
          <li>ITALIAN FOOD</li>
        </ul>
      </div>
      <div className="nav-shop-logo">
        <ShoppingCartOutlinedIcon />
      </div>
    </nav>
  );
};

export default Nav;
