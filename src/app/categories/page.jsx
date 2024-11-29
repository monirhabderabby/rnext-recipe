import { getCategories } from "@/lib/lib";

const Categories = () => {
  const data = getCategories();
  return (
    <main className="container mx-auto px-4 py-8 mt-[100px]">
      <h1 className="text-5xl font-bold mb-12">Categories</h1>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {data?.map(({ id, image, name }) => (
          <CategoryCard img={image} name={name} key={id} />
        ))}
      </div>
    </main>
  );
};

export default Categories;

const CategoryCard = ({ img, name }) => {
  return (
    <div className="text-center">
      <div className="overflow-hidden rounded-full mb-4 relative cursor-pointer">
        <img
          src={img}
          alt={name}
          className="w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <h2 className="text-xl font-semibold">{name}</h2>
    </div>
  );
};
