import Header from "./components/header/Header";
import Product from "./components/product/Product";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";
import ProductBrand from "./components/productBrand/ProductBrand";
import CarBrand from "./components/carBrand/CarBrand";
import Carousel from "./components/carousel/Carousel";
import TabMenu from "./components/tabmenu/TabMenu";
import HomePage from "./pages/Home/HomePage";
import "./App.css";
import Pages from "./pages/Pages";
import BasketProvider from "./contexts/BasketContext";
import TabListProvider from "./contexts/TabListContext";
import TranslateProvider from "./contexts/TranslateContext";

function App() {
  return (
    <BrowserRouter>
      <TranslateProvider>
        <BasketProvider>
          <TabListProvider>
            <div className="App" >
              <Pages />
            </div>
          </TabListProvider>
        </BasketProvider>
      </TranslateProvider>
    </BrowserRouter>
  );
}

export default App;
