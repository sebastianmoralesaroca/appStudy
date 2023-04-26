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

    let buttonEnter = document.createElement('button');
    loginForm.appendChild(buttonEnter);
    buttonEnter.id = 'buttonEnter';
    buttonEnter.className = 'buttonEnter';
    buttonEnter.innerHTML = "Enter";
}


loginSignin.addEventListener('click', () => {
    let person = users.find(user => user.id === loginUsername.value);
    console.log(person.position+" "+person.firstname+" "+person.lastname+" "+'inició secion')
    funWelcome(person.firstname+" "+person.lastname)

    buttonEnter.addEventListener('click', () => {
        if (person.position === "Directory") {
            funUserAdmin();
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
})