export const CHANGE_FIELD = 'CHANGE_FIELD';
export const DO_LOGIN = 'DO_LOGIN';
export const DO_LOGOUT = 'DO_LOGOUT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCES';
export const FETCH_USER = 'FETCH_USER';

export const changeField = (input: UserAction['input']) => ({
  type: CHANGE_FIELD,
  input,
});

export const doLogin = () => ({
  type: DO_LOGIN,
});

export const doLogout = () => ({
  type: DO_LOGOUT,
});

export const loginSuccess = (payload: UserAction['payload']) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const fetchUser = () => ({
  type: FETCH_USER,
});
