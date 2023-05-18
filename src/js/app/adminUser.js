const exitHandler = require("npm/lib/utils/exit-handler");

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
        const contLoginNewUser = document.createElement('div');
        const contLookUsers = document.createElement('div');
        let x = true;
        let z = true;
        menu1.addEventListener('click',()=>{
            if (x === true) {
                mainDashboard.appendChild(contLookUsers);
                contLookUsers.className='contLookUsers';
                contLookUsers.id='contLookUsers';
            let textLookUsers = document.createElement('p');
                contLookUsers.appendChild(textLookUsers);
                textLookUsers.innerHTML = users;
            contLoginNewUser.remove();
            x = false;
            }
            })
        menu2.addEventListener('click',()=>{
                mainDashboard.appendChild(contLoginNewUser);
                contLoginNewUser.className='contLoginNewUser';
            let inputFirstName = document.createElement('input');
                contLoginNewUser.appendChild(inputFirstName);
                inputFirstName.type='text';
                inputFirstName.placeholder="  First Name";
                inputFirstName.className='inputFirstName';
            let inputLastName = document.createElement('input');
                    contLoginNewUser.appendChild(inputLastName);
                    inputLastName.type='text';
                    inputLastName.placeholder="  Last Name";
                    inputLastName.className='inputLastName';
                let inputPositions = document.createElement('input');
                    contLoginNewUser.appendChild(inputPositions);
                    inputPositions.type='text';
                    inputPositions.placeholder="  Position";
                    inputPositions.className='inputPositions';
                    let inputSexo = document.createElement('input');
                    contLoginNewUser.appendChild(inputSexo);
                    inputSexo.type='text';
                    inputSexo.placeholder="  Sexo";
                    inputSexo.className='inputSexo';
                let inputId = document.createElement('input');
                    contLoginNewUser.appendChild(inputId);
                    inputId.type='password';
                    inputId.placeholder="  ID";
                    inputId.className='inputId';
                    let btnPushUser = document.createElement('button');
                    contLoginNewUser.appendChild(btnPushUser);
                    btnPushUser.type='submit';
                    btnPushUser.className='btnPushUser';
                    btnPushUser.innerHTML='Create User';
                contLookUsers.remove();
                x = true;
            })
            }
