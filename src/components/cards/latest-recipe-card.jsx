const LatestRecipeCard = ({ img, name, category }) => {
  return (
    <div>
      <img
        src={img}
        alt={name}
        class="w-full h-[300px] object-cover rounded-lg mb-4"
      />
      <h3 class="text-lg font-semibold mb-2">{name}</h3>
      <p class="text-gray-600">{category}</p>
    </div>
  );
};

export default LatestRecipeCard;
