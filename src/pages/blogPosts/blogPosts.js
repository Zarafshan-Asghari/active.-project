// importing 6 images for data
import BlogItem from "../../components/blog-posts-item/blogItem";
import img1 from "./images/img_h_2.jpg";
import img2 from "./images/img_h_3.jpg";
import img3 from "./images/img_h_6.jpg";
import ImgWriter1 from "./images/team-1.jpg";
import ImgWriter2 from "./images/team-2.jpg";
import ImgWriter3 from "./images/team-3.jpg";
import "./BlogPost.css";

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
function BlogPosts() {
  // Data
  const blogData = [
    {
      img: img1,
      date: "2021-03-04",
      title: "There live the blind texts they live",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      writerImg: ImgWriter1,
      writerName: "Winston Gold",
    },
    {
      img: img2,
      date: "2021-04-10",
      title: "There live the blind texts they live",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      writerImg: ImgWriter2,
      writerName: "Sarah Johnson",
    },
    {
      img: img3,
      date: "2021-05-22",
      title: "There live the blind texts they live",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      writerImg: ImgWriter3,
      writerName: "Emily Brown",
    },
    {
      img: img1,
      date: "2021-03-04",
      title: "There live the blind texts they live",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      writerImg: ImgWriter1,
      writerName: "Winston Gold",
    },
    {
      img: img2,
      date: "2021-04-10",
      title: "There live the blind texts they live",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      writerImg: ImgWriter2,
      writerName: "Sarah Johnson",
    },
    {
      img: img3,
      date: "2021-05-22",
      title: "There live the blind texts they live",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      writerImg: ImgWriter3,
      writerName: "Emily Brown",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto py-12">
      <h5 className="text-xl font-simibold my-6 text-center capitalize">
        blog posts
      </h5>
      {/* swiper */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        freeMode={true}
        navigation
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, FreeMode, Autoplay]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {blogData.map((blog, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col space-y-4 pb-10 md:flex-row md:space-x-6 md:space-y-0 p-6 md:p-4">
              <BlogItem
                key={index}
                {...blog}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BlogPosts;
