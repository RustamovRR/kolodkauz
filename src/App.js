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

function App() {
  return (
    <BrowserRouter>
      <div className="App" >
        <Pages />
      </div>
    </BrowserRouter>
  );
}

export default App;
