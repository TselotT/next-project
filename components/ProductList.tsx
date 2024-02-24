"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { Autoplay } from "swiper/modules";
import ProductCard from "./ProductCard";

interface Product {
  publication: {
    id: number;
    tagsOnDesc: [string];
  };
}

const ProductList = ({ item }: { item: any }) => {
  return (
    <div className="col-span-4 px-2 lg:p-0">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper"
      >
        {item &&
          item.map((value: Product) => {
            return (
              <SwiperSlide
                className="max-w-[180px]"
                key={value?.publication?.id}
              >
                <ProductCard item={value?.publication} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default ProductList;
