// ==============================================
// Carrito.jsx - Pagina del carrito de compras
// Muestra los productos agregados y el total
// ==============================================

import { useContext, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";

function Carrito() {
  // Obtenemos del contexto los datos y funciones que necesitamos
  const {
    carrito,
    aumentarCantidad,
    disminuirCantidad,
    eliminarProducto,
    total,
  } = useContext(CarritoContext);

  // Guardamos la hora en que el usuario entra al carrito.
  // El inicializador de useState se ejecuta solo una vez (al cargar la pagina).
  const [horaCompra] = useState(() => {
    const f = new Date();
    let h = f.getHours();
    let m = f.getMinutes();
    let s = f.getSeconds();

    // Si el numero es menor que 10 le agregamos un cero adelante (09:05:03)
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    return h + ":" + m + ":" + s;
  });

  return (
    <div className="pagina">
      <h1>Carrito de Compras</h1>

      {/* Si el carrito esta vacio se muestra un mensaje */}
      {carrito.length === 0 ? (
        <h2>El carrito está vacío</h2>
      ) : (
        <>
          {/* Recorremos los productos del carrito */}
          {carrito.map((item) => (
            <div className="fila-carrito" key={item.id}>
              <img src={item.imagen} alt={item.nombre} />

              <div>
                <h3>{item.nombre}</h3>
                <p>S/ {item.precio.toLocaleString("es-PE")}</p>
              </div>

              {/* Botones para cambiar la cantidad */}
              <button onClick={() => disminuirCantidad(item.id)}>-</button>
              <span>{item.cantidad}</span>
              <button onClick={() => aumentarCantidad(item.id)}>+</button>

              {/* Boton para eliminar el producto */}
              <button onClick={() => eliminarProducto(item.id)}>Eliminar</button>
            </div>
          ))}

          {/* Total a pagar (suma de todos los productos) */}
          <h2>Total: S/ {total.toLocaleString("es-PE")}</h2>
          <p className="hora-texto">
            Hora de compra: <span>{horaCompra}</span>
          </p>
        </>
      )}
    </div>
  );
}

export default Carrito;
