import { Suspense } from "react";
import { Route } from "react-router-dom";
import { QueryClientProvider } from 'react-query'
import routes from "./routes";
import { queryClient } from './services/api'
import "./App.css";

import { Layout } from "./components/shared";
import HomePage from "./pages/client/Home/HomePage";
import ProductsPage from "./pages/client/Product/ProductsPage";


function App() {
  return (
    <div className="App" >
      <ProductsPage />
    </div >
  );
}

export default App;
