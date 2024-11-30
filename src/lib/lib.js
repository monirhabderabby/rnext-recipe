import categoriesData from "@/data/categories.json";
import recipeData from "@/data/recipes.json";

export const getHeroData = () => {
  return recipeData[0];
};

export const getDeliciousRecipes = () => {
  const items = recipeData.sort(
    (a, b) => b?.rating?.rating_count - a?.rating?.rating_count
  );

  return items.slice(0, 3);
};

export const getCategories = () => {
  return categoriesData;
};

export const getPopulerCategories = () => {
  const categories = categoriesData.map(({ id, name, image }) => {
    const totalRecepis = recipeData?.filter((item) => item?.category_id === id);

    return {
      id,
      name,
      image,
      totalRecipe: totalRecepis?.length,
    };
  });

  return categories?.sort((a, b) => b?.totalRecipe - a?.totalRecipe);
};

export const getHandPickedRecipe = () => {
  const shuffledArray = recipeData.sort(() => Math.random() - 0.5);

  return shuffledArray.slice(0, 2);
};

export const getLatestRecipes = () => {
  const data = recipeData.sort(
    (a, b) => new Date(a.published_date) - new Date(b.published_date)
  );

  return data.slice(0, 4);
};

export const getCategoryById = (categoryId) => {
  return categoriesData.find((item) => item.id === categoryId);
};

export const getSingleRecipe = (categoryId, recipeName) => {
  return recipeData?.find(
    (item) => item.category_id === categoryId && item.title === recipeName
  );
};

export const getYouMayLikeData = (category, currentRecipeTitle) => {
  const data = recipeData?.filter(
    (item) => item.category_id === category && item.title !== currentRecipeTitle
  );

  return data;
};
