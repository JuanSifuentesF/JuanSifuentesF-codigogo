// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(`iterador ${i}`);

// for (let j = 0; j < 5; j++) {
//   console.log(j);
// }
// console.log(`iterador J ${j}`); //esto da error

//RESUMEN NO USEN VAR, AL MENOS UN LET

//cuando son const que tienen valores, se tienen la convencion de poner el nombre en MAYUSCULAS
const PI = 3.1415;

// PI = 40; //no podemos cambiar una variable creada con const

console.log("Mostrando valor de: ", PI);

//Una variable puede refenciar casi cualquier cosa
//Puede referenciar, string, number, booleeans, arrays, objetos y funciones.

let saludar = function () {
  console.log("Debes de despertar mas temprano");
};

saludar();

const despedirme = function () {
  console.log("Chaufa");
};

despedirme();
//Si una variable que almacene lo que sea que NO VA A A CAMBIAR, utilizar CONST