import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from '../src/reducers/index';
import './index.css';
import App from '../src/containers/App/App';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
 window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools);

const applicationSetUp = (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(applicationSetUp, document.getElementById('root'));
