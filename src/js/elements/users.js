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
    { nombre: 'Juan', edad: 21 },
    { nombre: 'María', edad: 22 },
    { nombre: 'Pedro', edad: 33 }
] ;

let arrayHW = [
    { nombre: 'Juan', edad:  31},
    { nombre: 'María', edad: 32 },
    { nombre: 'Pedro', edad: 33 }
] ;

let arrayNotFernanda = ["esta es una alimna que se destaca en todas als clases"] ;

let arrayNotJuan = ["falta poner un poco mas de atencion en clases para poder alcanzar mejores resulados academicos "] ;

let arrayMeet = [
    { nombre: 'Juan', edad: 41 },
    { nombre: 'María', edad: 42 },
    { nombre: 'Pedro', edad: 43 }
] ;

let arrayAct = [
    { nombre: 'Juan', edad: 51 },
    { nombre: 'María', edad: 52 },
    { nombre: 'Pedro', edad: 53 }
] ;

let arrayMon = [
    { nombre: 'Juan', edad: 61 },
    { nombre: 'María', edad: 62 },
    { nombre: 'Pedro', edad: 63 }
] ;