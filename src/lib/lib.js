import categoriesData from "@/data/categories.json";
import recipeData from "@/data/recipes.json";

export const getHeroData = () => {
  return recipeData[0];
};

export const getDeliciousRecipes = () => {
  const items = recipeData.sort(
    (a, b) => b?.rating?.average_rating - a?.rating?.average_rating
  );

  return items.slice(0, 3);
};

export const getCategories = () => {
  return categoriesData;
};
