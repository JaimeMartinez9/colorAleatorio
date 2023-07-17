// Seleccionar los elementos del DOM.
const boton = document.querySelector('button');
const color = document.getElementById('color');
// Defino la función y le doy un nombre 'generarColorHexAleatorio'.
function generarColorHexAleatorio() {

  // Defino la cadena de caracteres con todos los digitos posibles para mi color hexadecimal.
  let digitos = '0123456789ABCDEF';

  // Defino una variable para guardar el color hexadecimal que vamos generando.
  let colorHex = '#';

  /* bucle for con 6 iteraciones para generar los 6 dígitos de mi color hexadecimal.
  con esto generamos un indice aleatorio con metodo Math.random y Math.floor */
  for (let i = 0; i < 6; i++) {
    let indiceAleatorio = Math.floor(Math.random() * 16);

    // cojo el valor actual del color "los digitos que ya hemos agregado", y agregamos un digito nuevo. 
    colorHex += digitos[indiceAleatorio];
  }

  return colorHex;
};
// para que con un Click se ejecute nuestra función anterior necesitamos a 'addEventListener'. 
// defino otra función directamente pasándola como segundo argumento.
boton.addEventListener('click', function() {
// llamo a la función para obtener el color aleatorio.
  let colorAleatorio = generarColorHexAleatorio();

  // Actualizar el texto.
  color.textContent = colorAleatorio;

  // Actualizar el color de fondo.
  document.body.style.backgroundColor = colorAleatorio;
});

