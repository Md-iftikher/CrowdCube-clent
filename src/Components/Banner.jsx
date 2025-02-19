import "swiper/css/bundle";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import Bannerslides from "./BannerSlides";

const Banner = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        className="h-[500px]"
      >
        {Bannerslides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <div className="absolute inset-0 bg-black/50 z-10" />
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="text-center text-white max-w-3xl px-4">
                  <h1
                    className="text-4xl md:text-6xl font-bold mb-4"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    {slide.title}
                  </h1>
                  <p
                    className="text-lg md:text-xl mb-8"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    {slide.description}
                  </p>
                  <Link to="/all-campaigns">
                    <button
                      className="btn bg-blue-600 hover:bg-blue-300 text-white rounded-lg flex items-center gap-2 mx-auto transition-all border-none transform hover:scale-105"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="400"
                    >
                      Join Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;