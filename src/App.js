import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Products from "./components/product/Products";
import Login from "./components/Login";
import Search from "./components/product/Search";
import AddProduct from "./components/product/AddProduct";
import ProductDisplay from "./components/product/ProductDisplay";
import ListProducts from "./components/product/ListProducts";
import NotFound from "./components/NotFound";
import PaginationComponent from "./components/PaginationComponent";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="products/search"> Products </Link>
        <Link to="login"> Login </Link>
        <Link to="paginationComponent"> Pages </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="paginationComponent" element={<PaginationComponent />} />
        <Route path="products" element={<Products />}>
          <Route path="search" element={<Search />} />
          <Route path="list" element={<ListProducts />} />
          <Route path="add" element={<AddProduct />} />
          <Route path=":id" element={<ProductDisplay />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div className="App">
        <div className="App-header">
          <PaginationComponent />
        </div>
      </div>
    </Router>
  );
}

export default App;
