import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  return (
    <div>
      <h3>{product.prodName}</h3>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
