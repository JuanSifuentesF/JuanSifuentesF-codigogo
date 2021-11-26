let hornearTorta = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve("torta ready!");
      } else {
        reject("torta se quemo");
      }
    }, 5000);
  });
};

let preparaGlaseado = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Glaseado Listo!"); //va a ser exitoso
      reject("Se quemo el microondas");
    }, 3000);
  });
};

let cubrirTorta = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve("Torta Decorada");
      reject("Pide rappi no ma");
    }, 4000);
  });
};

hornearTorta()
  .then((tortaHorneada) => {
    console.log(tortaHorneada);
    //Exito
    //tuvimos exito con la torta, entonces vamos por la sgte.
    //retornar otra promesa
    return preparaGlaseado();
  })
  .then((glaseadoListo) => {
    // este .then es de prepararGlaseado
    console.log(glaseadoListo);
    return cubrirTorta();
  })
  .then((tortaDecorada) => {
    //este .then es cubrirTorta
    console.log(tortaDecorada);
  })
  .catch((tortaMala) => {
    //funciona para todas las promesas que estan detras
    console.log(tortaMala);
  });
