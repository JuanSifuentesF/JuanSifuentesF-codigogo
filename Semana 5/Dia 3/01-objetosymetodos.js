let restaurant = {
    nombre: "La Nueva Palomino",
    platillos:[
        {
            id: 1,
            nombrePlatillo: "Sencca",
            precio:30,
        },
        {
            id: 2,
            nombrePlatillo: "Pepian de Cuy",
            precio:36,
        },
        {
            id: 3,
            nombrePlatillo: "Americano",
            precio:40,
        },
    ],

    mostrarPlatillos: function(){
        console.log(restaurant.platillos);
    }
}

// console.log(restaurant.platillos);

// restaurant.mostrarPlatillos();

let jugador = {
    nombre:"Dybala",
    nacionalidad:"Argentino",
    posicion:"volante, delantero",
    estatura: 1.85,
    correr: function(){
        console.log("corre corre correeee");
    },
    cabecear: function(){
        console.log("salta y cabecea la pelota");
    },
    patear: function(){
        console.log("pateaaaaaaa")
    },
};

jugador.correr();