import { ASK_RECIPES, GET_RECIPES, SAVE_FAV } from 'src/actions/recipes';

export const initialState: RecipeState = {
  list: [],
  loading: true,
  favorites: [],
};

const reducer = (state: RecipeState = initialState, action: RecipeAction = {}) => {
  switch (action.type) {
    case ASK_RECIPES: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_RECIPES: {
      return {
        ...state,
        list: action.recipes,
        loading: false,
      };
    }
    case SAVE_FAV: {
      return {
        ...state,
        favorites: action.recipes,
      };
    }
    default:
      return state;
  }
};

export default reducer;
