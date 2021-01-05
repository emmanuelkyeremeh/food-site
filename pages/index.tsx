import Head from "next/head";
import Nav from "./Nav";
import Jumbotron from "./Jumbotron";
import BoxListContainer from "./BoxListContainer";
import FoodDelivery from "./FoodDelivery";
import Rating from "./Rating";
import Menu from "./Menu";
import Services from "./Services";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="home">
      <Head>
        <title>Restaurant Website</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Restaurant Website" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Open+Sans+Condensed:ital,wght@1,300&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="showcase">
        <Nav />
        <Jumbotron />
      </div>
      <div className="box-lists">
        <BoxListContainer />
      </div>
      <FoodDelivery />
      <Rating />
      <Menu />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
