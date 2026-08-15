// ==============================================
// ProductosCard.jsx - Tarjeta de un producto
// Recibe los datos del producto por props
// ==============================================

import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

function ProductoCard({ id, nombre, precio, imagen, descripcion }) {
  // Obtenemos la funcion agregarProducto del contexto del carrito
  const { agregarProducto } = useContext(CarritoContext);

  return (
    <div className="card-producto">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p className="descripcion">{descripcion}</p>
      {/* toLocaleString('es-PE') formatea el precio con separador de miles */}
      <h4>S/{precio.toLocaleString('es-PE')}</h4>
      

      {/* Al hacer clic se agrega el producto al carrito */}
      <button onClick={() => agregarProducto({ id, nombre, precio, imagen })}>
        Añadir
      </button>
    </div>
  );
}

export default ProductoCard;
