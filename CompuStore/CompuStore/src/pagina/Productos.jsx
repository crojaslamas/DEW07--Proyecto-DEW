import { useState } from "react";
import productos from "../data/productos"; 
import ProductoCard from "../componentes/ProductosCard"; 

function Productos() {
  return (
    <div className="pagina-productos">
      <h1>Conoce nuestra variedad de productos que contamos para ti</h1>

      <div className="contenedor-productos">
       
        {productos && productos.map((producto) => (
          <ProductoCard
          key={producto.id}
          id={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
          descripcion={producto.descripcion}
          imagen={producto.imagen}
          />

))
}
      </div>
    </div>
  );
}

export default Productos;