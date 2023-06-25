// Método Filter //
// se crea un nuevo array con todos los elementos que cumplan una condición //
// se aplica a array
// retorna un nuevo array

const numeros = [1,2,3,4,5,6,7]
/*
const numerosPares = numeros.filter((num,i,arr) => {
    return (num % 2 === 0); // se dejan los elementos que cumplan con la condición
})
*/

//uso de retorno implicito
const numerosPares = numeros.filter(num => num % 2 === 0);
console.log("numerosPares", numerosPares)

// si no hay casos verdaderos, retorna un arreglo vacío

numerosDivisiblespor20 = numeros.filter(num => num % 20 === 0);
console.log("numerosDivisiblespor20", numerosDivisiblespor20);

// retorno un nuevo arreglo con todos los elementos que calcen con los elementos que cumplan la condición