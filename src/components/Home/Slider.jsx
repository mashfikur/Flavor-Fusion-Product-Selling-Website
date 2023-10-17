import PropTypes from "prop-types";

const Slider = ({ image }) => {
  return (
    <div>
      <img className=" h-[20rem] lg:h-[40rem] w-full " src={image} alt="" />
    </div>
  );
};

Slider.propTypes = {
  image: PropTypes.string,
};

export default Slider;
