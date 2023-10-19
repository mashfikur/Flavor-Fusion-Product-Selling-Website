import { Helmet } from "react-helmet-async";
import { Outlet, useLoaderData, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect } from "react";

const BrandDetails = () => {
  const { name } = useParams();
  const loadedBrandAds = useLoaderData();
  const sliderImages = loadedBrandAds[0]?.sliderImage;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Flavor Fusion | {name.toUpperCase()} </title>
      </Helmet>
      <h3 className="text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 my-6 text-center font-bold">
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
                  className="w-[70%] h-[30rem] mx-auto"
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
