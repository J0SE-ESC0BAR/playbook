//Ejemplos de For Each

//Ejemplo 1, imprimir lista de nombres
const nombres = ["José", "Luis", "Daniel", "Rodrigo", "Jonatan"];
console.log("\nEjemplo 1: imprimiendo nombres de una lista")
nombres.forEach(nombre => console.log(nombre))

//Ejemplo 2, suma de numerso de lusta
let sum = 0;
const numeros = [10, 20, 5, 5, 5];
numeros.forEach(num => sum += num)
console.log("\nEjemplo 2: Cálculo de la suma de los elementos de la lista")
console.log(sum)

//Ejemplo 3, Imprimir en mayusculas una lista de cadena de caracteres
console.log("\nEjemplo 5: Imprimiendo la lista en mayúsculas")
nombres.forEach((element) => console.log(element.toUpperCase()))

