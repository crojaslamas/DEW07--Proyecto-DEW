// ==============================================
// Menu.jsx - Barra de navegacion superior
// Aparece en todas las paginas del sitio
// ==============================================

import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { Reloj } from "./Reloj";

function Menu() {
  // Usamos el contexto del carrito para saber cuantos productos hay
  const { cantidad } = useContext(CarritoContext);

  return (
    <header className="menu">
      {/* Al hacer clic en el logo nos lleva a la pagina de inicio */}
      <NavLink to="/" className="logo-titulo">
        <h2 className="logo">COMPU-STORE</h2>
      </NavLink>

      <nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/productos">Productos</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>

        {/* Icono del carrito con la cantidad de productos */}
        <NavLink to="/carrito" className="icono-carrito">
          <img src="img/shop.png" alt="Carrito" />
          <span>{cantidad}</span>
        </NavLink>

        {/* Reloj digital que se actualiza cada segundo */}
        <Reloj />
      </nav>
    </header>
  );
}

export default Menu;
