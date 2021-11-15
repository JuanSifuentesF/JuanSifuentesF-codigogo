//Para esta parte usar if y for

// /**
//  * Ej1,
//  * Crear una funcion que reciba un arreglo y un nombre
//  * Si el nombre existe dentro de la funcion retornar la posicion del nombre encontrado, caso de no encontrarlo retornar -1
//  *
//  * Tiempo aprox unos 5 minutos
//  *
//  */
// let nombres = ["arturo","pedro","jorge","alex","david"];

// let buscarNombre = prompt("Ingresar nombre");

// function BuscaName (lista, nomb){;
//     for(i = 0;i<nombres.length;i++){
//         if(nomb == lista[i]){
//             let mensaje =`el nombre ubicado se encuentra en: ${i}`;
//             return mensaje;
//         }
//     }
//     return -1;
// }

// console.log(BuscaName(nombres,buscarNombre));

/**
 * Como sabe la sunat si un ruc es valido??
 *
 *
 */

//sumar arreglos
// let numeros = [1, 2, 3, 10, 20];

// function sumarNumeros(a, b) {
//   let totalNumeros = 0;
//   for (let i = 0; i < numeros.length; i++) {
//     totalNumeros =  a + b
//   }
//   return totalNumeros;
// }

// console.log("El total es: ",sumarNumeros(20,10));

// //sumar arreglo mixto
// let arregloMixto = ["4", 5, 2, "6", 10];

// function sumaArregloMixto (arregloMix){
//     let sumaTotal = 0;
//     for (let i = 0 ; i < arregloMixto.length ; i ++){
//         sumaTotal += Number(arregloMix[i])
//     }
//     return sumaTotal
// }

// console.log("La suma total es: ",sumaArregloMixto(arregloMixto))


//sumar unicamente numeros positivos
// let numeros = [1, -2, 3, 10, -5];



// Buscar la cantidad de palabras del siguiente arreglo
// let palabras = ["perro", "gato", "leon", "dragon", "perro", "gato","gato"];

//EJERCICIO RUC

// function verificarRUC(ruc) {
//   //verificamos que el ruc tenga 11 digitos
//   if (ruc.length == 11) {
//     //es correcto
//     //porque eventualmente en este bloque de codigo retornare un true
//     let factorChequeo = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
//     let total = 0;
//     for (let i = 0; i < factorChequeo.length; i++) {
//       let prod = ruc[i] * factorChequeo[i];
//       total += prod;
//     }
//     let modulo = total % 11;
//     let verificador = 11 - modulo;
//     if (verificador == ruc[10]) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(verificarRUC("20100128056"));


