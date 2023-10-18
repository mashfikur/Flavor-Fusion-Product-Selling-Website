import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const BrandDetails = () => {
  const { name } = useParams();
  const loadedData = useLoaderData()
  return (
    <div>
      <Helmet>
        <title>Flavor Fusion | {name.toUpperCase()} </title>
      </Helmet>
      <h3 className="text-4xl text-center font-semibold">
        Welcome to the Brand Details of {loadedData.length}
      </h3>
    </div>
  );
};

export default BrandDetails;
