// Método ForEach
// se aplica a arreglos en JavaScript.
// usa un callback num, i
// Recibe una función de devolución de llamada como parámetro para ejecutar en cada elemento del arreglo
// no tiene retorno

const numeros = [1, 2, 3, 4, 5,6,7];
console.log("[ANTES] numeros es:", numeros)

// multiplicar por 10 //

const numerosPorDiez = []

numeros.forEach((num) => {
    const numPorDiez = num * 10;
    numerosPorDiez.push(numPorDiez);
})
console.log("[Después] numeros es", numeros);
console.log("numerosPorDiez", numerosPorDiez);
