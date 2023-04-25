const loginContPricipal = document.getElementById("loginContPricipal");
const loginForm = document.getElementById("loginForm");
const loginUsername = document.getElementById("loginUsername");
const loginSignin = document.getElementById("loginSignin");
const loginText2 = document.getElementById("loginText2");

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

function funWelcome(n){
    loginUsername.remove();
    loginSignin.remove();
    loginText2.remove();
    
    const titleWelcome = document.createElement('h2');
    loginForm.appendChild(titleWelcome);
    titleWelcome.id = 'titleWelcome';
    titleWelcome.innerHTML = "Welcome";
    titleWelcome.style = 'grid-row:1;  font-family:sans-serif; font-size:50px; font-weight:700; color:orange; margin-top:30px';

    const titleWelcomeP = document.createElement('h2');
    loginForm.appendChild(titleWelcomeP);
    titleWelcomeP.id = 'titleWelcomePerson';
    titleWelcomeP.innerHTML = n;
    titleWelcomeP.style = 'grid-row:2; font-family:sans-serif; font-size:50px; font-weight:bold; color:whitesmoke; margin-top:-30px;';

    let buttonEnter = document.createElement('a');
    loginForm.appendChild(buttonEnter);
    buttonEnter.id = 'buttonEnter';
    buttonEnter.innerHTML = "Enter";
    buttonEnter.style = 'grid-row:3; font-family:sans-serif; font-size:20px; font-weight:bold; color:black; padding:20px 10px 5px 10px; background:orange; border:none; border-radius:10px; width:200px; height:45px; margin:auto; margin-top:-30px;';
}


loginSignin.addEventListener('click', () => {
    let person = users.find(user => user.id === loginUsername.value);
    console.log(person.position+" "+person.firstname+" "+person.lastname+" "+'inició secion')
    funWelcome(person.firstname+" "+person.lastname);
   
    buttonEnter.addEventListener('click', () => {
        if (person.position === "Directory") {
            buttonEnter.setAttribute('href', '../page/indexAdmin.html');
        } else if (person.position === "Teacher") {
            buttonEnter.setAttribute('href', '../page/indexTeacher.html');
        } else if (person.position === "Parents") {
            buttonEnter.setAttribute('href', '../page/indexParents.html');
        } else if (person.position === "Student") {
            buttonEnter.setAttribute('href', '../page/indexStudent.html');
        } else {
            console.log("No es ningun perfil.")
        }
    })
    import { funUserAdmin } from "./admin";
    funUserAdmin();
})