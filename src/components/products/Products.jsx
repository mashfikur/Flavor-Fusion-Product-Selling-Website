import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {
  const loadedProducts = useLoaderData();
  return (
    <div>
      <div
        className={`container mx-auto  lg:-mt-1 ${
          loadedProducts.length && "min-h-[80vh]"
        } flex flex-col items-center justify-center my-12`}
      >
        <h3
          className={`text-4xl lg:text-5xl my-3  lg:my-10 bg-clip-text text-transparent bg-gradient-to-br from-fuchsia-500 via-red-600 to-orange-400  font-semibold text-center  ${
            loadedProducts.length || "hidden"
          } `}
        >
          Products
        </h3>

        {loadedProducts.length ? (
          <div>
            <div className="grid scale-90 lg:scale-100 -mt-20  md:mt-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
              {loadedProducts.map((product) => (
                <ProductCard key={product._id} product={product}></ProductCard>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-4xl -mt-4 lg:mt-10 lg:text-5xl lg:my-16 bg-clip-text text-transparent bg-gradient-to-br from-fuchsia-500 via-red-600 to-orange-400  font-semibold text-center">
            <h3>No products Available</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
