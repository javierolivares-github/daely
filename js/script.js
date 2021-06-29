// Inicio
// Entrada
let nombre = prompt('Ingresa tu nombre')

// Proceso
let saludar = 'Hola ' + nombre;
let indicacion01 = saludar + '.' + ' Bienvenido(a) a Daely, una aplicación para aprender ingles de forma fácil y rápida.';
let indicacion02 = 'Por favor, responde a las siguientes preguntas para evaluar tu nivel inicial. No hagas trampa es muy importante que respondas con sinceridad.';
let nivelActual = 'Haz contestado a 3 de 3. Bien Hecho. Los siguientes modulos estarán disponibles proximamente.';
let despedida = 'Gracias por tu tiempo.';

// Salida
alert(indicacion01);
alert(indicacion02);
let pregunta01 = Number(prompt('1- Del 1 al 10 ¿Cuál es tu nivel de conocimiento del idioma Ingles?'));
let pregunta02 = prompt('2- ¿En qué aspectos del idioma Ingles te gustaría mejorar?');
let pregunta03 = prompt('3- ¿Cuál es tu objetivo con respecto al idioma Ingles?');
alert(nivelActual);
let correo = prompt('Si quieres que te hagamos llegar las novedades a tu correo. Puedes escribirlo en la casilla a continuación:');
alert(despedida)


// Comprobación de datos
console.log(nombre);
console.log(pregunta01);
console.log(pregunta02);
console.log(pregunta03);
console.log(correo);


// Fin

