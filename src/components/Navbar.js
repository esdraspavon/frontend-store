import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";
const Navbar = props => {
  return (
    <nav className="navegacion">
      <Link to={"/nosotros"}>Nosotros</Link>
      <Link to={"/"}>Productos</Link>
      <Link to={"/contacto"}>Contacto</Link>
    </nav>
  );
};

export default Navbar;
