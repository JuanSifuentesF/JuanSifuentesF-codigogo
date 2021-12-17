//desestructuracion en arreglos

let frutas = ["Piña", "fresa", "naranja", "kiwi"];

// console.log(frutas[3]);
// console.log(frutas[2]);

//En una sola linea para cada item
let [fru1, fru2, fru3, fru4] = frutas;

// console.log(fru4);
// console.log(fru2);
// console.log(fru1);

//desestructuracion de objetos
let celular = {
  pantalla: 6.9,
  color: "negro",
  memoria: 4,
  camara: 12,
  marca: "motorola",
  encender: function () {
    console.log("tururu");
  },
};

//tengo que saber que propiedades tiene el objeto - requisito

// let { pantalla, encender, marca, memoria, color, camara } = celular;

let { pantalla, encender, marca, color } = celular;

console.log(pantalla);
encender();
console.log(color);
console.log(marca);

//que tengo una funcion que recibe las caracteristicas de ua persona

// let verificarPersona = (nombre, dni, edad) => {
//   console.log(nombre);
//   console.log(dni);
//   console.log(edad);
// };

// verificarPersona("Juan", "90890809", 25);


