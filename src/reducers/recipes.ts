import { ASK_RECIPES, GET_RECIPES } from 'src/actions/recipes';

export const initialState: RecipeState = {
  list: [],
  loading: true,
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
    default:
      return state;
  }
};

export default reducer;
