// Método Find
// entrega el primer elemento que cumpla con la condición
// tiene una condición en el retorno, a diferencia de map, por lo que retornará un booleano
// recibe un call back con i, num y arr

// para que un número sea impar, negamos la condición

const numeros = [1,2,3,4,5,6,7]

const primerNumeroImpar = numeros.find((num,i) =>{
    return num%2 !== 0;
})
console.log("primerNumeroImpar", primerNumeroImpar)
// retorna el primer elemento que cumpla con la condición dada // 
