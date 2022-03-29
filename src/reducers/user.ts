import { CHANGE_FIELD } from 'src/actions/user';

export const initialState = {
  isLogged: false,
  email: '',
  password: '',
  emailInput: '',
  passwordInput: '',
  loggedMessage: 'Bienvenue',
};

const reducer = (state: UserState = initialState, action: UserAction = {}) => {
  switch (action.type) {
    case CHANGE_FIELD: {
      return {
        ...state,
        ...action.input,
      };
    }
    default:
      return state;
  }
};

export default reducer;
