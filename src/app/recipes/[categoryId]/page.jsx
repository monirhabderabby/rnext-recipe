import { getCategoryById, getRecipesByCategoryId } from "@/lib/lib";
import Link from "next/link";

const Page = ({ params }) => {
  const categoryId = params?.categoryId;
  const category = getCategoryById(categoryId);
  const data = getRecipesByCategoryId(categoryId);

  let content;

  if (data?.length === 0) {
    content = <div className="w-full h-[400px]">No DATA FOUND</div>;
  } else if (data?.length > 0) {
    content = (
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data?.map((item) => (
          <Card
            key={item?.title}
            img={`/thumbs/${item?.thumbnail}`}
            name={item?.title}
            categoryId={item?.category_id}
          />
        ))}
      </div>
    );
  }
  return (
    <main class="container mx-auto px-4 py-8 mt-[100px]">
      <div class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-4xl font-bold mb-2">
            {category?.name}
            <span class="text-gray-500 text-2xl font-normal">
              ({data?.length} Recipes)
            </span>
          </h1>
          <p class="text-gray-600">
            One thing I learned living in the Canarsie section of Brooklyn, NY
            was how to cook a good Italian meal. Here is a recipe I created
            after having this dish in a restaurant. Enjoy!
          </p>
        </div>
      </div>
      {content}
    </main>
  );
};

export default Page;

const Card = ({ img, name, categoryId }) => {
  return (
    <Link
      href={`/${categoryId}/${name}`}
      class="bg-white rounded-lg overflow-hidden shadow-md"
    >
      <img
        src={img}
        alt="Decadent Raspberry and Cream Cake"
        class="w-full h-48 object-cover"
      />
      <div class="p-4">
        <h2 class="font-semibold text-lg mb-2">{name}</h2>
      </div>
    </Link>
  );
};
