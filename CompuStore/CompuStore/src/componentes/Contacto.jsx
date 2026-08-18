import { useState } from "react";

function Contacto() {
  // Regex de validación
  const regexNombre   = /^[a-zA-Z\s]+$/;
  const regexCorreo   = /^[^@\s]+@[^@\s]+\.[a-z]{2,}$/;
  const regexTelefono = /^9\d{8}$/;
  const regexMensaje  = /^.{10,}$/; 

  // Estados
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [opcion, setOpcion] = useState("");
  const [mensajeTexto, setMensajeTexto] = useState("");
  const [error, setError] = useState("");
  const [exito, setExito] = useState("");

  // Validaciones con regex
  const nombreOk   = regexNombre.test(nombre);
  const apellidoOk = regexNombre.test(apellido);
  const correoOk   = regexCorreo.test(correo);
  const telefonoOk = regexTelefono.test(telefono);
  const mensajeOk  = regexMensaje.test(mensajeTexto);

  function clase(valor, ok) {
    if (valor === "") return "";
    return ok ? "ok" : "mal";
  }

  function manejarSubmit(e) {
    e.preventDefault();
    setError("");
    setExito("");

    if (!nombreOk || !apellidoOk || !correoOk || !telefonoOk || opcion === "" || !mensajeOk) {
      setError("Todos los campos obligatorios .");
      return;
    }

    setExito("✅ Mensaje enviado correctamente, " + nombre);
    setNombre("");
    setApellido("");
    setCorreo("");
    setTelefono("");
    setOpcion("");
    setMensajeTexto("");
    e.target.reset();
  }

  return (
    <>
      {/* Hero encabezado */}
      <section className="hero-pagina">
        <div className="contenedor">
          <h1>Contáctanos</h1>
          <p className="hero-pagina-subtitulo">
            Estamos para ayudarte. Cuéntanos tu consulta y un especialista
            te responderá a la brevedad.
          </p>
          
        </div>
      </section>

      {/* Sección de contacto */}
      <section className="contacto-seccion">
        <div className="contenedor">
          <div className="contenedor-contacto">
            
            {/* Formulario */}
            <div className="contacto-formulario">
              <h2>Envíanos un mensaje</h2>
              <form id="formularioContacto" onSubmit={manejarSubmit}>
                
                <div className="fila">
                  <div className="campo">
                    <label>Nombre</label>
                    <input 
                      className={`campo-contacto ${clase(nombre, nombreOk)}`} 
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      placeholder="Tu nombre" 
                    />
                    {nombre !== "" && (
                      <p className={"pista " + (nombreOk ? "ok" : "mal")}>
                        {nombreOk ? "Correcto" : "Solo letras y espacios"}
                      </p>
                    )}
                  </div>

                  <div className="campo">
                    <label>Apellido</label>
                    <input 
                      className={`campo-contacto ${clase(apellido, apellidoOk)}`} 
                      value={apellido}
                      onChange={(e) => setApellido(e.target.value)}
                      placeholder="Tu apellido" 
                    />
                    {apellido !== "" && (
                      <p className={"pista " + (apellidoOk ? "ok" : "mal")}>
                        {apellidoOk ? "Correcto" : "Solo letras y espacios"}
                      </p>
                    )}
                  </div>
                </div>

                <div className="campo">
                  <label>Correo electrónico</label>
                  <input 
                    className={`campo-contacto ${clase(correo, correoOk)}`} 
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    placeholder="tucorreo@ejemplo.com" 
                  />
                  {correo !== "" && (
                    <p className={"pista " + (correoOk ? "ok" : "mal")}>
                      {correoOk ? "Correcto" : "Formato de correo inválido"}
                    </p>
                  )}
                </div>

                <div className="campo">
                  <label>Teléfono / WhatsApp</label>
                  <input 
                    className={`campo-contacto ${clase(telefono, telefonoOk)}`} 
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="9XXXXXXXXX" 
                  />
                  {telefono !== "" && (
                    <p className={"pista " + (telefonoOk ? "ok" : "mal")}>
                      {telefonoOk ? "Correcto" : "Debe empezar con 9 y tener 9 dígitos"}
                    </p>
                  )}
                </div>

                <div className="campo">
                  <label>¿En qué podemos ayudarte?</label>
                  <select 
                    className={`campo-contacto ${opcion === "" ? "mal" : "ok"}`} 
                    value={opcion}
                    onChange={(e) => setOpcion(e.target.value)}
                  >
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
                  <textarea 
                    className={`campo-contacto ${clase(mensajeTexto, mensajeOk)}`} 
                    rows="5"
                    value={mensajeTexto}
                    onChange={(e) => setMensajeTexto(e.target.value)}
                    placeholder="Escribe tu mensaje aquí..." 
                  />
                  
                </div>

                {/* Mensajes dinámicos */}
                {error && <p className="error">{error}</p>}
                {exito && <p className="exito">{exito}</p>}

                <button type="submit" className="btn-enviar">
                  Enviar mensaje
                </button>
              </form>
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
        </div>
      </section>
    </>
  );
}

export default Contacto;