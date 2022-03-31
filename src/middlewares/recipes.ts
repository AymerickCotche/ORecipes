import { Middleware } from 'redux';
import axios from 'axios';
import {
  ASK_RECIPES,
  getRecipes,
  FETCH_FAV,
  saveFav,
} from 'src/actions/recipes';

const recipesMW: Middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ASK_RECIPES: {
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
    }
    case FETCH_FAV: {
      const token = localStorage.getItem('token');
      axios.get('http://192.168.1.19:3001/favorites', {
        headers: {
          authorization: `bearer ${token}`,
        },
      })
        .then((res) => {
          store.dispatch(saveFav(res.data.favorites));
        })
        .catch((err) => {
          console.log(err);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default recipesMW;
