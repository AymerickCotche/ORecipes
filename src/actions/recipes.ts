export const ASK_RECIPES = 'ASK_RECIPES';
export const GET_RECIPES = 'GET_RECIPES';

export const askRecipes = () => ({
  type: ASK_RECIPES,
});

export const getRecipes = (recipes: IRecipe[]) => ({
  type: GET_RECIPES,
  recipes,
});
