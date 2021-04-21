import React from "react";
import thunk from 'redux-thunk';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import { createStore, compose, applyMiddleware } from 'redux';

import "./index.css";
import App from "./App";
import { rootReducer } from "./redux/reducers"
import CountProvider from "./contexts/CountContext";
import BasketProvider from "./contexts/BasketContext";
import TabListProvider from "./contexts/TabListContext";
import TranslateProvider from "./contexts/TranslateContext";


const composeEnhancer = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const store = createStore(
  rootReducer,  
  composeEnhancer(applyMiddleware(thunk))
)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store} >
      <TranslateProvider>
        <BasketProvider>
          <TabListProvider>
            <CountProvider >

              <App />

            </CountProvider>
          </TabListProvider>
        </BasketProvider>
      </TranslateProvider>
    </Provider>
  </BrowserRouter>
  , document.getElementById("root")
);
