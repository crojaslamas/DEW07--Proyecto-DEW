import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const imagenes = [
  "img/combo.jpg",
  "img/carrusel001.jpg",
  "img/carrusel003.jpg",
];

function Hero() {

    const navigate = useNavigate();
    const [indice, setIndice] = useState(0);

    useEffect(() => {
      const intervalo = setInterval(() => {
        setIndice((prev) => (prev + 1) % imagenes.length);
      }, 4000);
      return () => clearInterval(intervalo);
    }, []);

    const anterior = () =>
      setIndice((prev) => (prev - 1 + imagenes.length) % imagenes.length);

    const siguiente = () =>
      setIndice((prev) => (prev + 1) % imagenes.length);

  return (

    <section className="hero">
      <div className="hero-texto">
        <span className="etiqueta">Tecnología de vanguardia</span>

        <h1>Tu aliado en <span>tecnología</span>
          <br />y sistemas inteligentes
        </h1>
        
        <p>
          Tecnología para trabajo y entretenimiento.
          Sistemas empresariales, software,
          videojuegos y componentes para PC.
        </p>

        <div className="botones">
          <button onClick={() => navigate("/productos")} className="btn-productos">
        Ver productos
      </button>
        </div>
      </div>

      <div className="hero-imagen">
        <div className="carrusel">
          {imagenes.map((img, i) => (
            <img
              key={img}
              src={img}
              alt="Banner"
              className={i === indice ? "activa" : ""}
            />
          ))}

          <button className="carrusel-btn anterior" onClick={anterior}>&#10094;</button>
          <button className="carrusel-btn siguiente" onClick={siguiente}>&#10095;</button>

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

    </section>
  );
}

export default Hero;