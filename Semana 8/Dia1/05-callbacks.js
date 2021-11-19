//1.- Recuerden que a una variable se le puede asignar casi calquier cosa incluyendo FUNCIONES

// console.log("1. estamos jugando y pedimos rappi");

// setTimeout(function () {
//   console.log("2. Esperar al Rappi hasta que llegue");
//   comer();
// }, 2000);

// const comer = function () {
//   console.log("3. Llega el Rappi y comemos");
// };

//console.log("3. llega el Rappi y comemos")

/**
 * tengo que buscar un registro de un alumno en una BD inmensa
 */

let alumnosDB = [
  "Cristofer",
  "Arturo",
  "Masami",
  "Juan",
  "Fred",
  "Nicolas",
  "Justin",
  "Ariana",
  "Glenda",
  "Graciela",
  "Melissa",
];
// fCallback va a ser la referencia de una funcion que vamos a pasar como parametro
const buscarAlumno = function (nombre, fCallback) {
  //para simular que va a demorar voy a utilizar un setTimeout
  //esta funcion retornara true o false, para indicar si encuentra el alumno
  setTimeout(function () {
    for (let i = 0; i < alumnosDB.length; i++) {
      if (alumnosDB[i] == nombre) {
        //hemos encontrado alumno
        fCallback(true);
        return; // cortar ejecucion de la funcion
      }
    }
    //si no la encontramos
    fCallback(false);
  }, 4000);
};

buscarAlumno("Melissa", function (existe) {
  if (existe == true) {
    console.log("El alumno existe");
  } else {
    console.log("El alumno no existe ERRROR");
  }
});
