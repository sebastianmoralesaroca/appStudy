function funUserTeacher() {
    const mainMenu = document.getElementById('mainMenu') ;
    const menuCalifications = document.createElement('button') ;
        mainMenu.appendChild( menuCalifications ) ;
        menuCalifications.className = 'menuBtn' ;
        menuCalifications.id = 'menuCalifications' ;
        const img1 = document.createElement('img') ;
            menuCalifications.appendChild( img1 ) ;
            img1.className = 'menuImg' ;
            img1.src = imgcalifications;
            const textMenuCalifications = document.createTextNode("Califications") ;
                menuCalifications.appendChild( textMenuCalifications ) ;
    const menuExamn = document.createElement('button');
        mainMenu.appendChild( menuExamn );
        menuExamn.className ='menuBtn';
        menuExamn.id = 'menuExamn' ;
        const img2 = document.createElement('img');
            menuExamn.appendChild( img2 );
            img2.className = 'menuImg' ;
            img2.src = imgExamn ;
            const textMenuExamn = document.createTextNode("Examn") ;
                menuExamn.appendChild( textMenuExamn );
    const menuHomeWork = document.createElement('button');
        mainMenu.appendChild( menuHomeWork );
        menuHomeWork.className = 'menuBtn';
        menuHomeWork.id = 'menuHomeWork';
        const img3 = document.createElement('img');
            menuHomeWork.appendChild( img3 );
            img3.className = 'menuImg';
            img3.src = imgtask;
            const textMenuHomeWork = document.createTextNode("HomeWork") ;
                menuHomeWork.appendChild( textMenuHomeWork ) ;
    const menuNotes = document.createElement('button');
        mainMenu.appendChild( menuNotes );
        menuNotes.className = 'menuBtn';
        menuNotes.id = 'menuNotes';
        const img4 = document.createElement('img');
            menuNotes.appendChild( img4 );
            img4.className ='menuImg';
            img4.src = imgcoment;
            const textMenuNotes = document.createTextNode("Notes") ;
                menuNotes.appendChild( textMenuNotes ) ;
    const menuMeeting = document.createElement('button') ;
        mainMenu.appendChild( menuMeeting ) ;
        menuMeeting.className = 'menuBtn' ;
        menuMeeting.id = 'menuMeeting' ;
        const img5 = document.createElement('img') ;
            menuMeeting.appendChild( img5 ) ;
            img5.className = 'menuImg' ;
            img5.src = imgMeeting ;
            const textMenuMeeting = document.createTextNode("Meeting") ;
                menuMeeting.appendChild( textMenuMeeting ) ;
    const menuActivity = document.createElement('button') ;
        mainMenu.appendChild( menuActivity ) ;
        menuActivity.className = 'menuBtn' ;
        menuActivity.id = 'menuActivity' ;
        const img6 = document.createElement('img') ;
            menuActivity.appendChild( img6 ) ;
            img6.className = 'menuImg' ;
            img6.src = imgActivity ;
            const textMenuActivity = document.createTextNode("Activity") ;
                menuActivity.appendChild( textMenuActivity ) ;
    const menuMoney = document.createElement('button') ;
        mainMenu.appendChild( menuMoney ) ;
        menuMoney.className = 'menuBtn' ;
        menuMoney.id = 'menuMoney' ;
        const img7 = document.createElement('img') ;
            menuMoney.appendChild( img7 ) ;
            img7.className = 'menuImg' ;
            img7.src = imgmoney ;
            const textMenuMoney = document.createTextNode("Money") ;
                menuMoney.appendChild( textMenuMoney ) ;
    const menuDelete = document.createElement('button') ;
        mainMenu.appendChild( menuDelete ) ;
        menuDelete.className = 'menuBtnDelete' ;
        menuDelete.id = 'menuDelete' ;
        const img8 = document.createElement('img') ;
            menuDelete.appendChild( img8 ) ;
            img8.className = 'menuImg' ;
            img8.src = imgdelete ;
            const textMenuDelete = document.createTextNode("Clean") ;
                menuDelete.appendChild( textMenuDelete ) ;
    const btnAddWelcome = document.createElement('button') ;
        mainWelcome.appendChild( btnAddWelcome ) ;
        btnAddWelcome.className = 'btnAddWelcome' ;
        const imgBtnWeolcome = document.createElement('img') ;
            btnAddWelcome.appendChild( imgBtnWeolcome ) ;
            imgBtnWeolcome.className = 'imgBtnWeolcome' ;
            imgBtnWeolcome.src = imgAdd ;
            const textBtnWelcome = document.createTextNode("Choose One Option")
                btnAddWelcome.appendChild( textBtnWelcome ) ;

    let titleJuanCal = document.createElement('h4') ;
        titleJuanCal.className = 'titleData' ;
    let titleFernandaCal = document.createElement('h4') ;
        titleFernandaCal.className = 'titleData' ;
    let dataJuanCal = document.createElement('p') ;
        dataJuanCal.className = 'textData' ;
    let dataFernandaCal = document.createElement('p') ;
        dataFernandaCal.className = 'textData' ;
    menuCalifications.addEventListener( 'click', () =>{
        const divCalifications = document.createElement('div') ;
            divCalifications.id = 'divCalifications' ;
            mainDashboard.appendChild( divCalifications ) ;
            titleJuanCal.innerHTML = "This Califications is from Juan Palma S." ;
            divCalifications.appendChild( titleJuanCal ) ;
            dataJuanCal.innerHTML = arrayCalJuan ;
            divCalifications.appendChild( dataJuanCal ) ;
            titleFernandaCal.innerHTML = "This Califications is from Fernanda Molina F." ;
            divCalifications.appendChild( titleFernandaCal ) ;
            dataFernandaCal.innerHTML = arrayCalFernanda ;
            divCalifications.appendChild( dataFernandaCal ) ;
    });

    menuExamn.addEventListener('click', () => {
        const divExamn = document.createElement('div') ;
            divExamn.id = 'divExamn' ;
        const titleExamn = document.createElement('h4') ;
            titleExamn.innerHTML = "Examns" ;
            titleExamn.className = 'titleData' ;
            divExamn.appendChild( titleExamn ) ;
        arrayExa.forEach( exa => {
            const contExamn = document.createElement('div') ;
            let listExamn = document.createTextNode(`Nombre:${exa.edad}`) ;
                listExamn.className = 'textData' ;
            mainDashboard.appendChild( divExamn ) ;
            divExamn.appendChild( contExamn ) ;
            contExamn.appendChild( listExamn ) ;
        })
    })

    menuHomeWork.addEventListener('click', () => {
        const divHW = document.createElement('div') ;
            divHW.id = 'divHW' ;
        const titleHW = document.createElement('h4') ;
            titleHW.innerHTML = "HomeWork" ;
            titleHW.className = 'titleData' ;
            divHW.appendChild( titleHW ) ;
        arrayHW.forEach(HW => {
            const contHW = document.createElement('div');
            let listHW = document.createTextNode(`Nombre:${HW.edad}`);
                listHW.className = 'textData' ;
                mainDashboard.appendChild( divHW );
                divHW.appendChild( contHW ) ;
                contHW.appendChild( listHW ) ;
        });
    });

    let titleJuanNot = document.createElement('h4') ;
        titleJuanNot.className = 'titleData' ;
    let titleFernandaNot = document.createElement('h4') ;
        titleFernandaNot.className = 'titleData' ;
    let dataJuanNot = document.createElement('p') ;
        dataJuanNot.className = 'textData' ;
    let dataFernandaNot = document.createElement('p') ;
    dataFernandaNot.className = 'textData' ;
    menuNotes.addEventListener('click',()=>{
        const divNotes = document.createElement('div') ;
            divNotes.id = 'divNotes' ;
        mainDashboard.appendChild( divNotes ) ;
        titleFernandaNot.innerHTML = "This is Notes is from Fernanda Molina F." ;
        divNotes.appendChild( titleFernandaNot ) ;
        dataFernandaNot.innerHTML = arrayNotFernanda ;
        divNotes.appendChild( dataFernandaNot ) ;
        titleJuanNot.innerHTML = "This Notes is from Juan Palma S." ;
        divNotes.appendChild( titleJuanNot ) ;
        dataJuanNot.innerHTML = arrayNotJuan ;
        divNotes.appendChild( dataJuanNot ) ;
    })

    menuMeeting.addEventListener('click', () => {
        const divMeeting = document.createElement('div') ;
            divMeeting.id = 'divMeeting' ;
        const titleMeet = document.createElement('h4') ;
            titleMeet.innerHTML = "Meetings" ;
            titleMeet.className = 'titleData' ;
            divMeeting.appendChild( titleMeet ) ;
        arrayMeet.forEach(Meet => {
            const contMeeting = document.createElement('div') ;
            let listMeeting = document.createTextNode(`Nombre:${Meet.edad}`) ;
                listMeeting.className = 'textData' ;
                mainDashboard.appendChild( divMeeting );
                divMeeting.appendChild( contMeeting ) ;
                contMeeting.appendChild( listMeeting ) ;
        });
    });

    menuActivity.addEventListener('click',()=>{
        const divActivity = document.createElement('div') ;
            divActivity.id = 'divActivity' ;
        const titleAct = document.createElement('h4') ;
            titleAct.innerHTML = "Activitys" ;
            titleAct.className = 'titleData' ;
            divActivity.appendChild( titleAct ) ;
        arrayAct.forEach(act => {
            const contActivity = document.createElement('div') ;
            let listActivity = document.createTextNode(`Nombre:${act.edad}`) ;
                listActivity.className = 'textData' ;
                mainDashboard.appendChild( divActivity ) ;
                divActivity.appendChild( contActivity ) ;
                contActivity.appendChild( listActivity ) ;
        })
    })

    menuMoney.addEventListener('click',()=>{
        const divMoney = document.createElement('div') ;
            divMoney.id = 'divMoney' ;
        const titleMon = document.createElement('h4') ;
            titleMon.innerHTML = "Money" ;
            titleMon.className = 'titleData' ;
            divMoney.appendChild( titleMon ) ;
        arrayMon.forEach(mon => {
            const contMoney = document.createElement('div') ;
            let listMoney = document.createTextNode(`Nombre:${mon.edad}`) ;
                listMoney.className = 'textData' ;
                mainDashboard.appendChild( divMoney ) ;
                divMoney.appendChild( contMoney ) ;
                contMoney.appendChild( listMoney ) ;
            })
    })

    menuDelete.addEventListener('click', () => {
        while (mainDashboard.firstChild) {
            mainDashboard.removeChild(mainDashboard.firstChild);
        }
    });

    btnAddWelcome.addEventListener('click',()=>{
    const contAddData = document.createElement('div') ;
            contAddData.className = 'contAddData' ;
            contAddData.id = 'contAddData' ;
            mainDivPrin.appendChild(contAddData) ;
            const headerData = document.createElement('div') ;
                headerData.className = 'headerData' ;
                contAddData.appendChild(headerData) ;
                const titleData = document.createElement('h3') ;
                    titleData.id = 'titleData' ;
                    titleData.className = 'titleData' ;
                    titleData.innerHTML = "who do Add ?" ;
                    headerData.appendChild(titleData) ;
                const removeElection = document.createElement('button') ;
                    removeElection.className = 'removeElection' ;
                    headerData.appendChild(removeElection) ;
                    const imgRemoveElection = document.createElement('img') ;
                        imgRemoveElection.className = 'imgRemoveElection' ;
                        imgRemoveElection.src = imgCruz ;
                        removeElection.appendChild(imgRemoveElection) ;
        funElectionData();
        removeElection.addEventListener('click',()=>{
            contAddData.remove() ;
        })
    })
}
