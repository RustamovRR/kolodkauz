import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import Provider from "./contexts/Context";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./services/api";

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </QueryClientProvider>
  , document.getElementById("root")
);
