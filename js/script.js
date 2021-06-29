// Inicio
// Entrada
let nombre = prompt('Ingresa tu nombre')

// Proceso
let saludar = 'Hola ' + nombre;
let indicacion01 = saludar + '.' + ' Te cuento, que este es un software para aprender contabilidad y Normativa IFRS, especialmente diseñado para estudiantes de contabilidad y auditoría.';
let indicacion02 = 'Por favor, responde a las siguientes preguntas para evaluar tu nivel inicial. No hagas trampa es muy importante que respondas con sinceridad.';
let nivelActual = 'Haz contestado a 3 de 3. Bien Hecho. Los siguientes modulos estarán disponibles proximamente.';
let despedida = 'Gracias por tu tiempo.';

// Salida
alert(indicacion01);
alert(indicacion02);
let pregunta01 = prompt('¿Qué significan las siglas IFRS');
let pregunta02 = prompt('¿Cuál es el objetivo de la IFRS?');
let pregunta03 = prompt('¿Nombra 3 ejemplos de IFRS?');
alert(nivelActual);
let correo = prompt('Si quieres que te hagamos llegar las novedades a tu correo. Puedes escribirlo en la casilla a continuación:');
alert(despedida)


// Comprobación de datos
console.log(nombre);
console.log(correo);
console.log(pregunta01);
console.log(pregunta02);
console.log(pregunta03);


// Fin