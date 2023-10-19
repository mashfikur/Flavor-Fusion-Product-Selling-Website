import { useContext, useEffect } from "react";
import { AiFillStar, AiOutlineArrowLeft } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const productInfo = useLoaderData();
  const navigate = useNavigate();
  const { darkTheme } = useContext(AuthContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    _id,
    prodName,
    brandName,
    prodImg,
    type,
    price,
    rating,
    description,
  } = productInfo;

  const handleAddCart = () => {
    const itemInfo = {
      itemId: _id,
      prodName,
      brandName,
      prodImg,
      type,
      price,
      rating,
      description,
    };

    // storing item to my cart in database
    fetch("https://flavor-fusion-server-sepia.vercel.app/cart/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(itemInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Successfully Added Item to Cart");
        }
      });
  };

  return (
    <div
      className={` ${
        darkTheme
          ? "bg-gradient-to-br from-green-300  to-blue-500"
          : "bg-base-100"
      } min-h-[70vh]`}
    >
      <div className="container scale-90 lg:scale-100 flex flex-col items-center xl:block mx-auto pt-5">
        <Link onClick={() => navigate(-1)}>
          <button className="btn btn-outline">
            <AiOutlineArrowLeft></AiOutlineArrowLeft>
            Go Back
          </button>
        </Link>
      </div>
      <div className="container py-6 p-3 xl:p-0 xl:py-20 mx-auto ">
        <div className="card  lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className="w-[40rem]   h-[25rem] " src={prodImg} alt="Album" />
          </figure>
          <div className="card-body">
            <div>
              <h2 className="font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-tl from-green-300  to-blue-500 text-3xl">
                {prodName}
              </h2>
            </div>
            <div className="space-y-2 flex-grow">
              <p className="font-semibold">
                {" "}
                Brand :{" "}
                <span className="text-gray-400">{brandName.toUpperCase()}</span>
              </p>
              <p className="font-semibold">
                {" "}
                Type :{" "}
                <span className="text-gray-400">{type.toUpperCase()}</span>
              </p>
              <p className="font-semibold flex gap-2 items-center">
                {" "}
                Rating :{" "}
                <span className="text-gray-400 flex items-center">
                  {" "}
                  {rating}
                  <AiFillStar className="text-xl text-yellow-400"></AiFillStar>{" "}
                </span>
              </p>
              <p className="font-semibold">
                {" "}
                Description :{" "}
                <span className="text-gray-400">{description}</span>
              </p>
              <p className="font-semibold">
                {" "}
                Price :{" "}
                <span className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-green-300  to-blue-500">
                  ${price}
                </span>
              </p>
            </div>
            <div className="flex flex-col items-end ">
              <button
                onClick={handleAddCart}
                className="btn bg-green-600 flex items-center hover:bg-green-600 text-white"
              >
                <BsCart3 className="text-xl"></BsCart3>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
