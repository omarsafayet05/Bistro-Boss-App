//import useAuth from "../../hooks/useAuth";

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

//const axios = require('axios/dist/browser/axios.cjs');
//import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, price, recipe, image, _id } = item;
  //const { user } = useAuth();
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  //const handleAddToCart = (food) => {
  const handleAddToCart = () => {
    //console.log(food, user?.email);
    if (user && user.email) {
      //send cart item to database
      //console.log(food, user?.email);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name}added to your card`,
          showConfirmButton: false,
          timer: 1500,
        });

        refetch();
      });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please!login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          //redirect to loginpage
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">
        {price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
