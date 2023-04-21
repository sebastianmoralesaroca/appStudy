const loginContPricipal = document.getElementById("loginContPricipal");
const loginForm = document.getElementById("loginForm");
const loginUsername = document.getElementById("loginUsername");
const loginSignin = document.getElementById("loginSignin");
const loginText2 = document.getElementById("loginText2");

function userName(name, position, school, id) {
    this.name = name;
    this.position = position;
    this.school = school;
    this.id = id;
}

let users = [];

const user1 = new userName("Sebastian Morales", "Directory", "San Sebastian", "123");
const user2 = new userName("Sarah Santander", "Teacher", "San Sebastian", "753109");
const user3 = new userName("Carolina Rojas", "Parents", "San Sebastian", "753092");
const user4 = new userName("Fernanda Isabell", "Student", "San Sebastian", "937502");
const user5 = new userName("Juan Palman", "Student", "San Sebastian", "983009");

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

    let titleWelcomeP = document.createElement('h2');
    loginForm.appendChild(titleWelcomeP);
    titleWelcomeP.id = 'titleWelcomePerson';
    titleWelcomeP.innerHTML = n;
    titleWelcomeP.style = 'grid-row:2; font-family:sans-serif; font-size:50px; font-weight:bold; color:whitesmoke; margin-top:-30px;';

    let buttonEnter = document.createElement('button');
    loginForm.appendChild(buttonEnter);
    buttonEnter.id = 'buttonEnter';
    buttonEnter.innerHTML = "Enter";
    buttonEnter.style = 'grid-row:3; font-family:sans-serif; font-size:20px; font-weight:bold; color:black; padding;20px; background:orange; border:none; border-radius:10px; width:200px; height:45px; margin:auto; margin-top:-30px;';
}


loginSignin.addEventListener("click", () => {
    let person = users.find(user => user.id === loginUsername.value);
    console.log(person.name)
    funWelcome(person.name);
})