import YouMightAlsoLike from "@/components/section/you-might-also-like";
import { icons } from "@/components/ui/icons";
import { getSingleRecipe } from "@/lib/lib";

const page = ({ params }) => {
  const { category, recipe } = params;
  const recipeName = decodeURIComponent(recipe);
  const data = getSingleRecipe(category, recipeName);
  return (
    <main className="container mx-auto px-4 py-8">
      <article>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{data?.title}</h1>
        <div className="flex items-center space-x-4 mb-6">
          <img
            src="/avater.png"
            alt="Author"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-gray-600">{data?.title}</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-600">{data?.cooking_time}</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-600">{data?.published_date}</span>
        </div>
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-4">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
              {icons.share}
              Share
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
              {icons.bookmark}
              Save
            </button>
          </div>
        </div>
        <img
          src={`/thumbs/${data?.thumbnail}`}
          alt="Cooking Image"
          className="w-full h-auto mb-8 rounded-lg"
        />
        <p className="text-gray-600 mb-8">{data?.description}</p>

        <h2 className="text-3xl font-bold mb-4">Before you begin</h2>
        <p className="mb-8">
          Food qualities braise chicken cuts bowl through slices butternut
          snack. Tender meat juicy dinners. One-pot low heat plenty of time
          adobo fat raw soften fruit. sweet renders bone-in marrow richness
          kitchen, fricassee basted putter.
        </p>

        <h2 className="text-3xl font-bold mb-4">Here are the basics</h2>
        <p className="mb-8">
          Juicy meatballs brisket slammin baked shoulder. Juicy smoker soy sauce
          burgers brisket. polenta mustard hunk greens. Wine technique snack
          skewers chuck excess. Oil heat slowly. slices natural delicious, set
          aside magic tbsp skillet, bay leaves brown centerpiece. fruit soften
          edges frond slices onion snack pork steem on wines excess technique
          cup; Cover smoker soy sauce.
        </p>

        <blockquote className="text-3xl font-bold italic text-center my-12 px-4">
          One cannot think well, love well, sleep well, if one has not dined
          well.
        </blockquote>
        <p className="text-center text-gray-600 mb-12">
          — Virginia Woolf, A Room of One&apos;s Own
        </p>

        <h2 className="text-3xl font-bold mb-4">In the kitchen</h2>
        <p className="mb-8">
          Gastronomy atmosphere set aside. Slice butternut cooking home.
          Delicious romantic undisturbed raw platter will meld. Thick Skewers
          skillet natural, smoker soy sauce wait roux. slices rosette bone-in
          simmer. Romantic fall-off-the-bone butternut chuck under romas,
          Skewers on culinary experience.
        </p>

        <img
          src="/thumbs/thumb-15.jpg"
          alt="Cooking in kitchen"
          className="w-full h-auto mb-8 rounded-lg max-w-xl mx-auto"
        />

        <p className="mb-8">
          Juicy meatballs brisket slammin baked shoulder. Juicy smoker soy sauce
          burgers brisket. polenta mustard hunk greens. Wine technique snack
          skewers chuck excess. Oil heat slowly. slices natural delicious, set
          aside magic tbsp skillet, bay leaves brown centerpiece. fruit soften
          edges frond slices onion snack pork steem on wines excess technique
          cup; Cover smoker soy sauce.
        </p>
      </article>

      <YouMightAlsoLike category={category} recipeName={recipeName} />
    </main>
  );
};

export default page;
