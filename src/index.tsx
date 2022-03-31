// import * as _ from 'lodash';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import {
  BrowserRouter,
} from 'react-router-dom';

import { Provider } from 'react-redux';

import App from 'src/components/App';
import store from './store';

ReactDom.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root') || document.createElement('div'),
);

// const target = document.getElementById('root') || document.createElement('div');

// ReactDom.render(rootReactElement, target);
