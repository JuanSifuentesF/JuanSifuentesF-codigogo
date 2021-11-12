// window.console.log("Hi!");

//Info del navegador
console.log(`Info Navegador: ${window.navigator.userAgent}`);

//Cual es mi url
console.log(`URL: ${window.location}`);

navigator.geolocation.getCurrentPosition(function (ubicacion) {
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

let misItems = document.getElementsByClassName("lista_item");

//Array.from(htmlCollection), crea un arreglo

let arregloItems = Array.from(misItems);

console.log(arregloItems);

//anotacion importante acerca de forEach, map, filter, find
arregloItems.forEach(function (item, i, arreglo) {
  item.style.backgroundColor = "#5255";
  item.innerHTML = `Patata ${i}`;
  console.log("mostrando el arreglo", arreglo);
});

let miTexto = document.querySelector("#texto");

console.log(miTexto);

//querySelectorAll me da un NodeList
let boxes = document.querySelectorAll(".box");

console.log(boxes);

boxes.forEach(function (bx) {
  bx.innerHTML = `<p>Soy un párrafo</p>`;
});

console.log(boxes[0].innerHTML);

//CREAR ELEMENTOS

let series = [
  "Squid Game",
  "Pasion de Gavilanes",
  "Dark",
  "Billions",
  "Got",
  "Suits",
  "Mr robot",
  "House of Dragons",
  "Chernobyl",
  "Breaking Bad",
];

let divContenido = document.getElementById("contenido");

//createElement("etiqueta") : "p", "ul" , "h1" , "td"
let lista = document.createElement("ul");

//agregando ese elemento como hijo
//push a un elemento ya existente
divContenido.appendChild(lista);

let textoLI = "";
series.forEach(function (programaTv) {
  textoLI = textoLI + `<li>${programaTv}</li>`;
});

// console.log(textoLI);

lista.innerHTML = textoLI;

let imagen = document.createElement("img");

divContenido.appendChild(imagen);

//setAttribute("nombre_atributo","valor_atributo")
imagen.setAttribute("src", "https://picsum.photos/200/300");

//clases de CSS
//a un elemento le podemos aplicar varias clases
lista.classList.add("resaltado");
lista.classList.add("redondeado");
lista.classList.remove("resaltado");
