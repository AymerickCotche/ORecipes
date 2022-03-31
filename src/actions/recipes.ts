export const ASK_RECIPES = 'ASK_RECIPES';
export const GET_RECIPES = 'GET_RECIPES';
export const FETCH_FAV = 'FETCH_FAV';
export const SAVE_FAV = 'SAVE_FAV';

export const askRecipes = () => ({
  type: ASK_RECIPES,
});

export const getRecipes = (recipes: IRecipe[]) => ({
  type: GET_RECIPES,
  recipes,
});

export const fetchFav = () => ({
  type: FETCH_FAV,
});

export const saveFav = (payload: IRecipe[]) => ({
  type: SAVE_FAV,
  recipes: payload,
});
