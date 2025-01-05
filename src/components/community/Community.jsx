import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Card from "../communityCard/Card";
import Title from "../title/Title";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./community.css";

function Community() {
  const communityData = [
    {
      name: "Ali",
      position: "manager",
      photo: "/assets/img/team/team-1.jpg",
      describtion: `ali has contributed significantly to our open-source projects, mentoring new developers along the way. Her recent project on enhancing site performance has resulted in a 50% reduction in load times, benefiting all users.`,
    },
    {
      name: "Sarah",
      position: "Developer",
      photo: "/assets/img/team/team-2.jpg",
      describtion: `Sarah has contributed significantly to our open-source projects, mentoring new developers along the way. Her recent project on enhancing site performance has resulted in a 50% reduction in load times, benefiting all users.`,
    },
    {
      name: "designer",
      position: "Developer",
      photo: "/assets/img/team/team-3.jpg",
      describtion: `Sarah has contributed significantly to our open-source projects, mentoring new developers along the way. Her recent project on enhancing site performance has resulted in a 50% reduction in load times, benefiting all users.`,
    },
  ];

  return (
    <div className="text-[#fff] p-6 flex flex-col items-start justify-start h-screen py-10 bg-[#09090B]">
      <div className="flex flex-col gap-6">
        <Title title={"Community Champions"} />
        <p className="text-center font-Inter text-[1.125rem] not-italic font-normal leading-7 lg:px-10">
          Our Community Champions are the heart and soul of our network,
          dedicated individuals who inspire and uplift others through their
          outstanding contributions...
        </p>
      </div>
      <div className="my-10 py-6 flex items-center justify-center lg:w-[77rem] mx-auto">
        <Swiper
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
          {communityData.map((data, index) => (
            <SwiperSlide key={index}>
              <Card data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Community;
