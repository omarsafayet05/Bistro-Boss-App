import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/pizza-bg.jpg";
import dessertImg from "../../../assets/dessert-bg.jpeg";
import saladImg from "../../../assets/salad-bg.jpg";
import soupImg from "../../../assets/soup-bg.jpg";
import pizzaImg from "../../../assets/pizza-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"our menu"}></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading={"Don't Miss"}
        heading="Today's Offer"
      ></SectionTitle>
      {/* offered menu */}
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory
        items={desserts}
        title={"dessert"}
        img={dessertImg}
      ></MenuCategory>
      <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
      <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
      <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
    </div>
  );
};

export default Menu;
