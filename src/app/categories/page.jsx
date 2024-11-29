const Categories = () => {
  return (
    <main class="container mx-auto px-4 py-8 mt-[100px]">
      <h1 class="text-5xl font-bold mb-12">Categories</h1>

      <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        <CategoryCard img="/category/Dips.jpg" name="Dips" />
      </div>
    </main>
  );
};

export default Categories;

const CategoryCard = ({ img, name }) => {
  return (
    <div class="text-center">
      <div class="overflow-hidden rounded-full mb-4 relative cursor-pointer">
        <img
          src={img}
          alt={name}
          class="w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <h2 class="text-xl font-semibold">{name}</h2>
    </div>
  );
};
