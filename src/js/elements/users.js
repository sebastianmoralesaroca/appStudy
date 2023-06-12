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

let arrayCalFernanda = [4.7, 6.6] ;

let arrayCalJuan = [6.4, 5.7] ;

let arrayExa = [
    { nombre: 'Juan', edad: 20 },
    { nombre: 'María', edad: 20 },
    { nombre: 'Pedro', edad: 20 }
] ;

let arrayHW = [
    { nombre: 'Juan', edad:  30},
    { nombre: 'María', edad: 30 },
    { nombre: 'Pedro', edad: 30 }
] ;

let arrayNotFernanda = ["esta es una alimna que se destaca en todas als clases"] ;

let arrayNotJuan = ["falta poner un poco mas de atencion en clases para poder alcanzar mejores resulados academicos "] ;

let arrayMeet = [
    { nombre: 'Juan', edad: 40 },
    { nombre: 'María', edad: 40 },
    { nombre: 'Pedro', edad: 40 }
] ;

let arrayAct = [
    { nombre: 'Juan', edad: 50 },
    { nombre: 'María', edad: 50 },
    { nombre: 'Pedro', edad: 50 }
] ;

let arrayMon = [
    { nombre: 'Juan', edad: 60 },
    { nombre: 'María', edad: 60 },
    { nombre: 'Pedro', edad: 60 }
] ;