import * as React from 'react';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'src/hooks/typedHooks';
import { fetchFav } from 'src/actions/recipes';
import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';

const Favorite = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFav());
  }, []);
  const recipes = useAppSelector((state) => state.recipes.favorites);
  return (
    <Page>
      <AppHeader />
      <Content
        title="Mes recettes préférées"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo."
        recipes={recipes}
      />
    </Page>
  );
};

export default Favorite;
