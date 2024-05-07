import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {appReducer} from './Redux/appReducer.js';
import {translateReducer} from './Redux/translateReducer.js';
import {Provider} from "react-redux";
import { createStore, combineReducers} from 'redux';

const rootReducer = combineReducers({app: appReducer, translate: translateReducer})
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Provider store = {store}>
      <App />
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
