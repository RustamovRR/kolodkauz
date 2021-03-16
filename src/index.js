import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import BasketProvider from "./contexts/BasketContext";
import TabListProvider from "./contexts/TabListContext";
import TranslateProvider from "./contexts/TranslateContext";
import CountProvider from "./contexts/CountContext";
import App from "./App";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TranslateProvider>
        <BasketProvider>
          <TabListProvider>
            <CountProvider >

              <App />

            </CountProvider>
          </TabListProvider>
        </BasketProvider>
      </TranslateProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
