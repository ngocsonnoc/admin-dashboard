import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Layout from './components/layout/Layout';
import './assets/css/grid.css'
import './assets/box-icon/css/boxicons.min.css'
import './assets/css/index.css'
import './assets/css/theme.css'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers';
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


document.title = 'Dash Board'
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
