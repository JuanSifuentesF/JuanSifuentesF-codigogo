    let edad = +prompt('Cual es tu edad?');

    // if(condicion)
    // condicionales trabajan con booleanos, true y false
    if (edad >= 18) {
        console.log('Si accedes a la primera dosis');
    }
    else if(edad >= 0 ){
        console.log('Noup, tienes que esperar');
    }
    
    else {
        console.log('Error al ingresar datos');
    }


