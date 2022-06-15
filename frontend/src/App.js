import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Index";
import Cart from "./pages/Cart";
import Layout from './layout/Layout';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />}/>
            <Route path="cart" element={<Cart />}/>
          </Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
