function userName(firstname, lastname, position, sexo, id) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.position = position;
    this.sexo = sexo;
    this.id = id;
}

let users = [];

const user1 = new userName("Sebastian", "Morales H.", "Directory", "Masculino", "dir") ;
const user2 = new userName("Sarah", "Santander G.", "Teacher", "Femenino", "tea") ;
const user3 = new userName("Fernanda", "Molina F.", "Student", "Femenino", "sf") ;
const user4 = new userName("Juan", "Palma S.", "Student", "Masculino", "sm") ;

users.push(user1) ;
users.push(user2) ;
users.push(user3) ;
users.push(user4) ;

let arrayCalFernanda = [
    {subject: "Math", calification: 4.4},
    {subject: "Math", calification: 4.4},
    {subject: "Math", calification: 4.4}
] ;

let arrayCalJuan = [
    {subject: "Math", calification: 4.4},
    {subject: "Math", calification: 4.4},
    {subject: "Math", calification: 4.4}
] ;

let arrayExa = [
    {subject: "Math", date: 08-06-2023, text: "La prueba se tratara de potncias matematicas" },
    {subject: "History", date: 22-08-2023, text: "la prueba se tratara de la 1ra y 2da guerra muendal"},
    {subject: "Language", date: 21-07-2023, text: "la prueba se tratara de comprencion lectora"}
] ;

let arrayHW = [
    {subject: "Math", date: 08-06-2023, text: "Este trabajo se trata de Matematicas" },
    {subject: "History", date: 22-08-2023, text: "Este trabajo de trata de Histoia" },
    {subject: "Language", date: 21-07-2023, text: "Este trabajo se trata de Lenguaje" }
] ;

let arrayNotFernanda = [
    {text: "esta es una alimna que se destaca en todas als clases"},
    {text: "esta es una alimna que se destaca en todas als clases"}
] ;

let arrayNotJuan = [
    {text: "falta poner un poco mas de atencion en clases para poder alcanzar mejores resulados academicos "},
    {text: "falta poner un poco mas de atencion en clases para poder alcanzar mejores resulados academicos "}
] ;

let arrayMeet = [
    {title: 'Met Marzo', date: 09-09-2023, text: "reunion correspondiente Mes"},
    {title: 'Met Abril', date: 09-09-2023, text: "reunion correspondiente Mes"},
    {title: 'Met Junio', date: 09-09-2023, text: "reunion correspondiente Mes"}
] ;

let arrayAct = [
    {title: 'Hallowen', date: 05-09, text: "Actividad del dia de Hallowen"},
    {title: 'Hallowen', date: 05-09, text: "Actividad del dia de Hallowen"},
    {title: 'Hallowen', date: 05-09, text: "Actividad del dia de Hallowen"}
] ;

let arrayMon = [
    { title: 'Deuda', debt: 4000, text: "Deuda dia del Padre" },
    { title: 'Deuda', debt: 4000, text: "Deuda dia del Padre" },
    { title: 'Deuda', debt: 4000, text: "Deuda dia del Padre"  }
] ;

let arrayAplicationAdd = [
    {firstname: "Diego", lastname: "Campos",  position: "Student",  sexo: "Masculino"},
]

let arrayAplicationDel = [
    {firstname: "Victoria", lastname: "Montenegro",  position: "Student",  sexo: "Femenino"},
]

let arrayNotifications = [
    {position: "Teacher", name: "Bruno Smith w.", category: "Califications", subject: "Math"},
]