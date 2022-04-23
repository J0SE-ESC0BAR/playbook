// Ejemplo 9: Uso del reduce
const numbers = [1, 2, 3, 4, 5]
const result = numbers.reduce((acumulador, item) =>{
    return acumulador = acumulador + item;
}, 0)
console.log("Ejemplo 9: Uso de reduce para calcular la suma de los elementos de una lista")
console.log(result)

//Otro ejemplo de reduce con string
const oracion = ['El','carro','es','gris'];
const res = oracion.reduce((acc, element) => {
    return acc+=' '+element;
},'');
console.log(res);
//otro ejemplo con obejtos
const objs = [
    {nombre: 'José', edad: 19},
    {nombre: 'Luis', edad: 18},
    {nombre: 'Ramon', edad: 21},
    {nombre: 'Reyna', edad: 14}
]

const promedio = objs.reduce((acc, element) => {
    acc += element.edad;
    return acc;
},0)
const elements = objs.length;
console.log('El promedio de edad es: '+promedio/elements);