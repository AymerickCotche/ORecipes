import { CHANGE_FIELD, LOGIN_SUCCESS, DO_LOGOUT } from 'src/actions/user';

export const initialState = {
  logged: false,
  email: '',
  password: '',
  loggedMessage: 'Bienvenue ',
  pseudo: '',
  token: '',
};

const reducer = (state: UserState = initialState, action: UserAction = {}) => {
  switch (action.type) {
    case CHANGE_FIELD: {
      return {
        ...state,
        ...action.input,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        email: '',
        password: '',
        loggedMessage: state.loggedMessage + action.payload.pseudo,
      };
    }
    case DO_LOGOUT: {
      localStorage.removeItem('token');
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};

export default reducer;
