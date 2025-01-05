import Button from "../button";
import Title from "../title";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination } from "swiper/modules";

// Import required modules
import { FreeMode, Autoplay } from "swiper/modules";
// Hero images
import image1 from "./img_h_1.jpg";
import image2 from "./img_h_2.jpg";
import image3 from "./img_h_3.jpg";
import image4 from "./img_h_4.jpg";
import image6 from "./img_h_6.jpg";
import image7 from "./img_h_7.jpg";
import image8 from "./img_h_8.jpg";

// Install Swiper modules
// SwiperCore.use([Autoplay, Navigation, Pagination]);

function Hero() {
  const images = [image6, image7, image8, image1, image2, image3, image4];
  return (
    <section>
      <div className="flex flex-col-reverse md:flex-row gap-6 py-12 items-center justify-between">
        {/*Hero content */}
        <div className="flex flex-col space-y-6">
          <Title
            text1="wellcom"
            text2=" Excepteur sint occaecat cupidatat non proident"
          />
          <p className="text-base font-thin max-w-sm p-2">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <Button BtnText="get started" />
        </div>
        {/*Hero image */}
        <div className="w-full lg:w-1/2">
          {/* swiper */}
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: true }}
            freeMode={true}
            navigation
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet", // Custom bullet class
              bulletActiveClass: "swiper-pagination-bullet-active", // Custom active bullet class
            }}
            modules={[Pagination, FreeMode, Autoplay]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  style={{ width: "100%", height: "auto" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
export default Hero;
