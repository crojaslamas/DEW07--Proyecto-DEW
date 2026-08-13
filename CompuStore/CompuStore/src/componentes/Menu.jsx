import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { Reloj } from './Reloj';

function Menu() {
  const { cantidad } = useContext(CarritoContext);
  const [open, setOpen] = useState(false); // estado para abrir/cerrar menú

  return (
    <header className="menu">
      {/* Logo */}
      <NavLink to="/" className="logo-titulo">
        <h2 className="logo">COMPU-STORE</h2>
      </NavLink>

      {/* Botón hamburguesa */}
      <button 
        className={`hamburguesa ${open ? "open" : ""}`} 
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Menú colapsable */}
      <nav className={`nav-links ${open ? "show" : ""}`}>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/productos">Productos</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
        <NavLink to="/carrito" className="icono-carrito">
          <img src="img/shop.png" alt="Carrito" />
          <span>{cantidad}</span>
        </NavLink>
        <Reloj />
      </nav>
    </header>
  );
}

export default Menu;
