import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "@smastrom/react-rating/style.css";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(" https://bistro-boss-server-mauve-xi.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="my-20">
      <SectionTitle
        subHeading={"What Our Client Say"}
        heading={"testimonials"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="mx-24 my-16 flex flex-col items-center">
              <Rating
                style={{ maxWidth: 150 }}
                value={review.rating}
                readOnly
              />
              <p className="py-8">{review.details}</p>
              <h3 className="text-2xl text-orange-400 font-semibold">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
