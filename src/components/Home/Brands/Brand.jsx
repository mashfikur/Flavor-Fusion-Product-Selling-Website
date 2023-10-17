import PropTypes from "prop-types";

const Brand = ({ brand }) => {
  const {  brand_name, brand_logo } = brand;
  return (
    <div className="border">
      <img src={brand_logo} alt="" />
      <h3>{brand_name}</h3>
    </div>
  );
};

Brand.propTypes = {
  brand: PropTypes.object,
};

export default Brand;
