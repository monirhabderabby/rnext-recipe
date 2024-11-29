import { getPopulerCategories } from "@/lib/lib";
import Link from "next/link";
import CategoryCard from "../cards/category-card";

const PopulerCategories = () => {
  const data = getPopulerCategories();

  const trimData = data?.slice(0, 6);
  return (
    <section className="mb-16">
      <div className="flex justify-between items-top">
        <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
        <Link href="/categories" className="text-orange-500">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {trimData?.map(({ id, image, name }) => (
          <CategoryCard key={id} img={image} name={name} />
        ))}
      </div>
    </section>
  );
};

export default PopulerCategories;
