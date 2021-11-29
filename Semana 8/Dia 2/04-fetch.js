//PETICION DE TIPO GET
fetch("https://reqres.in/api/users?page=2")
  .then((respuesta) => {
    // console.log(respuesta);
    return respuesta.json(); //parsea de texto a JS
  })
  .then((gatos) => {
    // console.log(gatos);
  });

// POST - crear

let nuevoUsuario = {
  name: "Daniel de la cruz",
  job: "BOSS",
};

//headers - cabeceras - guia de remision
let cabecera = {
  method: "POST", //Metodo HTTP, POST PUT DELETE, GET
  headers: {
    //Que info envio, de que tipo para que el backeng sepa como procesarlo
    "Content-type": "application/json",
  },
  body: JSON.stringify(nuevoUsuario),
  //data, carga, pero hay que transformarlo a JSON
};

fetch("https://reqres.in/api/users", cabecera)
  .then((respuesta) => {
    return respuesta.json();
  })
  .then((usuarioCreado) => {
    console.table(usuarioCreado);
  })
  .catch((error)=>{
    console.log(error);
  });
