import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import Conocenos from './components/Conocenos';
import Contactanos from './components/Contactanos';
import Home from './components/Home';
import Menu from './components/Menu';
function App() {
  return (
    <Router>
      <div className="container mt-5">
        <Menu />
      <Switch>
         <Route path="/" exact>
            <Home />
        </Route>
        <Route path="/Conocenos" exact>
            <Conocenos />
        </Route>
        <Route path="/Contactanos" exact>
            <Contactanos />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
