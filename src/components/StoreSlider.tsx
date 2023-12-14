import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { newInStore } from "../data";

const StoreSlider = () => {
  return (
    <Swiper
      grabCursor={true}
      breakpoints={{
        320: { slidesPerView: 2, spaceBetween: 18 },
        640: { slidesPerView: 3, spaceBetween: 18 },
      }}
    >
      {newInStore.products.map((product) => {
        return (
          <SwiperSlide className="">
            <div className="relative">
              <img className="w-full" src={product.image.type} alt="" />
              <p className="text-white absolute left-0 bottom-3 w-full text-center capitalize">{product.name}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default StoreSlider;
