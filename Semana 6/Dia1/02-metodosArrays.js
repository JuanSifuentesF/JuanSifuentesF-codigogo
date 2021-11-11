let frutas = ["Fresa","Mango","Piña","lucuma"];

// for(let i = 0; i < frutas.length;i++){
//     console.log(frutas[i]);
// }

//recordar que los arreglos tambien son objetos
//forEach(function(){})
frutas.forEach(function(fru){
    console.log(fru);
});

//forEach por cada elemento que encuentre vas a ejectur una funcion, y cada vez que se ejecute esa funcion vas a recibir c/item en orden y ese item lo podemos utilizar dentro de la funcion.

let energia = [89,90,86,85,100];

//energia se va a dividir en 2
//como podria tener un nuevo arreglo con los valres que se representen la mitad de la energia por cada item

// let energiaCima=[];
// for(let i = 0; i < energia.length; i++){
//     energiaCima.push(energia[i]/2);
// }
// console.log(energiaCima);

// se crea un nuevo array pero con informacion transformada
let energiaCima = energia.map(function(energy){
    // let energiaTransformada = energy/2;
    // return energiaTransformada;
    return energy / 2;
});

console.log(energiaCima);

//FILTER
let conductores = [
    {
        nombre : "Jose",
        vacunado : true,
    },
    {
        nombre : "Glenda",
        vacunado : true,
    },
    {
        nombre : "Osmar",
        vacunado : false,
    },
    
];

let puedePasar = conductores.filter(function(driver){
    return driver.vacunado == true;
});

console.log(puedePasar);

let dniBD = ["42144143","12345678","76543210"];

let encontrado = dniBD.find(function(doc){
    // return doc == "12345678";
    if (doc.includes("45")){
        return doc;
    }
});

console.log(encontrado);