import Header from "./components/header/Header";
import Product from "./components/product/Product";
import { BrowserRouter } from "react-router-dom";
import Navlinks from "./components/navlinks/Navlinks";
import Footer from "./components/footer/Footer";
import ProductBrand from "./components/productBrand/ProductBrand";
import CarBrand from "./components/carBrand/CarBrand";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App" >
        <CarBrand />
      </div>
    </BrowserRouter>
  );
}

export default App;
