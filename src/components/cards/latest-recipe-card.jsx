const LatestRecipeCard = ({ img, name, category }) => {
  return (
    <div>
      <img
        src={img}
        alt={name}
        className="w-full h-[300px] object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">{category}</p>
    </div>
  );
};

export default LatestRecipeCard;
