// Importing data from JSON files for categories and recipes
import categoriesData from "@/data/categories.json";
import recipeData from "@/data/recipes.json";

// Function to get the data for the hero section, typically the first recipe in the list
export const getHeroData = () => {
  return recipeData[0];
};

// Function to get the top 3 most popular recipes based on the number of ratings
export const getDeliciousRecipes = () => {
  const items = recipeData.sort(
    (a, b) => b?.rating?.rating_count - a?.rating?.rating_count // Sorting recipes by descending rating count
  );

  return items.slice(0, 3); // Returning the top 3 recipes
};

// Function to get all categories
export const getCategories = () => {
  return categoriesData;
};

// Function to get popular categories sorted by the number of recipes in each category
export const getPopulerCategories = () => {
  const categories = categoriesData.map(({ id, name, image }) => {
    const totalRecepis = recipeData?.filter((item) => item?.category_id === id); // Filtering recipes by category ID

    return {
      id, // Category ID
      name, // Category name
      image, // Category image
      totalRecipe: totalRecepis?.length, // Total number of recipes in this category
    };
  });

  return categories?.sort((a, b) => b?.totalRecipe - a?.totalRecipe); // Sorting categories by total recipes in descending order
};

// Function to get two randomly selected recipes
export const getHandPickedRecipe = () => {
  const shuffledArray = recipeData.sort(() => Math.random() - 0.5); // Shuffling recipes randomly

  return shuffledArray.slice(0, 2); // Returning the first two recipes from the shuffled list
};

// Function to get the latest 4 recipes based on their published date
export const getLatestRecipes = () => {
  const data = recipeData.sort(
    (a, b) => new Date(a.published_date) - new Date(b.published_date) // Sorting recipes by ascending published date
  );

  return data.slice(0, 4); // Returning the first 4 recipes
};

// Function to get category details by category ID
export const getCategoryById = (categoryId) => {
  return categoriesData.find((item) => item.id === categoryId); // Finding category by ID
};

// Function to get a single recipe based on category ID and recipe title
export const getSingleRecipe = (categoryId, recipeName) => {
  return recipeData?.find(
    (item) => item.category_id === categoryId && item.title === recipeName // Matching both category ID and title
  );
};

// Function to get recipes that belong to the same category but exclude the current recipe
export const getYouMayLikeData = (category, currentRecipeTitle) => {
  const data = recipeData?.filter(
    (item) => item.category_id === category && item.title !== currentRecipeTitle // Filtering recipes by category but excluding the current recipe
  );

  return data;
};

// Function to get all recipes for a specific category ID
export const getRecipesByCategoryId = (categoryId) => {
  return recipeData?.filter((item) => item.category_id === categoryId); // Filtering recipes by category ID
};
