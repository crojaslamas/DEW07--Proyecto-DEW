// ==============================================
// main.jsx - Archivo principal de la aplicacion
// Es el punto de entrada: React monta la app aqui
// ==============================================

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./App.css";
import { CarritoProvider } from "./context/CarritoContext";

// Se busca el elemento <div id="root"> que esta en index.html
// y dentro de el se renderiza toda la aplicacion
ReactDOM.createRoot(document.getElementById("root")).render(
  // StrictMode: ayuda a detectar errores en desarrollo
  <React.StrictMode>
    {/* BrowserRouter: habilita las rutas de la aplicacion */}
    <BrowserRouter>
      {/* CarritoProvider: estado global del carrito, compartido por toda la app */}
      <CarritoProvider>
        <App />
      </CarritoProvider>
    </BrowserRouter>
  </React.StrictMode>
);
