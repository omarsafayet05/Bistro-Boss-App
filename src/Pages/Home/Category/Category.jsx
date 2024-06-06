import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import img1 from "../../../assets/slide1.jpg";
import img2 from "../../../assets/slide2.jpg";
import img3 from "../../../assets/slide3.jpg";
import img4 from "../../../assets/slide4.jpg";
import img5 from "../../../assets/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"order online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-10"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <h3 className="-mt-10 text-center text-white uppercase text-4xl">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <h3 className="-mt-10 text-center text-white uppercase text-4xl">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <h3 className="-mt-10 text-center text-white uppercase text-4xl">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h3 className="-mt-10 text-center text-white uppercase text-4xl">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
          <h3 className="-mt-10 text-center text-white uppercase text-4xl">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
