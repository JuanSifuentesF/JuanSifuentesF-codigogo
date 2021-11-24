const hornearTorta = () => {
  //no sabemos como ira el horneado de nuestra torta
  //y que eso demora en saber
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let estado = true;
      if (estado == true) {
        resolve("La torta esta Ready");
      } else {
        reject("Pos se quem :( ");
      }
    }, 5000);
  });
};
