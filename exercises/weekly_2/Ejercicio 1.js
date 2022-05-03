const repo = {
    name: "LaunchX",
    author: "J0SE-ESC0BAR",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())

   //Issue
   const issue = {
    title: "01 Live semana 1",
    repositoryNameAssociated: "MissionNodeJS",
    status: "JavaScript",
    numberOfCommits: 10,
    labels: "Finalizado",
    author: "J0SE-ESC0BAR",
    dateCreated: 2022/04/23,
    lastUpdated: 2022/05/1,
    getTitleAndAuthor: function(){
      return `Author repository ${this.author} and title ${this.title}`
    },
    getGeneralInfo: function(){
      return `This Issue last updated ${this.lastUpdated} was created ${this.dateCreate}`
    }
   }
//Pull Request
const pull_rquest = {
    title : "Envio de mi blog",
    author:"J0SE-ESC0BAR",
    branchName:"main",
    dateCreate:"2022/04/25",
    status:"Open",
    repositoryNameAssociated:"",
    getStatus: function(){
        return `This status ${this.status}`
    },
    getTitleAndAuthor: function(){
        return `${this.title} create by ${this.author}`
    }
}

//Segunda parte
const twitter = {
    user: {
        user:"jose",
        username:"J0SE-ES0BAR",
        age:19
    },
    treding_topic:["Rusia","Descansa"],
    hashtag:["#UltimaHora"]
}
const facbook = {
    user: {
        user:"jose",
        username:"J0SE-ES0BAR",
        age:19
    }, 
    post: 25,
    biography:{
        contacto:"josealfonsoescobarmejia@gmail.com",
        amigos: 250,
        ciudad: "Morelia",
        fechaDeNacimiento:"2002/06/30"
    }
}
const uber = {
    profile:{
        name:"Jose",
        nameuser:"J0SE-ESC0BAR",
        number:"6034005268"
    },
    travel:{
        lugar:"Centro comencial",
        fecha:"2020",
        monto:"$200"
    }
}