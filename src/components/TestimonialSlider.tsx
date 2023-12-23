import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "../slider.css";
import { Autoplay, Navigation } from "swiper/modules";

import { testimonial } from "../data";

const TestimonialSlider = () => {
  return (
    <Swiper
      autoplay={true}
      className="testimonialSlider"
      navigation={true}
      modules={[Navigation, Autoplay]}
    >
      {testimonial.persons.map((person, idx) => {
        const { avatar, name, occupation, message } = person;
        return (
          <SwiperSlide key={idx}>
            <div className="flex flex-col">
              <div className="gap-x-5 mb-10 flex items-center">
                <img src={avatar.type} alt="" />
                <div>
                  <div className="text-xl font-semibold">{name}</div>
                  <div className="text-gray-500">{occupation}</div>
                </div>
              </div>
              <div className="text-lg max-w-[550px]">{message}</div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
