//Ambito global

let constante = 2;

function calcularAreaTriangulo(base, altura){
    //ambito local = solamente dentro de esta funcion
    //ingresamos el codigo que se va a ejecutar, cuando invoquemos/llamemos/ejecutemos a esta funcion
    let area = base * altura / constante;

    //a) que es el "return", indica que va a devolver mi funcion
    //b) termina la ejecucion de mi funcion
    return area;
}

let resultado = calcularAreaTriangulo(50,15);
let resultado2 = calcularAreaTriangulo(100,25);

console.log(resultado);
console.log(resultado2);