// Método Map
// se aplica a arreglos en JavaScript
// crea un nuevo arreglo // 

const numeros = [1,2,3,4,5,6,7]

/*const numerosPorDiez = numeros.map((num,i,arr) => {
    return num  * 10
})
console.log("numerosPorDiez",numerosPorDiez)
console.log("[Después] numeros es:", numeros)
*/
// retorna un nuevo arreglo y no modifica el anterior, 

// uso de retorno implicito para reducir lineas a solo una //
const numerosPorDiez = numeros.map(num => num*10)
console.log("numerosPorDiez", numerosPorDiez);
console.log("[Después] numeros es", numeros);