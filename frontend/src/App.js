import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Index";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<Home/>}>
              <Route path="/Cart" element={<Cart/>}>
                </Route>
            </Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
