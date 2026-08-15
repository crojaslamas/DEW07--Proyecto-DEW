// ==============================================
// Inicio.jsx - Pagina principal (Home)
// Muestra el Hero y los productos destacados
// ==============================================

import Hero from "../componentes/Hero";
import ProductoCard from "../componentes/ProductosCard";

function Inicio() {
  return (
    <>
      {/* Seccion de bienvenida con el carrusel */}
      <Hero />

      {/* Seccion de productos destacados */}
      <section className="productos">
        <h2>Productos Destacados</h2>

        <div className="contenedor-productos">
          {/* Cada ProductoCard es una tarjeta con los datos del producto */}
          <ProductoCard nombre="Laptop ASUS S16" descripcion="Laptop ASUS S16 con procesador Intel Core i7, 16GB de RAM y 512GB SSD. Ideal para trabajo y entretenimiento." precio={3599} imagen="/img/asus-s16.webp" />
          <ProductoCard nombre="Lenovo LOQ" descripcion="Laptop Lenovo LOQ con procesador AMD Ryzen 7, 16GB de RAM y tarjeta gráfica NVIDIA RTX 3050. Ideal para gaming." precio={7599} imagen="/img/lenovo-loq.avif" />
          <ProductoCard nombre="Ryzen 7" descripcion="Procesador AMD Ryzen 7 con 8 núcleos y 16 hilos.  Ideal para estudiantes con tareas de alto rendimiento y gaming." precio={2399} imagen="/img/ryzen7.avif" />
          <ProductoCard nombre="Teclado Logitech" descripcion="Teclado mecánico Logitech con switches Cherry MX. Ideal para gaming y productividad." precio={899} imagen="/img/logitech.webp" />
        </div>
      </section>
    </>
  );
}

export default Inicio;
