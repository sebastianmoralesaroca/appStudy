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
    let textDir = "Hola "+person.firstname+" estas en tu perfil, aca puedes los usuarios de padres, profesores y alumnos. Puedes agregar nuevos usuarios a la plataforma al igual que puedes eliminar usuarios ya eistentes.";
    let textTeacher = "hola "+person.firstname+" estas en tu perfil, aca puedes añadir calificaciones, pruebas, tareas, notas para los alumos, cuotas pendientes y mandar y responder mensajes";
    buttonEnter.addEventListener('click', () => {
        if (person.position === "Directory") {
            loginContPricipal.remove();
            funHeader(person.firstname+" "+person.lastname, imgDirectory);
            funMain(person.firstname, textDir, imgDirectory);
            funUserAdmin(person.firstname,textDir);
        } else if (person.position === "Teacher") {
            loginContPricipal.remove();
            funHeader(person.firstname+" "+person.lastname, imgteacherWoman);
            funMain(person.firstname, textDir, imgteacherWoman);
            funUserTeacher();
        }else if (person.position === "Students" || person.sexo === "Femenino"){
            loginContPricipal.remove();
            funHeader(person.firstname+" "+person.lastname, imgstudent);
            funMain(person.firstname, textDir, imgstudent);
            funUserTeacher();
        }else if(person.position === "Students" || person.sexo === "Masculino"){
            loginContPricipal.remove();
            funHeader(person.firstname+" "+person.lastname, imgstudent);
            funMain(person.firstname, textDir, imgstudent);
            funUserTeacher();
        }else {
            console.log("No es ningun perfil.")
        }
    })
})