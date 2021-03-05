import React from "react";
import ReactDOM from "react-dom";

import BasketProvider from "./contexts/BasketContext";
import TabListProvider from "./contexts/TabListContext";
import TranslateProvider from "./contexts/TranslateContext";

import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TranslateProvider>
        <BasketProvider>
          <TabListProvider>

            <App />

          </TabListProvider>
        </BasketProvider>
      </TranslateProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
