import { getHandPickedRecipe } from "@/lib/lib";
import HandiPickedCollectionCard from "../cards/handi-picked-collection-card";

const HandiPickedCollection = () => {
  const data = getHandPickedRecipe();
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 animate-fade-in-down">
        Hand-Picked Collections
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {data?.map((item) => (
          <HandiPickedCollectionCard
            key={item.title}
            name={item?.title}
            img={`/thumbs/${item.thumbnail}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HandiPickedCollection;
