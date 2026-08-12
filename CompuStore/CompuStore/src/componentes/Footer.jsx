import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contenido">
        <div className="footer-col">
          <h3>COMPU-STORE</h3>
          <p>
            Tecnología confiable y de vanguardia para trabajo, estudio
            y entretenimiento.
          </p>
        </div>

        <div className="footer-col">
          <h4>Enlaces</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li><Link to="/carrito">Carrito</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contacto</h4>
          <p>Lima, Perú</p>
          <p>+51 999 999 999</p>
          <p>ventas@compustore.pe</p>
        </div>

        <div className="footer-col">
          <h4>Horario</h4>
          <p>Lun - Vie: 9:00 - 20:00</p>
          <p>Sáb: 9:00 - 14:00</p>
          <p>Dom: Cerrado</p>
        </div>
      </div>

      <div className="footer-base">
        <p>
          &copy; {new Date().getFullYear()} COMPU-STORE. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;