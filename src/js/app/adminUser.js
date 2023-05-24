function funUserAdmin() {
    let mainMenu = document.getElementById('mainMenu');
        let menu1 = document.createElement('button');
        mainMenu.appendChild(menu1);
        menu1.className ='menuBtn';
        menu1.id ='menu1';
        menu1.innerHTML ="Look Users"
            let img1 = document.createElement('img');
            menu1.appendChild(img1);
            img1.className ='menuImg';
            img1.src = imgUsers;
        let menu2 = document.createElement('button');
        mainMenu.appendChild(menu2);
        menu2.className ='menuBtn';
        menu2.id ='menu2';
        menu2.innerHTML ="Create user";
            let img2 = document.createElement('img');
            menu2.appendChild(img2);
            img2.className ='menuImg';
            img2.src = imgAddUsers;
        const contDiv = document.createElement('div');
        users.forEach(user => {
            const contListUsers = document.createElement('div');
            let listUsers = document.createTextNode(`Nombre:${user.firstname}`);
            menu1.addEventListener('click',()=>{
                mainDashboard.appendChild(contDiv);
                contDiv.appendChild(contListUsers);
                contListUsers.appendChild(listUsers);
                contLoginNewUser.remove();
        });
    })

    const contLoginNewUser = document.createElement('div');
    let inputFirstName = document.createElement('input');
    let inputLastName = document.createElement('input');
    let inputPositions = document.createElement('input');
    let inputSexo = document.createElement('input');
    let inputId = document.createElement('input');
    let btnPushUser = document.createElement('button');

    menu2.addEventListener('click',()=>{
        mainDashboard.appendChild(contLoginNewUser);
        contLoginNewUser.className='contLoginNewUser';
        contLoginNewUser.appendChild(inputFirstName);
        inputFirstName.type='text';
        inputFirstName.placeholder="  First Name";
        inputFirstName.className='inputFirstName';
        contLoginNewUser.appendChild(inputLastName);
        inputLastName.type='text';
        inputLastName.placeholder="  Last Name";
        inputLastName.className='inputLastName';
        contLoginNewUser.appendChild(inputPositions);
        inputPositions.type='text';
        inputPositions.placeholder="  Position";
        inputPositions.className='inputPositions';
        contLoginNewUser.appendChild(inputSexo);
        inputSexo.type='text';
        inputSexo.placeholder="  Sexo";
        inputSexo.className='inputSexo';
        contLoginNewUser.appendChild(inputId);
        inputId.type='password';
        inputId.placeholder="  ID";
        inputId.className='inputId';
        contLoginNewUser.appendChild(btnPushUser);
        btnPushUser.type='submit';
        btnPushUser.className='btnPushUser';
        btnPushUser.innerHTML='Create User';
        mainDashboard.removeChild(contDiv);
            btnPushUser.addEventListener('click',()=>{
                let usuarioNuevo = new userName(inputFirstName.value, inputLastName.value, inputPositions.value, inputSexo.value, inputId.value);
                users.push(usuarioNuevo);
                console.log(users);
            })
    })
}