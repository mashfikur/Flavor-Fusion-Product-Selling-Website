import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  const { brand_name, brand_logo } = brand;
  const brandLink = brand_name.toLowerCase();
  return (
    <Link to={`/brand/${brandLink}`} >
      <div className="border shadow-xl rounded-lg p-3  flex flex-col items-center justify-center gap-4">
        <div className="flex-grow flex flex-col items-center justify-center">
          <img
            className="w-[10rem] h-[10rem] rounded-lg "
            src={brand_logo}
            alt=""
          />
        </div>
        <h3 className="text-2xl font-bold">{brand_name}</h3>
      </div>
    </Link>
  );
};

Brand.propTypes = {
  brand: PropTypes.object,
};

export default Brand;
