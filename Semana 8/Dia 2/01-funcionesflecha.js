//clasica

// function saludar(nombre) {
//   return `Hola soy, ${nombre}`;
// }

//anonima
const despedida = function (mensaje) {
  return `Bye ${mensaje}`;
};

// //Funcion flecha
// const saludar = (nombre) => {
//   return `Hola soy ${nombre}`;
// };

//si solo tengo 01 artumento para recibir
const saludar = (nombre) => `Hola soy ${nombre}`;

console.log(saludar("Daniel"));
console.log(despedida("hasta pronto"));

let Mouse = {
  nombre: "Miguelito",
  roer: function(){
    console.log(`${this.nombre} roe queso`);
  },
};

Mouse.roer();
