import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Index";
import Cart from "./pages/Cart";
import Layout from './layout/Layout';
import Products from './pages/Products';
import Categories from './pages/Categories';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />}/>
            <Route path="cart" element={<Cart />}/>
            <Route path="products" element={<Products />}/>
            <Route path="categories" element={<Categories />}/>
          </Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
