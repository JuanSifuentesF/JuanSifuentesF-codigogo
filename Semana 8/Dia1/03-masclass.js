class Animal {
  constructor(nombre, tamanio, velocidad) {
    this.Nombre = nombre;
    this.Tamanio = tamanio;
    this.Velocidad = velocidad;
  }
  correr() {
    console.log(`${this.Nombre},corre a ${this.Velocidad} m/s`);
  }
}

let Panda = new Animal("Panda", "Grande", 15);
console.log(Panda);

//extends, vamos a heredar las propiedades de animal
class Roedor extends Animal {
  constructor(nombre, tamanio, velocidad, saltar, roer) {
    super(nombre, tamanio, velocidad);
    this.Saltar = saltar;
    this.Roer = roer;
  }
  esconder() {
    console.log(`${this.Nombre} salta a ${this.Saltar} cm de altura`);
  }
}

let Raton = new Roedor("Mickey", "pequeño", 30, 50, "mucho");
console.log(Raton);
console.log(Raton.esconder());
console.log(Raton.correr());
