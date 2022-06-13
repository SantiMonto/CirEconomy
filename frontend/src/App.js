import './App.css';
import Index from './pages/Index';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
          <Index />
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
