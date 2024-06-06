import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_image_hosting_key;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log("menuRes", menuRes.data);
      if (menuRes.data.insertedId) {
        reset();
        //show success pop-up
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to the menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("res", res.data);
  };
  return (
    <div>
      <SectionTitle
        heading={"add an item"}
        subHeading={"What's new?"}
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true })} />
        <label className="form-control w-full my-6">
          <div className="label">
            <span className="label-text">Receipe Name*</span>
          </div>
          <input
            type="text"
            placeholder="Receipe name"
            {...register("name", { required: true })}
            className="input input-bordered w-full "
          />
        </label>
        <div className="flex gap-3">
          {/* price*/}
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Price*</span>
            </div>
            <input
              type="number"
              placeholder="Price"
              {...register("price", { required: true })}
              className="input input-bordered w-full "
            />
          </label>
          {/* category */}
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Category*</span>
            </div>
            <select
              defaultValue={"default"}
              {...register("category", { required: true })}
              className="select select-bordered w-full mx-w-xs"
            >
              <option disabled value={"default"}>
                Select a category
              </option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="dessert">Dessert</option>
              <option value="drinks">Drinks</option>
            </select>
          </label>
        </div>

        <label className="form-control w-full my-6">
          <div className="label">
            <span className="label-text">Receipe Details</span>
          </div>
          <textarea
            className="textarea textarea-primary  h-24"
            {...register("recipe", { required: true })}
            placeholder="Bio"
          ></textarea>
        </label>
        <div className="form-control w-full my-6">
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input w-full max-w-xs"
          />
        </div>

        <button className="btn">
          submit
          <FaUtensils className="ml-4"></FaUtensils>
        </button>
      </form>
    </div>
  );
};

export default AddItems;
