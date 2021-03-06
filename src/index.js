import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import App from './containers/App';
import './index.css';

const render = (Component) => {
  ReactDom.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default;
    render(NextApp);
  });
};
