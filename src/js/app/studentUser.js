function funUserStudent() {
    let mainMenu = document.getElementById('mainMenu');
    let menu1 = document.createElement('button');
    mainMenu.appendChild(menu1);
    menu1.className ='menuBtn';
    menu1.id = 'menu1';
    menu1.innerHTML ="Califications"
        let img1 = document.createElement('img');
        menu1.appendChild(img1);
        img1.className ='menuImg';
        img1.src = imgcalifications;
    let menu2 = document.createElement('button');
    mainMenu.appendChild(menu2);
    menu2.className ='menuBtn';
    menu2.id ='menu2';
    menu2.innerHTML ="Examn";
        let img2 = document.createElement('img');
        menu2.appendChild(img2);
        img2.className ='menuImg';
        img2.src = imgtask;
    let menu3 = document.createElement('button');
    mainMenu.appendChild(menu3);
    menu3.className ='menuBtn';
    menu3.id = 'menu3';
    menu3.innerHTML ="Homework"
        let img3 = document.createElement('img');
        menu3.appendChild(img3);
        img3.className ='menuImg';
        img3.src = imgtask;
    let menu4 = document.createElement('button');
    mainMenu.appendChild(menu4);
    menu4.className = 'menuBtn';
    menu4.id = 'menu4';
    menu4.innerHTML ="Notes";
        let img4 = document.createElement('img');
        menu4.appendChild(img4);
        img4.className ='menuImg';
        img4.src = imgcoment;
    let menu5 = document.createElement('button');
    mainMenu.appendChild(menu5);
    menu5.className ='menuBtn';
    menu5.id = 'menu5';
    menu5.innerHTML ="Reunion";
        let img5 = document.createElement('img');
        menu5.appendChild(img5);
        img5.className ='menuImg';
        img5.src = imgUsers;
    let menu6 = document.createElement('button');
    mainMenu.appendChild(menu6);
    menu6.className ='menuBtn';
    menu6.id ='menu6';
    menu6.innerHTML ="Activity";
        let img6 = document.createElement('img');
        menu6.appendChild(img6);
        img6.className ='menuImg';
        img6.src = imgdashboard;
    let menu7 = document.createElement('button');
    mainMenu.appendChild(menu7);
    menu7.className ='menuBtn';
    menu7.id ='menu7';
    menu7.innerHTML ="Money";
        let img7 = document.createElement('img');
        menu7.appendChild(img7);
        img7.className ='menuImg';
        img7.src = imgmoney;

    newFunction();

    function newFunction() {
        menu1.addEventListener('click', () => {
            console.log("hola");
        });
    }
}