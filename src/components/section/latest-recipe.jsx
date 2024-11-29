import { getCategoryById, getLatestRecipes } from "@/lib/lib";
import LatestRecipeCard from "../cards/latest-recipe-card";

const LatestRecipe = () => {
  const data = getLatestRecipes();
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Latest Recipes</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {data.map((item) => {
          const category = getCategoryById(item?.category_id);
          return (
            <LatestRecipeCard
              key={item?.title}
              img={`/thumbs/${item?.thumbnail}`}
              name={item?.title}
              category={category?.name}
            />
          );
        })}
      </div>
    </section>
  );
};

export default LatestRecipe;
