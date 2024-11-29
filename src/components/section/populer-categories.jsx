import Link from "next/link";
import CategoryCard from "../cards/category-card";

const PopulerCategories = () => {
  return (
    <section class="mb-16">
      <div class="flex justify-between items-top">
        <h2 class="text-3xl font-bold mb-8">Popular Categories</h2>
        <Link href="/categories" class="text-orange-500">
          View All
        </Link>
      </div>
      <div class="grid grid-cols-3 md:grid-cols-6 gap-4">
        <CategoryCard
          img="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=100&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="Breakfast"
        />
        <CategoryCard
          img="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=100&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="Vegan"
        />
        <CategoryCard
          img="https://images.unsplash.com/photo-1448907503123-67254d59ca4f?q=100&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="Meat"
        />
        <CategoryCard
          img="https://images.unsplash.com/photo-1469533778471-92a68acc3633?q=100&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="Dessert"
        />
        <CategoryCard
          img="https://images.unsplash.com/photo-1663861623497-2151b2bb21fe?q=100&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="Lunch"
        />
        <CategoryCard
          img="https://images.unsplash.com/photo-1582570675095-9b679953577e?q=100&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="Chocolate"
        />
      </div>
    </section>
  );
};

export default PopulerCategories;
