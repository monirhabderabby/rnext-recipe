import Link from "next/link";

const LatestRecipeCard = ({ img, name, category, categoryId }) => {
  return (
    <Link href={`/${categoryId}/${name}`}>
      <img
        src={img}
        alt={name}
        className="w-full h-[300px] object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">{category}</p>
    </Link>
  );
};

export default LatestRecipeCard;
