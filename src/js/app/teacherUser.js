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
            img6.src = imgdashboard ;
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

    const divCalifications = document.createElement('div') ;
        divCalifications.className = 'contDataDashboard' ;
    const divExamn = document.createElement('div') ;
        divExamn.className = 'contDataDashboard' ;
    const divHomeWork = document.createElement('div') ;
        divHomeWork.className = 'contDataDashboard' ;
    const divNotes = document.createElement('div') ;
        divNotes.className = 'contDataDashboard' ;
    const divMeeting = document.createElement('div') ;
        divMeeting.className = 'contDataDashboard' ;
    const divActivity = document.createElement('div') ;
        divActivity.className = 'contDataDashboard' ;
    const divMoney = document.createElement('div') ;
        divMoney.className = 'contDataDashboard' ;

    menuCalifications.addEventListener( 'click', () =>{
        mainDashboard.appendChild(divCalifications) ;
    });

    menuExamn.addEventListener( 'click', () =>{
        mainDashboard.appendChild(divExamn) ;
    });

    menuHomeWork.addEventListener('click',()=>{
        mainDashboard.appendChild(divHomeWork) ;
    })

    menuNotes.addEventListener('click',()=>{
        mainDashboard.appendChild(divNotes) ;
    })

    menuMeeting.addEventListener('click',()=>{
        mainDashboard.appendChild(divMeeting) ;
    })

    menuActivity.addEventListener('click',()=>{
        mainDashboard.appendChild(divActivity) ;
    })

    menuMoney.addEventListener('click',()=>{
        mainDashboard.appendChild(divMoney) ;
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