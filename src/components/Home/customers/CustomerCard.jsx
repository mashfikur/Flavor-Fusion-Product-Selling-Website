import PropTypes from "prop-types";
import { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { AuthContext } from "../../../Authentication/AuthProvider";

const CustomerCard = ({ customer }) => {
  const { darkTheme } = useContext(AuthContext);

  return (
    <div>
      <div
        className={`mx-12 flex flex-col w-80 h-80 text-center ${
          darkTheme ? "bg-main text-white" : "bg-base-200"
        } p-4 rounded-lg`}
      >
        <div className="flex-grow space-y-2 ">
          <img
            className="rounded-full mx-auto"
            src={customer.customer_img}
            alt=""
          />
          <h3 className="font-semibold text-xl">{customer.customer_name}</h3>
          <p className="text-gray-400">{customer.customer_review}</p>
        </div>
        <div className="flex gap-2 flex-col  items-center justify-center">
          {
            <div className="flex items-center gap-3 text-xl text-yellow-400 ">
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
            </div>
          }
          <div>
            <p className="font-bold text-xl">{customer.customer_rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

CustomerCard.propTypes = {
  customer: PropTypes.object,
};

export default CustomerCard;
