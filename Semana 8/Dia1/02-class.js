//class = molde, plano o una fabrica
class Pokemon {
  //caracteristicas que tiene este plano
  Nombre;
  Tipo;
  Ataque;
  Defensa;
  PuntosVida;
  //metodos, directamente por su nombre
  //Toda clase va a tener un metodo constructor
  //este constructor se ejecuta automaticamente al momento de llamar a la clase
  constructor(nombre, tipo, ataque, defensa, puntosvda) {
    //se va a encargar de construir al objeto
    //this, hace refencia a si mismo
    this.Nombre = nombre;
    this.Tipo = tipo;
    this.Ataque = ataque;
    this.Defensa = defensa;
    this.PuntosVida = puntosvda;
    //primero se construye
    //segundo, ejecuta lo que le ponga despues.
    this.aparecer();
  }
  aparecer() {
    console.log(`Un ${this.Nombre}, salvaje apareció`);
  }
  atacar() {
    console.log(`${this.Nombre} ataca con ${this.Ataque}`);
  }
}
//instancia
let pokemon1 = new Pokemon("Pikachu", "Electico", 30, 20, 60);
let pokemon2 = new Pokemon("Dragonite", "Dragon", 70, 80, 120);

console.log(pokemon1.Tipo);
console.log(pokemon2.atacar());
