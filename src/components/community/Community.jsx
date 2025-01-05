import Card from "../communityCard/Card";
import Title from "../title/Title";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./community.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

function Community() {
  return (
    <div className=" text-[#fff] p-6 flex flex-col items-start justify-start h-screen py-10 bg-[#09090B]">
      <div className="flex flex-col gap-6 ">
        <Title title={"Community  Champions"} />

        {/* text */}

        <p className="text-center font-Inter text-[1.125rem]  not-italic font-normal leading-7 lg:px-10">
          Our Community Champions are the heart and soul of our network,
          dedicated individuals who inspire and uplift others through their
          outstanding contributions. This section highlights those who go above
          and beyond to foster collaboration, drive innovation, and promote
          inclusivity within our community. Join us in celebrating their
          achievements and discovering how their passion and commitment are
          making a lasting impact!
        </p>
      </div>
      {/* cards */}
      {/* <div className="flex items-center  mt-[2.5rem] mb-[1.5rem] gap-6 justify-center lg:w-[77rem]"> */}
      <div className="my-10 py-6  flex items-center justify-center lg:w-[77rem] mx-auto">
        {" "}
        <Swiper
          // effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    // </div>
  );
}

export default Community;
