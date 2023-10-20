import PropTypes from "prop-types";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div className=" rounded-lg   bg-base-100 shadow-xl">
        <div className="mb-2">
          <img
            className="w-full h-[18rem] rounded-t-lg"
            src={product.prodImg}
            alt="Product"
          />
        </div>
        <div className="grid grid-cols-1 grid-rows-2 px-6 pb-4 text-center">
          <div className="space-y-2 flex flex-col items-center flex-grow mb-3">
            <h2 className="text-center font-semibold text-2xl">
              {product.prodName}
            </h2>
            <div className="flex gap-1">
              <div className="badge badge-neutral">
                {product.brandName.toUpperCase()}
              </div>
              /<div className="badge badge-outline">{product.type}</div>
            </div>
          </div>
          <div className="flex-grow">
            <p className="font-semibold text-gray-400">{product.description}</p>
          </div>
          <div className="flex flex-col gap-3 ">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-xl">
                Price :<span className="text-gray-500"> ${product.price} </span>{" "}
              </p>
              <p>
                <Rating
                  initialRating={parseInt(product.rating)}
                  readonly
                  fullSymbol={
                    <AiFillStar className="text-yellow-400 text-xl"></AiFillStar>
                  }
                  emptySymbol={
                    <AiOutlineStar className="text-xl text-yellow-400"></AiOutlineStar>
                  }
                ></Rating>
              </p>
            </div>
            <div className=" flex items-center justify-center gap-4 ">
              <Link to={`/product/${product._id}/update`}>
                <button className="btn bg-[#2257ca] hover:bg-[#2257ca] text-white rounded-full">
                  Update
                </button>
              </Link>

              <Link to={`/product/${product._id}`}>
                <button className="btn bg-gradient-to-br from-fuchsia-500 via-red-600 to-orange-400 text-white rounded-full">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
