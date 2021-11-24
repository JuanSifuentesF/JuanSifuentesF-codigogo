//Funcion flecha
const saludar = (nombre) => {
  return `Hola soy ${nombre}`;
};
//si es algo sencillo directamente puede indicar en la misma linea lo que se va a retornar
//const saludar = nombre => `Hola soy ${nombre}`;

console.log(saludar("Daniel"));

let Mouse = {
  nombre: "Miguelito",
  roer: function () {
    console.log(`${this.nombre} roe queso`);
    console.log(this);
  },
};

Mouse.roer();

//No usen funciones flecha como metodos de un objeto, no funciona el this

//Afuerita de un objeto utilicemos funciones flecha

// video 1510 - 33:45