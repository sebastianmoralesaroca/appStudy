function funUserAdmin(pf, wtx) {
    let mainMenu = document.getElementById('mainMenu');
        let menu1 = document.createElement('button');
            mainMenu.appendChild(menu1);
            menu1.className ='menuBtn';
            menu1.id = 'menu1';
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
}
