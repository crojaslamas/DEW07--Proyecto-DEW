import { createContext, useState, useRef } from "react";

export const CarritoContext = createContext();

export function CarritoProvider({ children }) {

  const [carrito, setCarrito] = useState([]);
  const [toast, setToast] = useState(null);
  const timeoutRef = useRef(null);

  function mostrarToast(mensaje) {
    clearTimeout(timeoutRef.current);
    setToast(mensaje);
    timeoutRef.current = setTimeout(() => setToast(null), 3000);
  }

  // Agregar producto
  function agregarProducto(producto) {

    const productoExistente = carrito.find(
      item => item.id === producto.id
    );

    if (productoExistente) {

      setCarrito(
        carrito.map(item =>
          item.id === producto.id
            ? {
                ...item,
                cantidad: item.cantidad + 1
              }
            : item
        )
      );

    } else {

      setCarrito([
        ...carrito,
        {
          ...producto,
          cantidad: 1
        }
      ]);

    }

    mostrarToast(`${producto.nombre} agregado al carrito`);
  }

  // Aumentar cantidad
  function aumentarCantidad(id) {

    setCarrito(
      carrito.map(item =>
        item.id === id
          ? {
              ...item,
              cantidad: item.cantidad + 1
            }
          : item
      )
    );

  }

  // Disminuir cantidad
  function disminuirCantidad(id) {

    setCarrito(

      carrito
        .map(item =>
          item.id === id
            ? {
                ...item,
                cantidad: item.cantidad - 1
              }
            : item
        )
        .filter(item => item.cantidad > 0)

    );

  }

  // Eliminar producto
  function eliminarProducto(id) {

    setCarrito(
      carrito.filter(item => item.id !== id)
    );

  }

  // Calcular total
  const total = carrito.reduce(
    (suma, item) =>
      suma + item.precio * item.cantidad,
    0
  );

  // Cantidad total de productos
  const cantidad = carrito.reduce(
    (suma, item) =>
      suma + item.cantidad,
    0
  );

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
        toast
      }}
    >

      {children}

    </CarritoContext.Provider>

  );
}