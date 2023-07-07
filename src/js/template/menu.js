function funButtonMenu () {
    const menuCalifications = document.createElement('button') ;
    menuCalifications.className = 'menuBtn' ;
    menuCalifications.id = 'menuCalifications' ;
    mainMenu.appendChild( menuCalifications ) ;
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
}