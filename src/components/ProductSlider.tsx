import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../slider.css";

import { Navigation, Pagination } from "swiper/modules";

import { products } from "../data";
import { HiPlus } from "react-icons/hi";

const ProductSlider = () => {
  const { pages } = products;
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true }}
      navigation={true}
      className="productSlider"
    >
      {pages.map((page, idx) => {
        return (
          <SwiperSlide key={idx}>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px]">
              {page.productList.map((product, idx) => {
                const { image, name, price, oldPrice } = product;
                return (
                  <div key={idx}>
                    <div className="border hover:border-accent rounded-[18px] h-[210px] flex items-center justify-center mb-[15px] relative transition-all">
                      <img src={image.type} alt="" />
                      <button className="absolute bottom-4 right-[16px] rounded-full bg-gray-200 overflow-hidden p-[1px] hover:bg-gray-300 transition-all">
                        <HiPlus className="text-2xl text-primary  " />
                      </button>
                    </div>
                    <div className="font-semibold lg:text-xl">{name}</div>
                    <div className="flex items-center gap-3">
                      <div>$ {price}</div>
                      <div className="text-[14px] text-gray-600 line-through">$ {oldPrice}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProductSlider;
