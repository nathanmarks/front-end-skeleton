import { createStore as _createStore } from 'redux';
import rootReducer from './reducers';

export function createStore(initialState) {
  const store = _createStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers/index'))
    );
  }

  return store;
}
