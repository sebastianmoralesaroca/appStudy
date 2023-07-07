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
    { subject: "Math", calification: 4.4 },
    { subject: "Language", calification: 5.4 },
    { subject: "History", calification: 4.6 }
] ;

let arrayCalJuan = [
    { subject: "Math", calification: 4.4 },
    { subject: "Language", calification: 5.3 },
    { subject: "History", calification: 4.1 }
] ;

let arrayExa = [
    { subject: "Math", date: 08-06-2023, text: "The test will be about mathematical powers." },
    { subject: "History", date: 22-08-2023, text: "The test will be about the 1st and 2nd world war." },
    { subject: "Language", date: 21-07-2023, text: "The test is about reading comprehension."}
] ;

let arrayHW = [
    { subject: "Math", date: 08-06-2023, text: "Report on who were the most influential mathematicians in the world." },
    { subject: "History", date: 22-08-2023, text: "Oral summary of the origin of the First World War." },
    { subject: "Language", date: 21-07-2023, text: "Finish infographic of fable The Frog." }
] ;

let arrayNotFernanda = [
    { text: "This student stands out with her participation in all classes." },
    { text: "Please emphasize the arrival time to classes." }
] ;

let arrayNotJuan = [
    { text: "It is necessary to pay a little more attention in class to be able to achieve better academic results." },
    { text: "Very kind student to help his classmates and teachers. " }
] ;

let arrayMeet = [
    { title: 'Beginning of the year', date: 09-09-2023, text: "Meeting beginning of the year." },
    { title: 'Month April', date: 09-09-2023, text: "Meeting correspondent of month April." },
    { title: 'Month June', date: 09-09-2023, text: "Meeting correspondent of month June" }
] ;

let arrayAct = [
    { title: 'Combat Naval', date: 05-09, text: "Activity day of Combat Naval." },
    { title: 'Aniversaty', date: 05-09, text: "Activity Day of Aniversary." },
    { title: 'Hallowen', date: 05-09, text: "Activity Day of Hallowen." }
] ;

let arrayMon = [
    { title: 'Debt', debt: 4000, text: "Debt day of Father." },
    { title: 'Debt', debt: 4000, text: "Debt day of Stundet." },
    { title: 'Debt', debt: 4000, text: "Debt day of Aniversary." }
] ;

let arrayAplicationAdd = [
    {firstname: "Diego", lastname: "Campos",  position: "Student",  sexo: "Masculino"},
]

let arrayAplicationDel = [
    {firstname: "Victoria", lastname: "Montenegro",  position: "Student",  sexo: "Femenino"},
]

let arrayNotifications = [
    { position: "Teacher", name: "Bruno Smith w.", category: "Califications", subject: "Math" },
]

let arrayContact = [
    { nameContact: "Office", dataContact: "officeschool@gmail.com" },
    { nameContact: "Inspectory", dataContact: "inspectoryschool@gmail.com" },
    { nameContact: "Inspectory", dataContact: "2473 9847" },
    { nameContact: "Inspectory General", dataContact: "9734 7463" },
    { nameContact: "Marcela Ibarra", dataContact: "marcelaschool@gmail.com" },

]