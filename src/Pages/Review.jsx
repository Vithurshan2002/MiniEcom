import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Reviewmember from "../Components/Reviewmember";

const Review = () => {
  return (
    <div className="py-10 bg-gradient-to-t from-blue-600">
      <p className=" font-bold text-blue-900 text-center">cutomer's Reviews</p>
      <h1 className="text-2xl text-emerald-950 font-bold text-center pb-6">
        WHAT THEY SAY
      </h1>

      <div className="sm:px-10 px-6 ">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={10}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 2 }, // mobile
            640: { slidesPerView: 2 }, // tablet
            1024: { slidesPerView: 3 }, // desktop
          }}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <Reviewmember />
          </SwiperSlide>
          <SwiperSlide>
            <Reviewmember />
          </SwiperSlide>
          <SwiperSlide>
            <Reviewmember />
          </SwiperSlide>
          <SwiperSlide>
            <Reviewmember />
          </SwiperSlide>
          <SwiperSlide>
            <Reviewmember />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
