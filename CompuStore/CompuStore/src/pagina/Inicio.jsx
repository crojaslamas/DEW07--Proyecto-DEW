import Hero from "../componentes/Hero";
import ProductoCard from "../componentes/ProductosCard";

function Inicio() {

  return (
    <>
      <Hero />
      <section className="productos">

        <h2>Productos Destacados</h2>
        <div className="contenedor-productos">
          <ProductoCard nombre="Laptop ASUS S16" descripcion="Laptop ASUS S16 con procesador Intel Core i7, 16GB de RAM y 512GB SSD. Ideal para trabajo y entretenimiento." precio={3599} imagen="/img/asus-s16.webp" />
          <ProductoCard nombre="Lenovo LOQ" descripcion="Computadora de escritorio con procesador Intel Core i5, 16GB de RAM y 1TB HDD. Perfecta para gaming y productividad." precio={7599} imagen="/img/lenovo-loq.avif"  />
          <ProductoCard  nombre="Ryzen 7" descripcion="Procesador AMD Ryzen 7 9800X3D con 8 núcleos y 16 hilos. Ideal para tareas de alto rendimiento y gaming." precio={2399}  imagen="/img/ryzen7.avif" />
          <ProductoCard nombre="Teclado Logitech" descripcion="Teclado mecánico Logitech G512 con retroiluminación RGB y switches GX Blue. Perfecto para gamers y mecanógrafos." precio={899}  imagen="/img/logitech.webp" />
        </div>
      </section>
    </>

  );

}

export default Inicio;