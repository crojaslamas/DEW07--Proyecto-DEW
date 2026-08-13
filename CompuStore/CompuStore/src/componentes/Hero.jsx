// ==============================================
// Hero.jsx - Seccion de bienvenida del inicio
// Incluye un carrusel de imagenes automatico
// ==============================================

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Lista de imagenes que se muestran en el carrusel
const imagenes = [
  "img/combo.jpg",
  "img/carrusel001.jpg",
  "img/carrusel003.jpg",
];

function Hero() {
  const navigate = useNavigate();

  // indice = posicion de la imagen que se esta mostrando
  const [indice, setIndice] = useState(0);

  // useEffect se ejecuta al cargar el componente.
  // Aqui creamos un temporizador que cambia de imagen cada 4 segundos.
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % imagenes.length);
    }, 4000);

    // Se limpia el temporizador cuando el componente deja de mostrarse
    return () => clearInterval(intervalo);
  }, []);

  // Funcion para ir a la imagen anterior (vuelve a la ultima si estamos en la primera)
  const anterior = () =>
    setIndice((prev) => (prev - 1 + imagenes.length) % imagenes.length);

  // Funcion para ir a la siguiente imagen (vuelve a la primera al terminar)
  const siguiente = () =>
    setIndice((prev) => (prev + 1) % imagenes.length);

  return (
    <section className="hero">
      {/* Texto de bienvenida */}
      <div className="hero-texto">
        <span className="etiqueta">Tecnología de vanguardia</span>

        <h1>
          Tu aliado en <span>tecnología</span>
          <br />
          y sistemas inteligentes
        </h1>

        <p>
          Tecnología para trabajo y entretenimiento. Sistemas empresariales,
          software, videojuegos y componentes para PC.
        </p>

        {/* Boton que redirige a la pagina de productos */}
        <div className="botones">
          <button onClick={() => navigate("/productos")} className="btn-productos">
            Ver productos
          </button>
        </div>
      </div>

      {/* Carrusel de imagenes */}
      <div className="hero-imagen">
        <div className="carrusel">
          {/* Solo la imagen activa tiene la clase "activa" y se muestra */}
          {imagenes.map((img, i) => (
            <img
              key={img}
              src={img}
              alt="Banner"
              className={i === indice ? "activa" : ""}
            />
          ))}

          {/* Flechas para cambiar de imagen */}
          <button className="carrusel-btn anterior" onClick={anterior}>&#10094;</button>
          <button className="carrusel-btn siguiente" onClick={siguiente}>&#10095;</button>

          {/* Puntos de navegacion: cada punto lleva a su imagen */}
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
