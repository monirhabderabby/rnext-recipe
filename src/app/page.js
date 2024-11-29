import HandiPickedCollection from "@/components/section/handi-picked-collection";
import Hero from "@/components/section/hero";
import LatestRecipe from "@/components/section/latest-recipe";
import PopulerCategories from "@/components/section/populer-categories";
import Subscription from "@/components/section/subscription";
import SuperDelicious from "@/components/section/super-delicious";

export default function Home() {
  return (
    <main className="container mx-auto px-4 mt-[100px]">
      <Hero />
      <SuperDelicious />
      <PopulerCategories />
      <Subscription />
      <HandiPickedCollection />
      <LatestRecipe />
    </main>
  );
}
