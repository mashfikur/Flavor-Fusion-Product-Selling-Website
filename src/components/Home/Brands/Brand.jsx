import PropTypes from "prop-types";

const Brand = ({ brand }) => {
  const { brand_name, brand_logo } = brand;
  return (
    <div className="border shadow-xl rounded-lg p-3 flex flex-col items-center justify-center gap-4">
      <div className="flex-grow flex flex-col items-center justify-center">
        <img className="w-[12rem] rounded-lg " src={brand_logo} alt="" />
      </div>
      <h3 className="text-2xl font-bold">{brand_name}</h3>
    </div>
  );
};

Brand.propTypes = {
  brand: PropTypes.object,
};

export default Brand;
