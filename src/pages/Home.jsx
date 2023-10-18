import { Helmet } from "react-helmet-async";
import Banner from "../components/Home/Banner";
import Brands from "../components/Home/Brands/Brands";
import Faq from "../components/Home/Faq";
import Customers from "../components/Home/customers/Customers";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Flavor Fusion </title>
      </Helmet>
      <Banner></Banner>
      <Brands></Brands>
      <Customers></Customers>
      <Faq></Faq>
    </div>
  );
};

export default Home;
