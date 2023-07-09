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

            const headerContact = document.createElement('button');
            headerDiv2.appendChild(headerContact);
            headerContact.id = 'headerContact';
            headerContact.className = 'headerContact';
                const imgHeaderContact = document.createElement('img');
                headerContact.appendChild(imgHeaderContact)
                imgHeaderContact.id = 'headerImgBtnMessage';
                imgHeaderContact.className = 'headerImgBtnNoti'
                imgHeaderContact.src = imgContact;

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
            })
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


    let x = 0 ;
    const contContact = document.createElement('div') ;
    contContact.className = 'contContact' ;
    headerContact.addEventListener('click', () => {
        console.log("Open Contact") ;
        x = x + 1 ;
        if (x === 1) {
            titleContact = document.createElement('h4') ;
            titleContact.className = 'titleContact' ;
            titleContact.innerHTML = "Contact School" ;
            contContact.appendChild(titleContact) ;
            arrayContact.forEach(con => {
                const ulContact = document.createElement('ul') ;
                let textContact = document.createElement('p') ;
                textContact.className = 'textContact' ;
                let listContact = document.createTextNode(`${con.nameContact} ${con.dataContact}`) ;
                textContact.appendChild(listContact) ;
                headerDiv2.appendChild(contContact) ;
                contContact.appendChild(ulContact) ;
                ulContact.appendChild(textContact) ;
            });
        }
        else if (x === 2) {
            contContact.remove() ;
            while (contContact.firstChild) {
                contContact.removeChild(contContact.firstChild) ;
            }
            x = 0 ;
        }
        else {}
    })

    exitBtn.addEventListener('click', () => {
        console.log("log");
        window.location.href= 'http://127.0.0.1:5500/src/page/' ;
    })
}