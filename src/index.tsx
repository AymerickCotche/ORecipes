// import * as _ from 'lodash';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import { Provider } from 'react-redux';

import App from 'src/components/App';
import store from 'src/store';

const rootReactElement = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

const target = document.getElementById('root');

ReactDom.render(rootReactElement, target);
