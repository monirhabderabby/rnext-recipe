import data from "@/data/recipes.json";

export const getHeroData = () => {
  return data[0];
};

export const getDeliciousRecipes = () => {
  const items = data.sort(
    (a, b) => b?.rating?.average_rating - a?.rating?.average_rating
  );

  return items.slice(0, 3);
};