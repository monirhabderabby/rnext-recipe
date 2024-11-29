const CategoryCard = ({ img, name }) => {
  return (
    <div className="cursor-pointer text-center group">
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
    </div>
  );
};

export default CategoryCard;
