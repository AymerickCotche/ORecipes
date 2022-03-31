import * as React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks/typedHooks';
import { askRecipes } from 'src/actions/recipes';
import { fetchUser } from 'src/actions/user';
import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Recipe from 'src/components/Recipe';
import Error from 'src/components/Error';
import Loading from './Loading';
import './style.scss';

const App = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.recipes.loading);

  useEffect(() => {
    dispatch(askRecipes());
    dispatch(fetchUser());
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/recipe/:slug"
          element={<Recipe />}
        />
        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
    </div>
  );
};

export default App;
