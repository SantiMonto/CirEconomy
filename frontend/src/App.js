import './App.css';
import Index from './pages/Index';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/">
          <Index />
          </Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
