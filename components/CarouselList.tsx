"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

const CarouselList = ({ value }: { value: any }) => {
  return (
    <div className="relative lg:w-full sm:w-[380px] w-[360px] mx-auto h-full min-h-[180px]">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        centeredSlides={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        {value.map((item: any, index: number) => {
          return (
            <SwiperSlide key={index}>
              <Link href={item.linkUrl}>
                <img
                  src={item.pcImageUrl}
                  alt={item.title}
                />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <span className="hidden absolute top-0 left-0 right-0 bottom-0 lg:flex ">
        <div className="flex-1 bg-white z-10  opacity-50"></div>
        <div className="w-[960px]">
        </div>
        <div className="flex-1 bg-white z-10  opacity-50"></div>
      </span>
    </div>
  );
};

export default CarouselList;
