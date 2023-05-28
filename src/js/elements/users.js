function userName(firstname, lastname, position, sexo, id) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.position = position;
    this.sexo = sexo;
    this.id = id;
}

let users = [];

const user1 = new userName("Sebastian", "Morales H.", "Directory", "Masculino", "dir");
const user2 = new userName("Sarah", "Santander G.", "Teacher", "Femenino", "tea");
const user3 = new userName("Fernanda", "Molina F.", "Student", "Femenino", "sf");
const user4 = new userName("Juan", "Palma S.", "Student", "Masculino", "sm");

users.push(user1);
users.push(user2);
users.push(user3);
users.push(user4);

let arrayCalFernanda = [] ;
let arrayCalJuan = [] ;
let arrayExa = [] ;
let arrayHW = [] ;
let arrayNotFernanda = [] ;
let arrayNotJuan = [] ;
let arrayMeet = [] ;
let arrayAct = [] ;
let arrayMonFernanda = [] ;
let arrayMonJuan = [] ;