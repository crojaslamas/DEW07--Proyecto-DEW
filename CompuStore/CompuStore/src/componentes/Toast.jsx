// ==============================================
// Toast.jsx - Notificacion temporal
// Muestra un mensaje verde unos segundos
// ==============================================

import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

function Toast() {
  // Leemos el mensaje actual del contexto del carrito
  const { toast } = useContext(CarritoContext);

  // Si no hay mensaje, no mostramos nada
  if (!toast) return null;

  return (
    <div className="toast">
      <span className="toast-icono">✓</span>
      {toast}
    </div>
  );
}

export default Toast;
