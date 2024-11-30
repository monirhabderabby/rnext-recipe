import Link from "next/link";

const CategoryCard = ({ img, name, categoryId }) => {
  return (
    <Link
      href={`/recipes/${categoryId}`}
      className="cursor-pointer text-center group"
    >
      <div className="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <p className="transition-transform duration-300 group-hover:scale-105">
        {name}
      </p>
    </Link>
  );
};

export default CategoryCard;
