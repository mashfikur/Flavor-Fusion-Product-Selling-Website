import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const BrandDetails = () => {
  const { name } = useParams();
  return (
    <div>
      <Helmet>
        <title>Flavor Fusion | {name} </title>
      </Helmet>
      <h3 className="text-4xl text-center font-semibold">
        Welcome to the Brand Details
      </h3>
    </div>
  );
};

export default BrandDetails;
