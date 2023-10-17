import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slider from "./Slider";

const Banner = () => {
  return (
    <div className="bg-gray-900 text-white ">
      <div className="container mx-auto  pt-4 pb-12">
        <div className="flex flex-col p-10 xl:flex-row items-center gap-8">
          <div className=" flex-1">
            <h3 className=" text-4xl lg:text-7xl font-bold">
              Embark on a Global Culinary Journey with <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300  to-blue-500 ">
                {" "}
                Flavor Fusion
              </span>{" "}
            </h3>
            <h3 className="mt-8 text-gray-400">
              Welcome to Flavor Fusion, your passport to a world of culinary
              adventure! <br /> {"We're"} here to take your taste buds on a
              journey around the globe.
            </h3>
          </div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            //   pagination={{
            //     clickable: false,
            //   }}
            //   navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper flex-1 rounded-lg w-full"
          >
            <SwiperSlide>
              {" "}
              <Slider
                image={"https://i.ibb.co/6BBdTv8/banner-slider-1.jpg"}
              ></Slider>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Slider
                image={"https://i.ibb.co/CWtTrr9/banner-slider-2.jpg"}
              ></Slider>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Slider
                image={"https://i.ibb.co/5WsQ2Y1/banner-slider-3.jpg"}
              ></Slider>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Slider
                image={"https://i.ibb.co/Pm3sZjb/banner-slider-4.jpg"}
              ></Slider>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Slider
                image={"https://i.ibb.co/wpHXnxS/banner-slider-5.jpg"}
              ></Slider>{" "}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
