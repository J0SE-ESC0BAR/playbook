class repo {
    constructor(name,author,language,numberOfCommits,stars,forks,issues_open,issues_close){
    this.name = name
    this.author = author;
    this.language=language;
    this.numberOfCommits=numberOfCommits;
    this.stars=stars
    this.forks=forks
    this.issues_open=issues_open
    this.issues_close=issues_close
    }
    getTotalIssues(){
      return this.issues_open + this.issues_close
    }
    getGeneralInfo(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   const myRepo = new repo('LaunchX','J0SE-ESC0BAR','JavaScript',100,199,299,10,10)
   console.log("Nombre del repo:" + myRepo.name)
   console.log("Issues totales: " + myRepo.getTotalIssues())
   console.log(myRepo.getGeneralInfo())

   //Issue
   class issue {
    constructor(title,repositoryNameAssociated,status,numberOfCommits,labels,author,dateCreated){
        this.title=title
        this.repositoryNameAssociated= repositoryNameAssociated
        this.status=status
        this.numberOfCommits=numberOfCommits
        this.labels=labels
        this.author=author
        this.dateCreated=dateCreated
        this.lastUpdated=lastUpdated
    }
    getTitleAndAuthor(){
      return `Author repository ${this.author} and title ${this.title}`
    }
    getGeneralInfo(){
      return `This Issue last updated ${this.lastUpdated} was created ${this.dateCreate}`
    }
   }


//Pull Request
class pull_rquest  {
    constructor(title,author,branchName,dateCreate,status,repositoryNameAssociated){
        this.title = title
        this.author=author
        this.branchName=branchName
        this.dateCreate=dateCreate
        this.status=status
        this.repositoryNameAssociated=repositoryNameAssociated
    }
    getStatus(){
        return `This status ${this.status}`
    }
    getTitleAndAuthor(){
        return `${this.title} create by ${this.author}`
    }
}
console.log('\n\nSegunda parte\n')
//Segunda parte
console.log('Clase de twitter\n')
class twitter {
    constructor(user,username,age){
    this.user= user
    this.username=username
    this.age=age
    this.treding_topic=[]
    this.hashtag=[]
    }
    get gettreding_topic(){
        return this.treding_topic;
    }
    get gethastag(){
        return this.hashtag;
    }
    set settreding_topic(treding_topic){
        this.treding_topic.push(treding_topic);
    }
    set sethastag(hashtag){
        this.hashtag.push(hashtag);
    }
}
//instanciando la clase
const myTwitter = new twitter("jose","J0SE-ES0BAR",19)
//Set de treding_topic
myTwitter.settreding_topic = "Rusia";
myTwitter.settreding_topic = "Descansa";

//Set de hastag
myTwitter.sethastag = "#UltimaHora";
myTwitter.sethastag = "#JavaScript";
//Get de treding_topic y hastag
console.log(myTwitter)
console.log(myTwitter.gettreding_topic);
console.log(myTwitter.gethastag);

console.log('Clase de facbook\n')
class facbook {
    constructor(user,username,age){
        this.user=user
        this.username=username
        this.age=age
        this.post=0
        this.contacto=""
        this.amigos=0
        this.ciudad=""
        this.fechaDeNacimiento=""
    }
    set setPost(p){
        this.post = p
    }
    set setContacto(contacto){
        this.contacto = contacto
    }
    set setAmigos(amigos){
        this.amigos = amigos
    }
    set setCiudad(ciudad){
        this.ciudad = ciudad
    }
    set setfechaDeNacimiento(fechaDeNacimiento){
        this.fechaDeNacimiento = fechaDeNacimiento
    }
    get biography(){
        return {
        contacto: this.contacto,
        amigos:this.amigos,
        ciudad:this.ciudad,
        fechaDeNacimiento:this.fechaDeNacimiento
        }
    }
}

class uber {
    constructor(name,username,number){
        this.name=name
        this.username=username
        this.number=number
        this.lugar=""
        this.fecha=""
        this.monto=""
    }
    set setLugar(l){
        this.lugar = l
    }
    set setFecha(f){
        this.fecha = f
    }
    set setMonto(m){
        this.monto = m
    }
    get getTravel(){
        return{
        lugar:this.lugar,
        fecha:this.fecha,
        monto:this.monto
        }
    }
}
let myUber = new uber("Jose","J0SE","78342346031")
myUber.setLugar = "Centro comercial"
myUber.setFecha = "2020"
myUber.setMonto = "$200"
console.log(myUber.getTravel)
console.log(myUber)