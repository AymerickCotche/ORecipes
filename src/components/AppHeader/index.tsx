import * as React from 'react';
import LoginForm from 'src/components/LoginForm';
import logo from 'src/assets/logo.png';
import './style.scss';

const AppHeader = () => (
  <header className="header">
    <img src={logo} className="header-logo" alt="Logo oRecipes" />
    <LoginForm />
  </header>
);

export default AppHeader;
