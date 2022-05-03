const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]
//----------forEach----------------
//Imprimir nombre del explorer (forEach)
console.log("\nEjercicio imprimir nombre con forEach: ")
explorers.forEach(explorer => console.log(explorer.name))
//Imprimir stack de cada explorer
console.log(`\nEjercicio imprimir stack con "forEach": `)
explorers.forEach(explorer => console.log(explorer.stack))

//-----------map--------------------
//Crear nueva lista con la lista de stacks de los explorers (map)
//Con funcion flecha let     ExplorersStaks = explorers.map(x => x.stack)
let ExplorersStaks = explorers.map(function(x) {
   return x.stack
});
console.log(`\nEjercicio imprimir nueva lista de staks con "map": `)
console.log(ExplorersStaks)

//------------Filter--------------
const esplorersContainingJS = explorers.filter((explorer) => 
explorer.stack.includes('js')
)
console.log(`\nEjercicio con "filter" imprimir explorers con "js": `)
console.log(esplorersContainingJS)
//------------FIND--------------
const ExplorerFind = explorers.find((explorer) => explorer.city=="CDMX")
console.log(`\nEjercicio con "FIND" imprimir primer explorer con ciudad "CDMX": `)
console.log(ExplorerFind)

//------------REDUCE--------------
const ExplorerReduce = explorers.reduce((acumulador, numero) =>{ 
  acumulador += numero.exercises_completed;
  return acumulador;
}, 0)

console.log(`\nEjercicio con "REDUCE" imprimir el numero de misiones terminadas: `)
console.log(ExplorerReduce)

//-----------SOME--------------
const ExplorerExercisesFinished = explorers.some((explorer) =>  explorer.missions.frontend.exercisesFinished === true)
console.log("\nEjercicio de SOME: \nAlguno de los explorers termino fronend verdadero: " + ExplorerExercisesFinished)

//-----------EVERY-------------
const ExplorerFinishedOnboarding = explorers.every((explorer) => explorer.missions.onboarding.isFinished === true)
console.log("\nEjercicio de Every: \nSon los explorers finlaizaron onboarding: " + ExplorerFinishedOnboarding)