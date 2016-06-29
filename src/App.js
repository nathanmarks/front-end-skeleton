import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { createStore } from './store';
import { createStyleSheet, createStyleManager } from 'stylishly';
import { createPluginRegistry } from 'stylishly/lib/pluginRegistry';
import vendorPrefixer from 'stylishly-vendor-prefixer';
import pseudoClasses from 'stylishly-pseudo-classes';
import descendants from 'stylishly-descendants';
import chained from 'stylishly-chained';
import units from 'stylishly-units';
import nested from 'stylishly-nested';
import mediaQueries from 'stylishly-media-queries';

import Home from './pages/Home';

const store = createStore();

export const styleSheet = createStyleSheet('App', () => {
  return {
    '@raw body': {
      color: '#111',
      backgroundColor: '#fafafa',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
    },
    '@raw img': {
      maxWidth: '100%'
    },
    '@raw #app': {
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  };
});

export default class App extends Component {
  static propTypes = {
    styleManager: PropTypes.object
  };

  static childContextTypes = {
    styleManager: PropTypes.object.isRequired
  };

  getChildContext() {
    const { styleManager } = this;
    return {
      styleManager: styleManager
    };
  }

  componentWillMount() {
    this.styleManager = createStyleManager({
      pluginRegistry: createPluginRegistry(
        nested(),
        mediaQueries(),
        descendants(),
        pseudoClasses(),
        chained(),
        units(),
        vendorPrefixer()
      )
    });
  }

  render() {
    this.styleManager.render(styleSheet);
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
