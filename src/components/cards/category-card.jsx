const CategoryCard = ({ img, name }) => {
  return (
    <div class="cursor-pointer text-center group">
      <div class="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
        <img
          src={img}
          alt={name}
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <p class="transition-transform duration-300 group-hover:scale-105">
        {name}
      </p>
    </div>
  );
};

export default CategoryCard;
