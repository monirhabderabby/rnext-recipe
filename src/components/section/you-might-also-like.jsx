import { getYouMayLikeData } from "@/lib/lib";
import YouMightAlsoLikeCard from "../cards/you-might-also-like-card";

const YouMightAlsoLike = ({ category, recipeName }) => {
  const data = getYouMayLikeData(category, recipeName);

  let content;

  if (data.length === 0) {
    content = (
      <div className="w-full h-[100px] flex items-start justify-start max-w-[500px] text-gray-500">
        Currently, there are no suggestions available for you. Please check back
        later or explore other options!
      </div>
    );
  } else if (data.length > 0) {
    content = (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {data.map((item) => (
          <YouMightAlsoLikeCard
            key={item?.title}
            name={item?.title}
            img={`/thumbs/${item?.thumbnail}`}
            category={item.category_id}
          />
        ))}
      </div>
    );
  }

  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-8">You might also like</h2>
      {content}
    </section>
  );
};

export default YouMightAlsoLike;
