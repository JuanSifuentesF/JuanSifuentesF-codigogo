//objeto Date nos sirve para manejar fechas
let hoy = new Date();
//clases (class), plano, diseño, molde
//cuando invocamos una clase utilizamos la palabra new

console.log(hoy);

//Obtengo el año
console.log(hoy.getFullYear());

//Mes, Enero es 0 y Diciembre es 11
console.log(hoy.getMonth());

//Dia
console.log(hoy.getDate());

//Obtener el año, mes y dia
console.log(hoy.getDate(),hoy.getMonth(),hoy.getFullYear());

let navidad = new Date(2021,11,25);

console.log(navidad);

let hastasNavidad = navidad - hoy;

console.log(hastasNavidad);

let diasParaNavidad = hastasNavidad / 1000 / 60 / 60 / 24;

console.log(diasParaNavidad.toFixed());

