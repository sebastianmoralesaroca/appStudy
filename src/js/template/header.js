function funHeader(h,j) {
    const heraderCont = document.createElement('div');
    body.appendChild(heraderCont);
    heraderCont.id = 'heraderCont';
    heraderCont.className = 'heraderCont';

        const headerDiv1 = document.createElement('div');
        heraderCont.appendChild(headerDiv1);
        headerDiv1.id ='headerDiv1';
        headerDiv1.className ='headerDiv1';

            const menuBurger = document .createElement('button');
            headerDiv1.appendChild(menuBurger);
            menuBurger.className='menuBurger';
            menuBurger.id='menuBurger';
                const menuBurgerImg = document.createElement('img');
                menuBurger.appendChild(menuBurgerImg);
                menuBurgerImg.className='menuBurgerImg';
                menuBurgerImg.src = imgMenuBurger;
            let openMenu = 0;
            menuBurger.addEventListener('click', ()=>{
                openMenu = openMenu + 1;
                if (openMenu === 1) {
                    mainMenu.style ='display:inherit; z-index:1; grid-column:2;';
                }
                else {
                    openMenu = 0;
                    mainMenu.style ='display:none';
                }
            });

            const headerLogo1 = document.createElement('img');
            headerDiv1.appendChild(headerLogo1);
            headerLogo1.id = 'adminLogo1';
            headerLogo1 .className = 'headerLogo1';
            headerLogo1.src = imglightbulb;

            const headerLogo2 = document.createElement('h2');
            headerDiv1.appendChild(headerLogo2);
            headerLogo2.id = 'headerLogo2';
            headerLogo2.className = 'headerLogo2';
            headerLogo2.innerHTML = "7"

            const headerLogo3 = document.createElement('h2');
            headerDiv1.appendChild(headerLogo3);
            headerLogo3.id = 'headerLogo3';
            headerLogo3.className = 'headerLogo3';
            headerLogo3.innerHTML = "Seven"

        const headerDiv2 = document.createElement('div');
        heraderCont.appendChild(headerDiv2);
        headerDiv2.id ='headerDiv2';
        headerDiv2.className ='headerDiv2';

            const headerBtnMessage = document.createElement('button');
            headerDiv2.appendChild(headerBtnMessage);
            headerBtnMessage.id = 'headerBtnMessage';
            headerBtnMessage.className = 'headerBtnMessage';
                const headerImgBtnMessage = document.createElement('img');
                headerBtnMessage.appendChild(headerImgBtnMessage)
                headerImgBtnMessage.id = 'headerImgBtnMessage';
                headerImgBtnMessage.className = 'headerImgBtnNoti'
                headerImgBtnMessage.src = imgnotiComent;

            const headerBtnNoti = document.createElement('button');
            headerDiv2.appendChild(headerBtnNoti);
            headerBtnNoti.id = 'headerBtnNoti';
            headerBtnNoti.className = 'headerBtnNoti';
                const headerImgBtnNoti = document.createElement('img');
                headerBtnNoti.appendChild(headerImgBtnNoti);
                headerImgBtnNoti.id ='headerImgBtnNoti';
                headerImgBtnNoti.className ='headerImgBtnNoti';
                headerImgBtnNoti.src = imgnotifications;

            const headerNamePerson = document.createElement('h2')
            headerDiv2.appendChild(headerNamePerson);
            headerNamePerson.id = 'headerNamePerson';
            headerNamePerson.className = 'headerNamePerson';
            headerNamePerson.innerHTML = h;

            const headerImgPerson = document.createElement('img');
            headerDiv2.appendChild(headerImgPerson);
            headerImgPerson.id = 'headerImgPerson';
            headerImgPerson.className = 'headerImgPerson';
            headerImgPerson.src = j;

            const exitBtn = document.createElement('button');
            headerDiv2.appendChild(exitBtn);
            exitBtn.className ='exitBtn';
            exitBtn.id ='exitBtn';
                const exitImg = document.createElement('img');
                exitBtn.appendChild(exitImg);
                exitImg.className = 'exitImg';
                exitImg.src = imgexit;



    let z = 0 ;
    const contNoti = document.createElement('div') ;
    contNoti.className = 'contNot' ;
    headerBtnNoti.addEventListener('click', () => {
        console.log("Open Notifications");
        z = z + 1 ;
        if (z === 1) {
            titleNoti = document.createElement('h4') ;
            titleNoti.className = 'titleNoti' ;
            titleNoti.innerHTML = 'Notifications'
            contNoti.appendChild(titleNoti) ;
            arrayNotifications.forEach(noti => {
                const ulNoti = document.createElement('ul') ;
                let textNoti = document.createElement('p') ;
                textNoti.className = 'textNoti' ;
                let listNoti = document.createTextNode(`${noti.position} ${noti.name} added ${noti.category} of ${noti.subject}`) ;
                textNoti.appendChild(listNoti) ;
                headerDiv2.appendChild(contNoti) ;
                contNoti.appendChild(ulNoti) ;
                ulNoti.appendChild(textNoti) ;
            });
        }
        else if (z === 2) {
            contNoti.remove() ;
            while (contNoti.firstChild) {
                contNoti.removeChild(contNoti.firstChild) ;
            }

            z = 0 ;
        }
        else {}
    })
}