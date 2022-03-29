import * as React from 'react';
import * as PropTypes from 'prop-types';
import { useAppSelector, useAppDispatch } from 'src/hooks/typedHooks';
import Field from './Field';

import './style.scss';

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const {
    email,
    password,
    isLogged,
    loggedMessage,
  } = useAppSelector((state) => state.user);
  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    // handleLogin();
  };

  return (
    <div className="login-form">
      {isLogged && (
        <div className="login-form-logged">
          <p className="login-form-message">
            {loggedMessage}
          </p>
          <button
            type="button"
            className="login-form-button"
            // onClick={handleLogout}
          >
            Déconnexion
          </button>
        </div>
      )}
      {!isLogged && (

        <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
          <Field
            name="email"
            placeholder="Adresse Email"
            value={email}
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            value={password}
          />
          <button
            type="submit"
            className="login-form-button"
          >
            OK
          </button>
        </form>
      )}
    </div>
  );
};

// LoginForm.propTypes = {
//   email: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired,
//   changeField: PropTypes.func.isRequired,
//   handleLogin: PropTypes.func.isRequired,
//   handleLogout: PropTypes.func.isRequired,
//   isLogged: PropTypes.bool,
//   loggedMessage: PropTypes.string,
// };

// LoginForm.defaultProps = {
//   isLogged: false,
//   loggedMessage: 'Connecté',
// };

export default LoginForm;
