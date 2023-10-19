import { Helmet } from "react-helmet-async";
import { Link, Outlet, useLoaderData, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const BrandDetails = () => {
  const { name } = useParams();
  const loadedBrandAds = useLoaderData();
  const sliderImages = loadedBrandAds[0]?.sliderImage;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-4 lg:px-2 ">
      <div className="container scale-90 lg:scale-100 flex flex-col items-center lg:block mx-auto mt-5">
        <Link to={"/"}>
          <button className="btn btn-outline">
            <AiOutlineArrowLeft></AiOutlineArrowLeft>
            Back to Home
          </button>
        </Link>
      </div>
      <Helmet>
        <title>Flavor Fusion | {name.toUpperCase()} </title>
      </Helmet>
      <h3 className=" text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 my-6 text-center font-bold">
        {name.toUpperCase()}
      </h3>
      <div className="container mx-auto">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {sliderImages.map((slider, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full">
                <img
                  className="w-[80%] h-[10rem] md:h-[20rem] lg:h-[30rem] lg:w-[70%] mx-auto"
                  src={slider}
                  alt="slider-Image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default BrandDetails;
