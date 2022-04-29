//Ejercicio 1: Clase vacía
console.log("Ejercicio 1: Clase vacía")
class Vehiculo{

}
//Ejercicio 2: Crear objeto apartir de una clase
const myVehiculo = new Vehiculo() // Se Puede crear muchos objetos
console.log("Ejercicio 2: Crear objeto apartir de una clase")

//Ejercicio 3: Instanciar un objeto con atributos
class Student {

    //El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto.
    constructor(name,age,subjects){
        this.name = name
        this.age = age
        this.subjects = subjects
    }
}
// Crear un objeto de la clase Student (esto se le llama instanciación)
console.log("Ejercicio 3: Instanciar un objeto con atributos")
const joseStudent = new Student('José',19,['NodeJs','Python'])
console.log(joseStudent)

//Ejercicio 4: metodos en los objetos
class Repository {
    constructor(name, author, lenguage, stars){
        this.name = name
        this.author = author
        this.lenguage = lenguage
        this.stars = stars
    }
    getInfo(){// es una función que ejecutará cualquier objeto instanciado de esta clase
        return `Repository ${this.name} has ${this.stars} stars`
    }
}
console.log('Ejercicio 4: Metodos en los objetos')
const myRepo = new Repository('LanuchX','JoséEscobar','js',100)
console.log(myRepo.getInfo())

//Ejercicio 5: Atributos con valores por defecto

class PullRequest{
    constructor(repo, title, lines_changed){
        this.repo = repo
        this.title = title
        this.lines_changed = lines_changed
        this.status = 'OPEN'
        this.dataCreate = new Date() // Esto guardara la fecha actual en la que se instancio el objeto
    }
    getInfo(){
        return `Este Pull Request es en el repo: ${this.repo} (status: ${this.status}) y fue creado en ${this.dataCreate}`
    }
}
console.log('Ejercicio 5: Atributos con valores por defecto')
const myPullRequest = new PullRequest('LaunchX', 'Mi primer PullRequest',50)
console.log(myPullRequest.getInfo())

// Ejercicio 6: Getters para acceder a los atributos del objeto

class Ajolonauta {
    constructor(name, age, stack){
     this.name = name
     this.age = age
     this.stack = stack
     this.exercises_completed = 0
     this.exercises_todo = 99
    }
  
    // Podemos acceder a los atributos de esta clase
    get getExercisesCompleted() {
          return this.exercises_completed
    }
  }
  
  console.log("Ejercicio 6: Getters para acceder a los atributos del objeto")
  const woopa = new Ajolonauta("Woopa", 1, [])
  console.log(woopa.getExercisesCompleted)

// Ejercicio 7: Setters para modificar los atributos del objeto
class MissionCommander {
    constructor(name, mission){
        this.name = name
        this.mission = mission
        this.students = 0
        this.lives = 0
    }
  
    get getStudents(){
     return this.students
    }
  
    get getLives(){
     return this.lives
    }
  
    set setStudents(students){
      this.students = students
    }
  
    set setLives(lives){
      this.lives = lives
    }
  }
  
  console.log("Ejercicio 7: Setters para modificar los atributos del objeto")
  const missionCommanderNode = new MissionCommander("Carlo", "NodeJS")
  console.log(`${missionCommanderNode.getStudents} por defecto`) // 0 por defecto
  console.log(`${missionCommanderNode.getLives} por defecto`)// 0 por defecto
  
  // actualizamos los atributos por medio de los setters (set)
  missionCommanderNode.setStudents = 100
  missionCommanderNode.setLives = 3
  
  console.log(missionCommanderNode.getStudents) // 100 modificado desde el set
  console.log(missionCommanderNode.getLives)// 3 modificado desde el set


// Ejercicio 8: Métodos static nos ayudan a escribir métodos en una clase que podemos usar sin necesidad de instanciar algún objeto
class Toolbox {
    static getMostUsefulTools(){
      return ["Command line", "git", "Text Editor"]
    }
  }
  
  console.log("Ejercicio 8: Métodos static")
  // Puedo llamar el método static directamente con el nombre de la clase
  console.log(Toolbox.getMostUsefulTools())
  // Si intentamos instanciar un objeto, no podremos llamar este método static
  //const toolbox = new Toolbox()
  //console.log(toolbox.getMostUsefulTools()) // is not a function
  
  /*
  HERENCIA: Nos permite relacionar clases entre sí y rehusar sus componentes
  */
  
  // Ejercicio  9: Herencia entre dos clases
  class Developer {
    constructor(name, mainLang, stack){
      this.name =  name
      this.mainLang = mainLang
      this.stack = stack
    }
  
    get getName() {
          return this.name
      }
  }
  
  console.log("Ejercicio  9: Herencia entre dos clases")
  const carloDev = new Developer("Carlo", "js", ["elixir", "groovy", "lisp"])
  console.log(carloDev)
  
  // Se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre (Developer) en la clase definida.
  // Podemos definir una clase vacía y rehusar todos los componentes de la clase padre
  class LaunchXStudent extends Developer{
  }
  
  const carloLaunchXDev = new LaunchXStudent("Carlo", "js", ["elixir", "groovy", "lisp"])
  console.log(carloLaunchXDev)
  console.log(carloLaunchXDev.getName) // getter de la clase padre rehusada en la clase hija
  
  // Ejercicio 10: Overrinding methods
  
  class Explorer{
    constructor(name, username, mission){
     this.name = name
     this.username = username
     this.mission = mission
    }
  
    getNameAndUsername(){
     return `Explorer ${this.name}, username: ${this.username}`
    }
  }
  
  class Viajero extends Explorer {
    constructor(name, username, mission, cycle){
      super(name, username, mission) // SUPER nos ayudará a llamar el constructor padre
      this.cycle = cycle // Agregamos este atributo de la clase Viajero, es exclusiva de esta clase y no de la clase padre
    }
  
    getGeneralInfo(){
      let nameAndUsername = this.getNameAndUsername() // llamamos el método de la clase padre
      // nameAndUsername  es una variable de esta función, no necesitas usar this para referenciarla.
      return `${nameAndUsername}, Ciclo ${this.cycle}`
    }
  }
  
  const viajero1 = new Viajero("Carlo", "LaunchX", "Node JS", "Abril 2022")
  console.log("Ejemplo 10: Overrinding methods")
  console.log(viajero1)
  console.log(viajero1.getNameAndUsername()) // Método de la clase padre
  console.log(viajero1.getGeneralInfo()) // Método de la clase hija