function funUserTeacher() {
    const mainMenu = document.getElementById('mainMenu') ;
    const menuCalifications = document.createElement('button') ;
        mainMenu.appendChild(menuCalifications) ;
        menuCalifications.className = 'menuBtn' ;
        menuCalifications.id = 'menuCalifications' ;
        menuCalifications.innerHTML = "Califications" ;
        const img1 = document.createElement('img') ;
            menuCalifications.appendChild(img1) ;
            img1.className = 'menuImg' ;
            img1.src = imgcalifications;
    const menuExamn = document.createElement('button');
        mainMenu.appendChild(menuExamn);
        menuExamn.className ='menuBtn';
        menuExamn.id = 'menuExamn' ;
        menuExamn.innerHTML = "Examn" ;
        const img2 = document.createElement('img');
            menuExamn.appendChild(img2);
            img2.className = 'menuImg' ;
            img2.src = imgExamn ;
    const menuHomeWork = document.createElement('button');
        mainMenu.appendChild(menuHomeWork);
        menuHomeWork.className = 'menuBtn';
        menuHomeWork.id = 'menuHomeWork';
        menuHomeWork.innerHTML = "Homework"
        const img3 = document.createElement('img');
            menuHomeWork.appendChild(img3);
            img3.className = 'menuImg';
            img3.src = imgtask;
    const menuNotes = document.createElement('button');
        mainMenu.appendChild(menuNotes);
        menuNotes.className = 'menuBtn';
        menuNotes.id = 'menuNotes';
        menuNotes.innerHTML ="Notes";
        const img4 = document.createElement('img');
            menuNotes.appendChild(img4);
            img4.className ='menuImg';
            img4.src = imgcoment;
    const menuMeeting = document.createElement('button') ;
        mainMenu.appendChild(menuMeeting) ;
        menuMeeting.className = 'menuBtn' ;
        menuMeeting.id = 'menuMeeting' ;
        menuMeeting.innerHTML = "Meeting" ;
        const img5 = document.createElement('img') ;
            menuMeeting.appendChild(img5) ;
            img5.className = 'menuImg' ;
            img5.src = imgMeeting ;
    const menuActivity = document.createElement('button') ;
        mainMenu.appendChild(menuActivity) ;
        menuActivity.className = 'menuBtn' ;
        menuActivity.id = 'menuActivity' ;
        menuActivity.innerHTML = "Activity" ;
        const img6 = document.createElement('img') ;
            menuActivity.appendChild(img6) ;
            img6.className = 'menuImg' ;
            img6.src = imgActivity ;
    const menuMoney = document.createElement('button') ;
        mainMenu.appendChild(menuMoney) ;
        menuMoney.className = 'menuBtn' ;
        menuMoney.id = 'menuMoney' ;
        menuMoney.innerHTML = "Money" ;
        const img7 = document.createElement('img') ;
            menuMoney.appendChild(img7) ;
            img7.className = 'menuImg' ;
            img7.src = imgmoney ;
    const btnAddWelcome = document.createElement('button') ;
        mainWelcome.appendChild(btnAddWelcome) ;
        btnAddWelcome.innerHTML = "Choose One Option" ;
        btnAddWelcome.className = 'btnAddWelcome' ;

        function funRemoveDivs (aa, ab, ac, ad, ae, af) {
            aa.remove() ;
            ab.remove() ;
            ac.remove() ;
            ad.remove() ;
            ae.remove() ;
            af.remove() ;
        };

    let TitleJuan = document.createElement('h4') ;
    let TitleFernanda = document.createElement('h4') ;
    let dataJuan = document.createElement('p') ;
    let dataFernanda = document.createElement('p') ;

        const divCalifications = document.createElement('div') ;
    menuCalifications.addEventListener( 'click', () =>{
        funRemoveDivs( divExamn, divHW, divNotes, divMeeting, divActivity, divMoney ) ;
        mainDashboard.appendChild( divCalifications ) ;
        TitleJuan.innerHTML = "This Califications is from Juan Palma S." ;
        divCalifications.appendChild( TitleJuan ) ;
        dataJuan.innerHTML = arrayCalJuan ;
        divCalifications.appendChild( dataJuan ) ;
        TitleFernanda.innerHTML = "This Califications is from Fernanda Molina F." ;
        divCalifications.appendChild( TitleFernanda ) ;
        dataFernanda.innerHTML = arrayCalFernanda ;
        divCalifications.appendChild( dataFernanda ) ;
    });

    const divExamn = document.createElement('div') ;
    arrayExa.forEach(Examn => {
        const contExamn = document.createElement('div');
        let listExamn = document.createTextNode(`Nombre:${Examn.edad}`);
        menuExamn.addEventListener('click', () => {
            funRemoveDivs( divCalifications, divHW, divNotes, divMeeting, divActivity, divMoney ) ;
            mainDashboard.appendChild( divExamn ) ;
            divExamn.appendChild( contExamn ) ;
            contExamn.appendChild( listExamn ) ;
        });
    });

    const divHW = document.createElement('div') ;
    arrayHW.forEach(HW => {
        const contHW = document.createElement('div');
        let listHW = document.createTextNode(`Nombre:${HW.edad}`);
        menuHomeWork.addEventListener('click', () => {
            funRemoveDivs( divCalifications, divExamn, divNotes, divMeeting, divActivity, divMoney ) ;
            mainDashboard.appendChild( divHW );
            divHW.appendChild( contHW ) ;
            contHW.appendChild( listHW ) ;
        });
    });

    const divNotes = document.createElement('div') ;
    menuNotes.addEventListener('click',()=>{
        funRemoveDivs( divCalifications, divExamn, divHW, divMeeting, divActivity, divMoney ) ;
        mainDashboard.appendChild( divNotes ) ;
        TitleFernanda.innerHTML = "This is Notes is from Fernanda Molina F." ;
        divNotes.appendChild( TitleFernanda ) ;
        dataFernanda.innerHTML = arrayNotFernanda ;
        divNotes.appendChild( dataFernanda ) ;
        TitleJuan.innerHTML = "This Notes is from Juan Palma S." ;
        divNotes.appendChild( TitleJuan ) ;
        dataJuan.innerHTML = arrayNotJuan ;
        divNotes.appendChild( dataJuan ) ;
    })

    const divMeeting = document.createElement('div') ;
    arrayMeet.forEach(Meet => {
        const contMeeting = document.createElement('div') ;
        let listMeeting = document.createTextNode(`Nombre:${Meet.edad}`) ;
        menuMeeting.addEventListener('click', () => {
            funRemoveDivs( divCalifications, divExamn, divHW, divNotes, divActivity, divMoney ) ;
            mainDashboard.appendChild( divMeeting );
            divMeeting.appendChild( contMeeting ) ;
            contMeeting.appendChild( listMeeting ) ;
        });
    });

    const divActivity = document.createElement('div') ;
    arrayAct.forEach(act => {
        const contActivity = document.createElement('div') ;
        let listActivity = document.createTextNode(`Nombre:${act.edad}`) ;
        menuActivity.addEventListener('click',()=>{
            funRemoveDivs( divCalifications, divExamn, divHW, divNotes, divMeeting, divMoney ) ;
            mainDashboard.appendChild( divMoney ) ;
            divMoney.appendChild( contActivity ) ;
            contActivity.appendChild( listActivity ) ;
        })
    })

    const divMoney = document.createElement('div') ;
    arrayMon.forEach(mon => {
        const contMoney = document.createElement('div') ;
        let listMoney = document.createTextNode(`Nombre:${mon.edad}`) ;
        menuMoney.addEventListener('click',()=>{
            funRemoveDivs( divCalifications, divExamn, divHW, divNotes, divMeeting, divActivity ) ;
            mainDashboard.appendChild( divMoney ) ;
            divMoney.appendChild( contMoney ) ;
            contMoney.appendChild( listMoney ) ;
        })
    })

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