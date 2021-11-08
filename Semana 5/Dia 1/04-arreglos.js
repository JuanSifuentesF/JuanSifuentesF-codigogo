//para declarar arreglos, necesitamos ponerlos entre []
//desde el primer elemento se cuenta desde 0,1,2...
//ese numero se conoce como posición, índice o index
let nombres = ['Masami', 'Oscar', 'Mauro', 'Melissa', 'Frank'];

//si deseo referenciar un elemento necesito su posicion
//nombre_arreglo[#];
console.log('Ella es: ', nombres[0]);

console.log(`los nombres de mis alum@s son: ${nombres[0]}, ${nombres[1]}, ${nombres[2]}, ${nombres[3]} `);

console.log(nombres);

//longitud es la cantidad de elementos
console.log(nombres.length);

let cofre=["gato", 100, true];

console.log(cofre);

//agregar items, al final de un arreglo
cofre.push('perrete', 'pinguino', 'jirafa');

console.log('cofre actualizado', cofre);