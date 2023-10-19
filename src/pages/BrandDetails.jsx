import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const BrandDetails = () => {
  const { name } = useParams();
  const loadedBrandAds = useLoaderData();
  const sliderImages = loadedBrandAds[0]?.sliderImage;

  return (
    <div>
      <Helmet>
        <title>Flavor Fusion | {name.toUpperCase()} </title>
      </Helmet>
      <h3 className="text-4xl my-6 text-center font-bold">
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
                  className="w-[60%] mx-auto"
                  src={slider}
                  alt="slider-Image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container mx-auto my-12">
        <h3 className="text-5xl font-semibold text-center">Products</h3>
      </div>
    </div>
  );
};

export default BrandDetails;
