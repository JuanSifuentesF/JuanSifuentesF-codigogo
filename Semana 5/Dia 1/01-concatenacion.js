let a = 1;
let b = "4";
let c = a + b;
console.log(typeof c);

let nombre = "Juan "

let apellido = "Sifuentes";

let nombreCompleto = nombre + apellido ;

console.log(nombreCompleto);

//TEMPLATE STRING / TEMPLATE LITERAL
//Backticks alt + 96
//${aca dentro, podemos poner codigo de JS}

let edad = 30;

let texto = `Hola soy ${nombre}${apellido} y soy de Lima, tengo ${edad}años`;

console.log(texto);

//PROMPT, capturar datos, del usuario
let cantidadMascotas = prompt(`Hola ${nombre}, cuantas mastocas tienes?`);
//Todo lo ingresado en un prompt es string
console.log(`Mascotas : ${cantidadMascotas}`);
console.log(typeof cantidadMascotas);

// let convertido = +cantidadMascotas;

// let convertido = parseInt(cantidadMascotas); Enteros
let convertido = parseFloat(cantidadMascotas); //Decimales

console.log(typeof convertido, convertido, "PATATA");


