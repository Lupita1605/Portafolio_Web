// Fig. 10.12: ImagenAleatoria2.js
// Selección de imágenes al azar usando arreglos
var imgIcono;
var imagenes = [ "Imagen1", "Imagen2", "Imagen3", "Imagen4", "logo" ];
var descripciones = [ 
   "Primera imagen", 
   "Segunda imagen", 
   "Tercera imagen", 
   "Cuarta imagen", 
   "Logo" 
];

// elegir una imagen al azar y su descripción correspondiente, después modificar
// el elemento img en el cuerpo del documento
function elegirImagen()
{
   var indice = Math.floor( Math.random() * imagenes.length );
   imgIcono.setAttribute( "src", "../Imagenes/" + imagenes[ indice ] + ".png" );
   imgIcono.setAttribute( "alt", descripciones[ indice ] );
} // fin de la función elegirImagen

// registra el manejador de eventos de clic de imgIcono
function iniciar()
{
   imgIcono = document.getElementById( "imagen" );
   imgIcono.addEventListener( "click", elegirImagen, false );
   elegirImagen(); // Ejecutar una vez al cargar la página
} // fin de la función iniciar

window.addEventListener( "load", iniciar, false );