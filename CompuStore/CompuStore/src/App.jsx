// ==============================================
// App.jsx - Componente principal
// Define las rutas (paginas) de la aplicacion
// ==============================================

import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./estilos/carpetas.css";

// Componentes comunes (aparecen en todas las paginas)
import Menu from "./componentes/Menu";
import Footer from "./componentes/Footer";
import Wsp from "./componentes/Wsp";
import Toast from "./componentes/Toast";

// Paginas del sitio
import Inicio from "./pagina/Inicio";
import Productos from "./pagina/Productos";
import ContactoPage from "./pagina/ContactoPage";
import Carrito from "./pagina/Carrito";

function App() {
  return (
    // Contenedor principal que ayuda a que el footer quede siempre abajo
    <div className="app">
      {/* Menu de navegacion: aparece en todas las paginas */}
      <Menu />

      {/* Contenido de la pagina segun la ruta actual */}
      <main className="contenido">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </main>

      {/* Boton flotante de WhatsApp */}
      <Wsp />

      {/* Notificacion verde al agregar productos al carrito */}
      <Toast />

      {/* Pie de pagina */}
      <Footer />
    </div>
  );
}

export default App;
