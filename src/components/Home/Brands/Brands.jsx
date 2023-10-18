import { useContext, useEffect, useState } from "react";
import Brand from "./Brand";
import { AuthContext } from "../../../Authentication/AuthProvider";

const Brands = () => {
  const { darkTheme } = useContext(AuthContext);
  const [allBrands, setAllBrands] = useState([]);

  useEffect(() => {
    fetch("/brands.json")
      .then((res) => res.json())
      .then((data) => setAllBrands(data));
  }, []);

  return (
    <div
      className={`${
        darkTheme
          ? "bg-gradient-to-br from-teal-400 via-blue-900 to-stone-500 text-white "
          : "text-black"
      }`}
    >
      <div className={`min-h-screen py-12 lg:pt-16 container mx-auto`}>
        <h3 className="text-center font-bold text-5xl ">Brands We Provide</h3>
        <div className="grid grid-cols-1 p-5 xl:p-0 md:grid-cols-2 lg:grid-cols-3 my-12 gap-7">
          {allBrands.map((brand) => (
            <Brand key={brand.id} brand={brand}></Brand>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
