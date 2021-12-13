// const traerData = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Data Obtenida!!");
//     // reject("Error al obteer Data")
//   });
// };

// async, me devuelve una promesa en vez de retornarme el resultado directamete
const traerData = async () => {
  //aca adentro yo tengo mas codigo, haga operaciones un if, etc
  //y cuando tenga exito return, si fallo throw
  //   return "Data Obtenida con async";
  throw "Error al obtener data con async"; //throw = reject
};

// traerData()
//   .then((rpta) => console.log(rpta))
//   .catch((error) => console.log(error));

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

// usarData();

const traerUsuarios = async () => {
  try {
    let respuesta = await fetch("https://reqres.in/api/users?page=2");
    let datos = await respuesta.json();
    console.table(datos.data);
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
};
traerUsuarios();
