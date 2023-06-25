// Tarea 6
// 1.
// mostrar la secuencia de fibonacci:
// a. Entre los números 0 y 1000.
// b. Números pares entre 0 y 1000.
// c. Números impares entre 0 y 1000

// Fibonacci menores a 1000
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2); // funcion que calcula fibonacci
}

console.log("Secuencia de Fibonacci:");
let i = 0;
let numFibonacci = 0; // inicializo
while (numFibonacci < 1000) {      // numeros menores a 1000
  numFibonacci = fibonacci(i);
  if (numFibonacci < 1000) {
    console.log(numFibonacci); // mostrar
  }
  i++;
}

// Numeros pares de la secuencia de Fibonacci menores a 1000
console.log("Números pares de la secuencia de Fibonacci menores a 1000:");
i = 0;
numFibonacci = 0; // inicializo
while (numFibonacci < 1000) {
  numFibonacci = fibonacci(i);
  if (numFibonacci % 2 === 0 && numFibonacci < 1000) {  // numeros menores a 1000 y divisibles por 2 ya que pide los pares
    console.log(numFibonacci);  //mostrar
  }
  i++;
}

//Números impares de la secuencia de Fibonacci menores a 1000
console.log("Números impares de la secuencia de Fibonacci menores a 1000:");
i = 0;
numFibonacci = 0; // inicializo
while (numFibonacci < 1000) {
  numFibonacci = fibonacci(i);
  if (numFibonacci % 2 !== 0 && numFibonacci < 1000) { // numeros menores a 1000 y que no sean divisibles por 2 ya que pide los impares
    console.log(numFibonacci); // mostrar
  }
  i++;
}

// 2. Retornar arreglo en mayúsculas

// arreglo "pokemon"
let pokemon = [
  'Pikachu',
  'Charmander',
  'Bulbasaur',
  'Squirtle'
];

// nuevo arreglo con mayusculas 
let pokemonUpper = pokemon.map(function(pokemon) { // el metodo map contiene una funcion para poner en máysuculas los elementos de un arreglo
  return pokemon.toUpperCase();
});

// mostrar
console.log(pokemonUpper);

// 3. del siguiente arreglo de objetos retornar un pokemon de tipo fuego (debe retornar Charmander, Charizard y Charmeleon)

let pokemontipo = [  // se creó un nuevo nombre ya que no permitía utilizar pokemon de nuevo
  {
    nombre: 'Pikachu',
    tipo: 'Electrico'
  },
  {
    nombre: 'Charmander',     // se debe retornar Charmander
    tipo: 'Fuego',    
  },
  {
    nombre: 'Bulbasaur',
    tipo: 'Planta'
  },
  {
    nombre: 'Squirtle',
    tipo: 'Agua'
  },
  {
    nombre: 'Charmeleon',   // se debe retornar Charmeleon
    tipo: 'Fuego'
  },
  {
    nombre: 'Weedle',
    tipo: 'bicho'
  },
  {
    nombre: 'Charizard', // se debe retornar Charizard
    tipo: 'Fuego'
  }
];

let pokemonTipoFuego = pokemontipo.filter(pokemon => pokemon.tipo === 'Fuego'); // el filter permite "filtrar" bajo alguna condición,
                                                                               // en este cacho es que sea de fuego
console.log(pokemonTipoFuego); // mostrar un arreglo con Charmander, Charmeleon y Charizard

