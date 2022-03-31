import * as React from 'react';
import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks/typedHooks';
import { askRecipes } from 'src/actions/recipes';
import { fetchUser } from 'src/actions/user';
import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Recipe from 'src/components/Recipe';
import Favorite from 'src/components/Favorite';
import Error from 'src/components/Error';
import Loading from './Loading';
import './style.scss';

const App = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.recipes.loading);
  const isLogged = useAppSelector((state) => state.user.logged);

  const location = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);
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
          path="/favorite"
          element={isLogged ? <Favorite /> : <Navigate to="/" replace />}
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
