import { getDeliciousRecipes } from "@/lib/lib";
import DeliciousCard from "../cards/delicious-card";

const SuperDelicious = () => {
  const data = getDeliciousRecipes();

  return (
    <section className="mb-16" id="super_delicious">
      <h2 className="text-3xl font-bold mb-8">Super Delicious</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {data?.map((item) => (
          <DeliciousCard
            key={item?.title}
            img={`/thumbs/${item?.thumbnail}`}
            name={item?.title}
            time={item?.cooking_time}
            rating={item?.rating?.average_rating}
            categoryId={item?.category_id}
          />
        ))}
      </div>
    </section>
  );
};

export default SuperDelicious;
