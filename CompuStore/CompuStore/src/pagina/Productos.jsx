// ==============================================
// Productos.jsx - Pagina de todos los productos
// Recorre el arreglo de productos y crea una tarjeta por cada uno
// ==============================================

import productos from "../data/productos";
import ProductoCard from "../componentes/ProductosCard";

function Productos() {
  return (
    <div className="pagina-productos">
      <h1>Conoce nuestra variedad de productos que contamos para ti</h1>

      <div className="contenedor-productos">
        {/* Map: por cada producto del arreglo se crea una tarjeta */}
        {productos.map((producto) => (
          <ProductoCard
            key={producto.id}
            id={producto.id}
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            precio={producto.precio}
            imagen={producto.imagen}
          />
        ))}
      </div>
    </div>
  );
}

export default Productos;
