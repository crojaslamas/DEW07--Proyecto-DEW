import { useContext } from "react";
import React, { useState, useEffect } from "react";
import { CarritoContext } from "../context/CarritoContext";
import "../App.css";

function Carrito() {

  const {carrito, aumentarCantidad, disminuirCantidad, eliminarProducto, total } = useContext(CarritoContext);

  const [horaCompra, setHoraCompra] = useState("")

 useEffect(() => {
    // Esta función se ejecutará SOLO una vez al cargar la página
    const f = new Date();
    let h = f.getHours();
    let m = f.getMinutes();
    let s = f.getSeconds();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    // Guardamos la hora fija en el estado
    setHoraCompra(h + ":" + m + ":" + s);
    }, []); // <--- El array vacío [] hace que esto no se repita
    
  return (

  <div className="pagina">

      <h1> Carrito de Compras </h1>

      {carrito.length === 0 ? (
        <h2> El carrito está vacío </h2>
      ) : ( <>
          {carrito.map(item => (
            <div className="fila-carrito" key={item.id}>
              <img src={item.imagen}  alt={item.nombre}/>
              <div>
                <h3> {item.nombre} </h3>
                <p> S/ {item.precio.toLocaleString('es-PE')} </p>
              </div>
              <button onClick={() => disminuirCantidad(item.id)}> - </button>
              <span>{item.cantidad}</span>
              <button onClick={() => aumentarCantidad(item.id) }> + </button>
              <button onClick={() => eliminarProducto(item.id) }> Eliminar </button>
            </div>

          ))}

          <h2> Total: S/ {total.toLocaleString('es-PE')} </h2>
          <p className="hora-texto">Hora de compra: <span>{horaCompra}</span></p>

        </>
      )}

    </div>

  );

}

export default Carrito;