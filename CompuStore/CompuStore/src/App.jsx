import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./estilos/carpetas.css";

import Menu from "./componentes/Menu";
import Footer from "./componentes/Footer";
import Wsp from "./componentes/Wsp";

import Inicio from "./pagina/Inicio";
import Productos from "./pagina/Productos";
import ContactoPage from "./pagina/ContactoPage";
import Carrito from "./pagina/Carrito";


function App() {
  return (
    <div className="app">
      <Menu />

      <main className="contenido">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </main>

      <Wsp />
      <Footer />
    </div>
  );
}

export default App;