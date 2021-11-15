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

// let pagoHora = +prompt("Ingresar pago por hora: ");
// let totalHoras = 0;

// for (let i = 1; i <= 6; i++) {
//   let cantDiaria = +prompt("Cuantas horas fueron hoy?: ");
//   totalHoras += cantDiaria;
// }

// console.log(
//   `El trabajador tiene ${totalHoras} horas trabajadas con un pago de ${
//     totalHoras * pagoHora
//   }`
// );

let productos = [
  {
    nombre: "Audifonos",
    clave: 1,
    materiaPrima: 20,
  },
  {
    nombre: "Funda para movil",
    clave: 2,
    materiaPrima: 10,
  },
  {
    nombre: "USB",
    clave: 3,
    materiaPrima: 15,
  },
  {
    nombre: "Mouse Gamer",
    clave: 6,
    materiaPrima: 30,
  },
  {
    nombre: "Teclado",
    clave: 4,
    materiaPrima: 120,
  },
  {
    nombre: "Graficaaaa",
    clave: 5,
    materiaPrima: 200,
  },
];

function calcularManoDeObra(clave, costoMP) {
  if (clave == 3 || clave == 4) {
    return costoMP * 0.75;
  } else if (clave == 1 || clave == 5) {
    return costoMP * 0.8;
  } else if (clave == 2 || clave == 6) {
    return costoMP * 0.85;
  }
}

function calcularCostoFabricacion(clave, costoMP) {
  if (clave == 2 || clave == 5) {
    return costoMP * 0.3;
  } else if (clave == 3 || clave == 6) {
    return costoMP * 0.35;
  } else if (clave == 1 || clave == 4) {
    return costoMP * 0.28;
  }
}

function calcularCostos(arrProductos) {
  for (let i = 0; i < arrProductos.length; i++) {
    //enfoquemonos en la mano de obra
    let costoMP = arrProductos[i].materiaPrima;
    console.log("MP", costoMP);
    let clave = arrProductos[i].clave;
    let costoMO = calcularManoDeObra(clave, costoMP);
    let costoCF = calcularCostoFabricacion(clave.costoMP);

    let cProduccion = costoMP + costoMO + costoCF;
    // costoMO + costoCF

    console.log(
      `el costo total de ${arrProductos[i].nombre} es S/ ${cProduccion}`
    );
  }
}

calcularCostos(productos);
