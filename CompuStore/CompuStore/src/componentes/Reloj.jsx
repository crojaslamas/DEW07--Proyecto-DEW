import { useState, useEffect } from "react";

export function Reloj() {
  const [tiempo, setTiempo] = useState(new Date());

  useEffect(() => {
    // Actualiza la hora cada 1000ms (1 segundo)
    const intervalo = setInterval(() => {
      setTiempo(new Date());
    }, 1000);

    // Limpia el intervalo si el componente deja de mostrarse
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="reloj-box">
      {tiempo.toLocaleTimeString('es-PE', { hour12: false })}
    </div>
  );
}