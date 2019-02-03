import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/store/store';

ReactDOM.render(
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
