const MenuItem = ({ item }) => {
  const { name, price, recipe, image } = item;
  return (
    <div className="flex space-x-4">
      <img
        src={image}
        style={{ borderRadius: "0 200px 200px 200px" }}
        alt=""
        className="w-[120px]"
      />
      <div>
        <h3 className="uppercase">{name}---------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
