// window.console.log("Hi!");

//Info del navegador
console.log(`Info Navegador: ${window.navigator.userAgent}`);

//Cual es mi url
console.log(`URL: ${window.location}`);

navigator.geolocation.getCurrentPosition(function(ubicacion){
    console.log(ubicacion);
});

//Javascript a travez del objeto window
//window = pestaña del navegador

console.log(window.document);

//estoy capturando un elemento
let miTitulo = document.querySelector("h1");

console.log(miTitulo);

//innerHTML, es el contendio HTML de un elemento
miTitulo.innerHTML = "Hola soy un nuevo Titulo";

// EL HTML DENTRO DE LA ETIQUETA
console.log(miTitulo.innerHTML);

//Obtener un elemento
let miCaja = document.getElementById("caja");
console.log(miCaja);

//innerHTML, representa el contenido de un elemento
miCaja.innerHTML = "<h2> Titulo Caja </h2>";
miCaja.style.backgroundColor = "purple";
miCaja.style.color = "white";