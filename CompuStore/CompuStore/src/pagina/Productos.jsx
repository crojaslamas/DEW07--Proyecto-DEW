import { useState, useEffect } from "react";
import productos from "../data/productos";
import ProductoCard from "../componentes/ProductosCard";
import { useNavigate } from "react-router-dom";

function Productos() {
  const navigate = useNavigate();

  const imagenes = [
    "img/imagen1.jpg",
    "img/imagen2.jpg",
    "img/imagen5.jpg",
  ];

  const [indice, setIndice] = useState(0);

   useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % imagenes.length);
    }, 4000);

    return () => clearInterval(intervalo);
  }, []);

   const anterior = () => {
    setIndice(
      (prev) => (prev - 1 + imagenes.length) % imagenes.length
    );
  };

  const siguiente = () => {
    setIndice(
      (prev) => (prev + 1) % imagenes.length
    );
  };

  return (
    <div className="pagina-productos">

      <div className="hero-imagen">
        <div className="carrusel">

 {imagenes.map((img, i) => (
            <img
              key={img}
              src={img}
              alt={`Banner ${i + 1}`}
              className={i === indice ? "activa" : ""}
              />
          ))}

          <button
            className="carrusel-btn anterior"
            onClick={anterior}
          >
            &#10094;
          </button>

 <button
            className="carrusel-btn siguiente"
            onClick={siguiente}
          >
            &#10095;
          </button>

          <div className="carrusel-dots">
            {imagenes.map((img, i) => (
              <span
                key={img}
                className={i === indice ? "dot activo" : "dot"}
                onClick={() => setIndice(i)}
              />
            ))}
          </div>

          </div>
      </div>

      <div className="titulo-productos">

        <h1 className="titulo-principal">
          <span>
            TU ALIADO EN TECNOLOGÍA Y SISTEMAS INTELIGENTES
          </span>
        </h1>

        <h2>
        DESCUBRE TODO LO QUE TENEMOS PARA TI
        </h2>
      <br /><br />
      </div>
      <div className="contenedor-productos">

        {productos &&
          productos.map((producto) => (
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
