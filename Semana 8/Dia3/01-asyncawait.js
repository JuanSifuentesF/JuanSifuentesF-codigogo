// const traerData = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Data Obtenida!!");
//     // reject("Error al obteer Data")
//   });
// };

// async, me devuelve una promesa en vez de retornarme el resultado directamete
const traerData = async () => {
  //aca adentro yo tengo mas codigo, haga operaciones un if, etc
  //y cuando tenga exito return si fallo throw
  //   return "Data Obtenida con async";
  throw "Error al obtener data con async";
};

const usarData = async () => {
  //cuando utilicemos await, tiene que esta dentro de una funcion y esa funcion tiene que tener async
  try {
    //intenta eso
    let rpta = await traerData();
    console.log(rpta);
  } catch (error) {
    //y si no te funciona ejecuta esto y me dices que ha pasado
    console.log(error);
  }
};
//16:01 video
usarData();
