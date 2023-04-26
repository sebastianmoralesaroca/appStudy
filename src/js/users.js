function userName(firstname, lastname, position, school, id) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.position = position;
    this.school = school;
    this.id = id;
}

let users = [];

const user1 = new userName("Sebastian", "Morales H.", "Directory", "San Sebastian", "123");
const user2 = new userName("Sarah", "Santander G.", "Teacher", "San Sebastian", "234");
const user3 = new userName("Carolina", "Rojas K.", "Parents", "San Sebastian", "345");
const user4 = new userName("Fernanda", "Molina F.", "Student", "San Sebastian", "456");
const user5 = new userName("Juan", "Palma S.", "Student", "San Sebastian", "567");

users.push(user1);
users.push(user2);
users.push(user3);
users.push(user4);
users.push(user5);