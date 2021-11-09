//Inventarios

/*
*Una Bodega quiere hacer un inventario de sus productos.
*Actualmente vende 03 productores, gaseosa, leche, galletas.
*
* queremos saber por cada tipo de producto, cuantos tiene en existencia
*
* eso si, sabemos el total de productors pero no su cantidad correspondiente a cada tipo
*/

/**
 * Descomposicion
 * 
 * Manejamos 03 productos
 * Dice que sabemos el total de todo pero no por tipo
 * tendremos que preguntar por producto
 */

/**
 * a) Que datos necesito?
 * total de gaseosa + leche + galletas
 * contar por tipo
 * 
 * b) de donde obtengo esos datos?
 * se los pregunto al usuario, prompt
 * 
 * c) estan de la forma que necesito?
 * necesito contar 1x1, number
 */

let cantProductos = +prompt("Cuantos productos en total tienes?");

let gaseosa = 0;
let leche = 0;
let galletas = 0;

//patron, voy a preguntar una y otra vez

for(let i=0;i < cantProductos; i++){
    let producto = +prompt("Ingrese 1.Gaseosa 2.Leche 3.Galletas");
    switch(producto){
        case 1:
            gaseosa = gaseosa + 1;
            break;
        case 2:
            leche++;
            break;
        case 3:
            galletas++;
            break;
        default:
            alert("Numero erroneo");
                
    }
}

console.log(`Entotal hay:
                Gaseosa: ${gaseosa}
                Leche: ${leche}
                Galletas: ${galletas}`

);