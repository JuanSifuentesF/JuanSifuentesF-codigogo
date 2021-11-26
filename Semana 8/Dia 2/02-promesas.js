const hornearTorta = () => {
  //no sabemos como ira el horneado de nuestra torta
  //y que eso demora en saber
  return new Promise((resolve, reject) => {
    //Aqui estoy forzando a que sea tru o false
    //comunmente tendriamos una operaciones, buscar un registro
    //obtener un elemento, obtener datos
    setTimeout(() => {
      let estado = false;
      if (estado == true) {
        resolve("La torta esta Ready");
      } else {
        reject("Pos se quemo :( ");
      }
    }, 5000);
  });
};

hornearTorta()
  .then((tortaHorneada) => {
    console.log(tortaHorneada);
  })
  .catch((tortaQuemada) => {
    console.log(tortaQuemada);
  });

// hornearTorta()
//   .then(function(tortaHorneada) {
//     console.log(tortaHorneada);
//   })
//   .catch(function(tortaQuemada) {
//     console.log(tortaQuemada);
//   });
