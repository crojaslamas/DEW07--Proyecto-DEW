import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

function Toast() {
  const { toast } = useContext(CarritoContext);

  if (!toast) return null;

  return (
    <div className="toast">
      <span className="toast-icono">✓</span>
      {toast}
    </div>
  );
}

export default Toast;
