import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

function ProductoCard({ id, nombre, precio, imagen, descripcion }) {

  const { agregarProducto } = useContext(CarritoContext);

  return (

    <div className="card-producto">

      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <h4>S/{precio.toLocaleString('es-PE')}</h4>
      <p className="descripcion">{descripcion}</p>
      <button onClick={() => agregarProducto({ id, nombre, precio, imagen })}>
        Añadir
      </button>

    </div>

  );

}

export default ProductoCard;