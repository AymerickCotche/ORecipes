import * as React from 'react';

import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';
import { useAppSelector } from '../../hooks/typedHooks';

const Favorite = () => {
  const recipes = useAppSelector((state) => state.recipes.list);
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
