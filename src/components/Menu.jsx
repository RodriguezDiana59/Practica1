import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
function Menu() {
    return (
            <div className="btn-group">
            <Link to="./" className="btn btn-primary">Inicio</Link>
            <Link to="./Conocenos" className="btn btn-primary">Conocenos</Link>
            <NavLink to="./Contactanos" className="btn btn-primary">Contactanos</NavLink>
            </div>
    )
}

export default Menu
