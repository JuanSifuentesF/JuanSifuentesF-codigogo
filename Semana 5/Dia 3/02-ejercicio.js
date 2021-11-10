/**
 * Ejercicio
 * 
 * Tenemos 02 tipos de hamburguesa, Una simple y una doble
 * 
 * Cree un algoritmo que permita pedir "X" hamburguesas simples o dobles y despues dar el total a pagar segun el pedido
 * 
 * La hamburguesa simple cuesta 5 soles.
 * La hamburguesa doble cuesta 9 soles. 
 */

/**
 * a) Que datos necesito?
 * cantidad de simples
 * cantidad de dobles
 * precio de las simples
 * precio de las dobles
 * variable que me diga que ya voy a finalizar el pedido
 * (pedido 1 x 1)
 * b) de donde obtengo esos datos?
 * precio en variables porque ya lo tenemos
 * cantidad de dobles y simples, preguntamos al usuario si finaliza tambien
 * preguntamos al usuario
 * 
 * c) estan de la forma que necesito?
 * cantidades esto tiene que ser numerico
 */

let precioSimple = 5;
let precioDoble = 9;

let cantidadSimples = 0;
let cantidadDobles = 0;
//finalizar me indicara si termino el pedido
//si es true, significa que ya no agregare mas hamburguesas
let finalizar = false;

do {
    //codigo a ejecutar
    let eleccion = +prompt("Ingrese 1. para una Simple, 2. para una Doble y 3 para finalizar el pedido: ")
    switch(eleccion){
        case 1:
            console.log("Una simple!!!!")
            cantidadSimples ++;
            break;
        case 2:
            console.log("Una doble!!!!")
            cantidadDobles ++;
            break;
        case 3:
            finalizar = true;
            break;
        default:
            console.log("Opcion Incorrecta")
    }
} while (finalizar == false)

let total = (precioSimple*cantidadSimples) + (precioDoble*cantidadDobles);

console.log(`El total a pagar será de: ${total} soles por ${cantidadSimples} hamburguesas Simples y por ${cantidadDobles} por hamburguesas Dobles`);