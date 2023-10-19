import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {
  const loadedProducts = useLoaderData();
  console.log(loadedProducts);

  return (
    <div>
      <div className="container mx-auto my-12">
        <h3 className="text-5xl bg-clip-text text-transparent bg-gradient-to-br from-fuchsia-500 via-red-600 to-orange-400  font-semibold text-center">
          Products
        </h3>

        <div>
          {loadedProducts.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
