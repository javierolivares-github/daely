// Declación de variables
let nombre;
let saludar;
let error0 = 'Por favor ingresa un nombre de usuario.'
let error1 = 'Por favor ingresa una respuesta valida.';
let error2 = 'Por favor ingresa un número del 1 al 10.';
let error3 = 'Por favor ingresa un correo valido.'
let exito1 = 'Esta información será de gran utilidad para mejorar tu experiencia.';
let exito2 = 'Gracias por tu tiempo. Hasta pronto!'
let indicacion1 = ' Bienvenido(a) a Daely, una aplicación para aprender ingles de forma fácil y rápida.';
let indicacion2 = 'Antes de comenzar, por favor tomate un minuto para responder a las siguientes preguntas. Esto mejorará tu experiencia de usuario.';

let pregunta1;
let pregunta2;
let pregunta3;
let correo;


// Inicio
// Inicialización de variable nombre.
nombre = prompt('Por favor ingresa tu nombre o un nombre de usuario.');

// Validación de nombre.
if (nombre === '') {
  alert(error0);

} else {
  // Inicialización de variable saludar.
  saludar = 'Hola ' + nombre + '.';

  // Saludar y dar indicación inicial. 
  alert(saludar + indicacion1);
  
  // Indicación 2
  alert(indicacion2);
  
  // Pregunta 1.
  // Inicialización de variable pregunta1.
  pregunta1 = Number(prompt('1- Del 1 al 10 ¿Cuál es tu nivel de conocimiento del idioma Ingles?'));
  
  // Validación de pregunta 1.
  if(pregunta1 === ''){
    alert(error2);

  } else if(isNaN(pregunta1)) {
    alert(error2);

  } else if(pregunta1 < 1 || pregunta1 > 10) {
    alert(error2);

  } else {
    // Pregunta 2.
    // Inicialización de variable pregunta2.
    pregunta2 = prompt('2- ¿En qué aspectos del idioma Ingles te gustaría mejorar?');
    
    // Validación de pregunta 2.
    if (pregunta2 === '') {
      alert(error1);
    
    } else {
      // Pregunta 3.
      // Inicialización de variable pregunta 3.
      pregunta3 = prompt('3- ¿Cuál es tu objetivo con respecto al idioma Ingles?');
      
      // Validación de pregunta 3.
      if (pregunta3 === '') {
        alert(error1);
      
      } else {
        alert(exito1);

        // Petición de correo.
        // Inicialización de variable correo.
        correo = prompt('Esta aplicación aún esta en desarrollo, pero si quieres que te hagamos llegar las novedades a tu correo. Puedes escribirlo en la casilla a continuación:');
        
        // Validación de correo.
        if (correo === '') {
          alert(error3);
        
        } else {
          alert(exito2);
        };
      };
    };   
  };
}
  
// Comprobación de datos
console.log('Nombre: ' + nombre);
console.log('Correo: ' + correo);
console.log('Respuesta1: ' + pregunta1);
console.log('Respuesta2: ' + pregunta2);
console.log('Respuesta3: ' + pregunta3);


// Fin


