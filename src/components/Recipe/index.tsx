/* eslint-disable arrow-body-style */
// == Import : npm
import * as React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useAppSelector } from 'src/hooks/typedHooks';

import { findRecipe } from 'src/selectors/recipes';

// == Import : local
// Composants
import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Header from './Header';
import Ingredients from './Ingredients';
import Instructions from './Instructions';

// Style
import './style.scss';

// == Composant
function Recipe() {
  const { name } = useParams();
  const recipe = useAppSelector((state) => findRecipe(state.recipes.list, name));

  if (!recipe) {
    return <Navigate to="/error" replace />;
  }
  return (
    <Page>
      <AppHeader />
      <div className="recipe">
        <Header
          name={recipe.title}
          thumbnail={recipe.thumbnail}
          author={recipe.author}
          difficulty={recipe.difficulty}
        />
        <Ingredients
          list={recipe.ingredients}
        />
        <Instructions
          steps={recipe.instructions}
        />
      </div>
    </Page>
  );
}

// == Export
export default Recipe;
