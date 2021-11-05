//Pedir al usuario sus nombres, apellidos y edad cada uno por separado, el resultado deberia ser console.log, resumiendo los datos del usuario.

// let nombres = prompt("Cuales son tus nombres? ");
// let apellidos = prompt("Cuales son tus apellidos ");
// let edad = prompt("Cuantos años tienes? ");
// // let resultado = `${nombres} ${apellidos} ${edad}`;

// console.log(`tu nombre, apellido y edad es`,resultado)

// console.log(`Bienvenid@, tus nombres son: ${nombres} ${apellidos} y tu edad edad:  ${edad}`);

// Ejercicio 1

// Preguntarnos siempre.
// Que dato necesito?
// Como puedo tener esos datos?
// Esos datos estan en la forma que necesito?

let base = prompt("Cual es la base del triangulo");
let altura = prompt("Cual es la altura del triangulo");

//conviertiendo a texto o numero
let baseNumero = parseFloat(base);
let alturaNumero = parseFloat(altura);

let resultado = (baseNumero * alturaNumero)/2;

console.log(resultado);

//3. preguntar al usuario por dos numeros y mostrar el RESIDUO de la division

let num1 = +prompt("Ingresar primer numero");
let num2 = +prompt("Ingresar segundo numero");
let num3 = num1%num2;

console.log(`El residuo es ${num3}`);


