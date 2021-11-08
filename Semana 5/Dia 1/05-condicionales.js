    let edad = +prompt('Cual es tu edad?');

    // if(condicion)
    // condicionales trabajan con booleanos, true y false
    // if (edad >= 18) {
    //     console.log('Si accedes a la primera dosis');
    // }
    // else if(edad >= 0 ){
    //     console.log('Noup, tienes que esperar');
    // }
    
    // else {
    //     console.log('Error al ingresar datos');
    // }

    if(edad >= 60){
        console.log('te toca Pfizer y te toca yaaaaa');
        // Y  &&
    }else if(edad>= 45 && edad <= 55){
        console.log('te toca Pfizer y te toca el finde');
        // O = ||
    }else if (edad == 18 || edad == 21){
        console.log('te toca sinopharm mañana');
    }else{
        console.log('Anda a yopongoelhombro.com');
    }

