import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const TestimonialsSection = ({ theme }) => {
  const feedbacks = [
    {
      name: "Sakib Al Hasan",
      feedback:
        "Donating to Crowd Cube was a fulfilling experience! Knowing my contributions are helping families in need truly warmed my heart.",
      image:
        "https://images.thedailystar.net/sites/default/files/styles/very_big_201/public/images/2023/10/03/shakib.jpg",
    },
    {
      name: "Jhanker",
      feedback:
        "I love how easy it is to support various causes through Crowd Cube. Every donation counts and makes a difference!",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD-_MILXn5-tMGuL53zC9yiswl3WtRwE-koQ&s",
    },
    {
      name: "Sarah Johnson",
      feedback:
        "Crowd Cube connects generous donors with those in need. It's amazing to see the impact we can make together!",
      image:
        "https://pbs.twimg.com/profile_images/1271544502340198400/8Fq7zjbq_400x400.jpg",
    },
    {
      name: "Mark Thompson",
      feedback:
        "The donation process was seamless, and I love that my contributions are making a difference in my local community. Highly recommend getting involved!",
      image:
        "https://static-wbd-cdn.wbd.com/s3_assets/images/person/2024-08/mark-thompson-800x800.jpg",
    },
    {
      name: "Emily Davis",
      feedback:
        "I appreciate how easy it is to donate. The team was friendly and made sure my items reached those who needed them most.",
      image:
        "https://m.media-amazon.com/images/M/MV5BODY4MmI1NjEtODc5Yy00ZmYyLThkMGItNzYyNzM4MjEzNjNiXkEyXkFqcGc@._V1_.jpg",
    },
    {
      name: "James Smith",
      feedback:
        "Crowd Cube has made it so simple to give back. I feel great knowing my donations are helping those in need.",
      image:
        "https://yt3.googleusercontent.com/dKOP4FBt2GGNgHGRxpRn8AQM9Hl7w5UKZ29frBNKz6H5bhDIlIz02448XEDxod8hamuzMt5JmEY=s900-c-k-c0x00ffffff-no-rj",
    },
  ];

  return (
    <div className={`py-12 ${theme === "light" ? "bg-gray-100" : "bg-gray-900"}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className={`text-4xl font-bold mb-8 ${theme === "light" ? "text-gray-800" : "text-white"}`}>
          What Our Donors Say
        </h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3} 
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
        >
          {feedbacks.map((feedback, index) => (
            <SwiperSlide key={index}>
              <div className={`p-6 rounded-lg h-64 shadow-lg transition-transform transform hover:scale-105 ${theme === "light" ? "bg-white" : "bg-gray-800"}`}>
                <img
                  src={feedback.image}
                  alt={feedback.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-gray-300"
                />
                <h3 className={`text-lg font-semibold mt-4 ${theme === "light" ? "text-gray-700" : "text-white"}`}>
                  {feedback.name}
                </h3>
                <p className={`mt-2 ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
                  {feedback.feedback}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialsSection;