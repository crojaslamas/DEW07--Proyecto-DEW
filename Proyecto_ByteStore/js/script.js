// Mensaje básico en consola
console.log("Bienvenido a ByteStore");

// Mensaje simple al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  console.log("Página de inicio cargada correctamente");
});

// Mensaje básico para el formulario de contacto
const formulario = document.getElementById("formularioContacto");

if (formulario) {
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Gracias por comunicarte con ByteStore. Te responderemos pronto.");
    formulario.reset();
  });
}
