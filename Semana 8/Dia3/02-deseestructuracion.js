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
  enceder: function () {
    console.log("tururu");
  },
};