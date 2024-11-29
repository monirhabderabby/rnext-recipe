import { getDeliciousRecipes } from "@/lib/lib";
import DeliciousCard from "../cards/delicious-card";

const SuperDelicious = () => {
  const data = getDeliciousRecipes();

  return (
    <section class="mb-16" id="super_delicious">
      <h2 class="text-3xl font-bold mb-8">Super Delicious</h2>
      <div class="grid md:grid-cols-3 gap-8">
        {data?.map((item) => (
          <DeliciousCard
            key={item?.title}
            img={`/thumbs/${item?.thumbnail}`}
            name={item?.title}
            time={item?.cooking_time}
            rating={item?.rating?.average_rating}
          />
        ))}
      </div>
    </section>
  );
};

export default SuperDelicious;
