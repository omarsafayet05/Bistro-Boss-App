import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading="Check it Out"
        heading="featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center py-20 px-36 pt-10 bg-slate-400 bg-opacity-30">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20,2029</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur mollitia repellendus facere veritatis quibusdam,
            molestias maiores repellat nihil quis sit incidunt architecto cum
            veniam voluptates praesentium delectus temporibus! Officia
            distinctio praesentium, sequi architecto impedit aperiam mollitia
            amet in repellendus inventore tempora, molestias nostrum culpa alias
            totam veniam ab, placeat neque!
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
