import { Middleware } from 'redux';
import axios from 'axios';
import { ASK_RECIPES, getRecipes } from 'src/actions/recipes';

const recipesMW: Middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ASK_RECIPES:
      // eslint-disable-next-line no-case-declarations
      axios({
        method: 'get',
        url: 'http://192.168.1.19:3001/recipes',
      })
        .then((res) => {
          store.dispatch(getRecipes(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
      next(action);
      break;
    default:
      next(action);
  }
};

export default recipesMW;
