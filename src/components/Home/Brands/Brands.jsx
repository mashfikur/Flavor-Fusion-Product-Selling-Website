import { useEffect, useState } from "react";
import Brand from "./Brand";

const Brands = () => {
  const [allBrands, setAllBrands] = useState([]);

  useEffect(() => {
    fetch("/brands.json")
      .then((res) => res.json())
      .then((data) => setAllBrands(data));
  }, []);

  return (
    <div className="my-8 container mx-auto">
      <h3 className="text-center font-manrope font-bold text-5xl ">
        Brands We Provide
      </h3>
      <div className="grid grid-cols-3">
        {allBrands.map((brand) => (
          <Brand key={brand.id} brand={brand}></Brand>
        ))}
      </div>
    </div>
  );
};

export default Brands;

//Coca-Cola, McDonald's, Starbucks, PepsiCo, Nestlé, Kellogg's
