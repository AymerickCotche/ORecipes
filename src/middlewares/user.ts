import _ from 'lodash';
import { Middleware } from 'redux';
import axios from 'axios';
import {
  DO_LOGIN,
  loginSuccess,
  FETCH_USER,
  DO_LOGOUT,
} from 'src/actions/user';

const logginMW: Middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case DO_LOGIN: {
      const { email, password } = store.getState().user;
      axios({
        method: 'post',
        url: 'http://192.168.1.19:3001/login',
        data: { email, password },
      })
        .then((res) => {
          localStorage.setItem('token', res.data.token);
          store.dispatch(loginSuccess(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    }
    case FETCH_USER: {
      const token = localStorage.getItem('token');
      if (!_.isNil(token) && _.isString(token)) {
        axios('http://192.168.1.19:3001/username', {
          headers: {
            authorization: `bearer ${token}`,
          },
        })
          .then((res) => {
            store.dispatch(loginSuccess(res.data));
          })
          .catch((err) => {
            console.log(err);
          });
      }
      break;
    }
    case DO_LOGOUT: {
      localStorage.removeItem('token');
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default logginMW;
