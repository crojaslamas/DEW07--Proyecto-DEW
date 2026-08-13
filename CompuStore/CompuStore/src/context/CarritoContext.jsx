// ==============================================
// CarritoContext.jsx - Estado global del carrito
// Usa Context + useState para compartir datos en toda la app
// ==============================================

// Este archivo exporta el contexto y el provider juntos.
// Es un patron normal en proyectos de clase, por eso se desactiva
// la regla de "fast refresh" para este archivo.
/* eslint-disable react-refresh/only-export-components */

import { createContext, useState, useRef } from "react";

// Creamos el contexto (un "contenedor" donde guardamos los datos globales)
export const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  // carrito: arreglo con los productos agregados
  const [carrito, setCarrito] = useState([]);

  // toast: mensaje temporal que se muestra al agregar un producto
  const [toast, setToast] = useState(null);

  // timeoutRef: guarda el temporizador para poder cancelarlo si hace falta
  const timeoutRef = useRef(null);

  // Muestra el mensaje verde y lo oculta despues de 3 segundos
  function mostrarToast(mensaje) {
    clearTimeout(timeoutRef.current); // cancela un temporizador anterior
    setToast(mensaje);
    timeoutRef.current = setTimeout(() => setToast(null), 3000);
  }

  // Agregar un producto al carrito
  function agregarProducto(producto) {
    // Buscamos si el producto ya esta en el carrito (mismo id)
    const productoExistente = carrito.find((item) => item.id === producto.id);

    if (productoExistente) {
      // Si ya existe, solo aumentamos su cantidad en 1
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      // Si no existe, lo agregamos con cantidad inicial 1
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }

    // Mostramos la notificacion verde
    mostrarToast(`${producto.nombre} agregado al carrito`);
  }

  // Aumentar la cantidad de un producto
  function aumentarCantidad(id) {
    setCarrito(
      carrito.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  }

  // Disminuir la cantidad; si llega a 0, se elimina del carrito
  function disminuirCantidad(id) {
    setCarrito(
      carrito
        .map((item) =>
          item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
        )
        .filter((item) => item.cantidad > 0)
    );
  }

  // Eliminar un producto del carrito por completo
  function eliminarProducto(id) {
    setCarrito(carrito.filter((item) => item.id !== id));
  }

  // Calcular el total: suma precio * cantidad de cada producto
  const total = carrito.reduce(
    (suma, item) => suma + item.precio * item.cantidad,
    0
  );

  // Cantidad total de articulos (para el numerito del carrito)
  const cantidad = carrito.reduce((suma, item) => suma + item.cantidad, 0);

  // Entregamos todos los datos y funciones a cualquier componente
  // que use useContext(CarritoContext)
  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarProducto,
        aumentarCantidad,
        disminuirCantidad,
        eliminarProducto,
        total,
        cantidad,
        toast,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}
