// import * as _ from 'lodash';
import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Provider } from 'react-redux';

import App from 'src/components/App';
import store from 'src/store';

const rootReactElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

const target = document.getElementById('root');

ReactDom.render(rootReactElement, target);
