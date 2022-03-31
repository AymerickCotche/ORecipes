import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/typedHooks';
import './style.scss';

const Menu = () => {
  const recipes = useAppSelector((state) => state.recipes.list);
  const isLogged = useAppSelector((state) => state.user.logged);
  const getActiveClass = ({ isActive }: { isActive: boolean }) => (isActive ? 'menu-link menu-link--active' : 'menu-link');
  return (
    <nav className="menu">
      <NavLink
        className={getActiveClass}
        to="/"
      >
        Accueil
      </NavLink>

      {isLogged && (
      <NavLink
        className={getActiveClass}
        to="/favorite"
      >
        Mes recettes préférees
      </NavLink>
      )}

      {recipes.map((recipe) => (
        <NavLink
          key={recipe.id}
          className={getActiveClass}
          to={`/recipe/${recipe.slug}`}
        >
          {recipe.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default Menu;
