import { useState } from "react";

function Contacto() {
  const [mensaje, setMensaje] = useState("");

  function manejarSubmit(e) {
    e.preventDefault(); // evita recargar la página
    alert("Gracias por comunicarte con ByteStore. Te responderemos pronto.");
    e.target.reset();   // limpia los campos del formulario
    setMensaje("✅ Mensaje enviado correctamente"); // muestra feedback en pantalla
  }

  return (
    <>
      {/*encabezado*/}
      <section className="hero-pagina">
        <div className="contenedor">
          <span className="etiqueta">Estamos para ayudarte</span>
          <h1>Contáctanos</h1>
        </div>
      </section>

      {/* Sección de contacto */}
      <section className="contacto-seccion">
        <div className="contenedor-contacto">
          {/* Formulario */}
          <div className="contacto-formulario">
            <h2>Envíanos un mensaje</h2>
            <form id="formularioContacto" onSubmit={manejarSubmit}>
              <div className="fila">
                <div className="campo">
                  <label>Nombre</label>
                  <input type="text" className="campo-contacto" required />
                </div>
                <div className="campo">
                  <label>Apellido</label>
                  <input type="text" className="campo-contacto" required />
                </div>
              </div>

              <div className="campo">
                <label>Correo electrónico</label>
                <input type="email" className="campo-contacto" required />
              </div>

              <div className="campo">
                <label>Teléfono / WhatsApp</label>
                <input type="text" className="campo-contacto" required />
              </div>

              <div className="campo">
                <label>¿En qué podemos ayudarte?</label>
                <select className="campo-contacto" required>
                  <option value="">Seleccionar...</option>
                  <option>Consulta sobre productos</option>
                  <option>Consulta sobre sistemas</option>
                  <option>Soporte técnico</option>
                  <option>Instalación de programas</option>
                  <option>Otros</option>
                </select>
              </div>

              <div className="campo">
                <label>Mensaje</label>
                <textarea className="campo-contacto" rows="5" required></textarea>
              </div>

              <button type="submit" className="btn-enviar">
                Enviar mensaje
              </button>
            </form>

            {/* Mensaje opcional en pantalla */}
            {mensaje && <p className="mensaje-confirmacion">{mensaje}</p>}
          </div>

          {/* Información de contacto */}
          <div className="contacto-info">
            <h2>Información de contacto</h2>

            <div className="dato-contacto">
              <div className="icono celeste"><i className="bi bi-geo-alt"></i></div>
              <div>
                <h4>Dirección</h4>
                <p>Av. Garcilaso de la Vega 1337, Lima 15001, Perú</p>
              </div>
            </div>

            <div className="dato-contacto">
              <div className="icono rosa"><i className="bi bi-telephone"></i></div>
              <div>
                <h4>Teléfono</h4>
                <p>+51 949 520 382</p>
              </div>
            </div>

            <div className="dato-contacto">
              <div className="icono celeste"><i className="bi bi-envelope"></i></div>
              <div>
                <h4>Correo</h4>
                <p>info@compustore.pe</p>
              </div>
            </div>

            <div className="dato-contacto">
              <div className="icono rosa"><i className="bi bi-clock"></i></div>
              <div>
                <h4>Horario</h4>
                <p>Lun–Sáb · 8am – 7pm</p>
              </div>
            </div>

            

            <div className="mapa-contacto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.132710472375!2d-77.03630641585565!3d-12.055420280639481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c92ed7b3a703%3A0x5de309fa60dfb879!2spc%20Factory%20Real%20Plaza%20Centro%20C%C3%ADvico!5e0!3m2!1ses-419!2sus!4v1786265159188!5m2!1ses-419!2sus"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            
            <a href="https://wa.me/51949520382" target="_blank" className="btn-whatsapp">
              <i className="bi bi-whatsapp"></i> Escribir por WhatsApp
            </a>

          </div>
        </div>
      </section>
    </>
  );
}

export default Contacto;
