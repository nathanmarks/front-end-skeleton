import 'normalize.css';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import a11y from 'react-a11y';

// if (process.env.NODE_ENV !== 'production') {
//   a11y(React, {includeSrcNode: true});
// }

const rootEl = document.getElementById('app');
ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl
    );
  });
}
