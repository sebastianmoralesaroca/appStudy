function funUserTeacher() {
    const mainMenu = document.getElementById('mainMenu') ;
    funButtonMenu();

    menuCalifications.addEventListener('click', () => {
        const divCal = document.createElement('div') ;
            divCal.className = 'divData' ;
            divCal.id = 'divCal' ;
        const titleCalFer = document.createElement('h4') ;
            titleCalFer.innerHTML = "Califications " + user3.firstname ;
            titleCalFer.className = 'titleData' ;
            divCal.appendChild( titleCalFer ) ;
        arrayCalFernanda.forEach(calFer => {
            const contCalFer = document.createElement('div') ;
            let listCalFer = document.createTextNode(`SUBJECT ${calFer.subject} ${calFer.calification}`) ;
                listCalFer.className = 'textData' ;
                mainDashboard.appendChild(divCal) ;
                divCal.appendChild(contCalFer) ;
                contCalFer.appendChild(listCalFer) ;
        });
        const titleCalJuan = document.createElement('h4') ;
            titleCalJuan.innerHTML = "Califications " + user4.firstname ;
            titleCalJuan.className = 'titleData' ;
            divCal.appendChild(titleCalJuan) ;
        arrayCalJuan.forEach(calJuan => {
            const contCalJuan = document.createElement('div') ;
            let listCalJuan = document.createTextNode(`SUBJECT ${calJuan.subject} ${calJuan.calification}`) ;
                listCalJuan.className = 'textData' ;
                mainDashboard.appendChild(divCal) ;
                divCal.appendChild(contCalJuan) ;
                contCalJuan.appendChild(listCalJuan) ;
        });
    });

    menuExamn.addEventListener('click', () => {
        const divExamn = document.createElement('div') ;
            divExamn.className = 'divData' ;
            divExamn.id = 'divExamn' ;
        const titleExamn = document.createElement('h4') ;
            titleExamn.innerHTML = "Examns" ;
            titleExamn.className = 'titleData' ;
            divExamn.appendChild( titleExamn ) ;
        arrayExa.forEach( exa => {
            const contExamn = document.createElement('div') ;
            let listExamn = document.createTextNode(`SUBJECT: ${exa.subject} | DATA: ${exa.date} | TEXT: ${exa.text}`) ;
                listExamn.className = 'textData' ;
            mainDashboard.appendChild( divExamn ) ;
            divExamn.appendChild( contExamn ) ;
            contExamn.appendChild( listExamn ) ;
        })
    })

    menuHomeWork.addEventListener('click', () => {
        const divHW = document.createElement('div') ;
            divHW.className = 'divData' ;
            divHW.id = 'divHW' ;
        const titleHW = document.createElement('h4') ;
            titleHW.innerHTML = "HomeWork" ;
            titleHW.className = 'titleData' ;
            divHW.appendChild( titleHW ) ;
        arrayHW.forEach(HW => {
            const contHW = document.createElement('div');
            let listHW = document.createTextNode(`SUBJECT: ${HW.subject} | DATA: ${HW.date} | TEXT: ${HW.text}`) ;
                listHW.className = 'textData' ;
                mainDashboard.appendChild( divHW );
                divHW.appendChild( contHW ) ;
                contHW.appendChild( listHW ) ;
        });
    });

    menuNotes.addEventListener('click', () => {
        const divNot = document.createElement('div') ;
            divNot.className = 'divData' ;
            divNot.id = 'divHW' ;
        const titleNotFer = document.createElement('h4') ;
            titleNotFer.innerHTML = "Notes " + user3.firstname ;
            titleNotFer.className = 'titleData' ;
            divNot.appendChild( titleNotFer ) ;
        arrayNotFernanda.forEach(notFer => {
            const contNotFer = document.createElement('div') ;
            let listNotFer = document.createTextNode(`${notFer.text}`) ;
                listNotFer.className = 'textData' ;
                mainDashboard.appendChild(divNot) ;
                divNot.appendChild(contNotFer) ;
                contNotFer.appendChild(listNotFer) ;
        });
        const titleNotJuan = document.createElement('h4') ;
            titleNotJuan.innerHTML = "Notes " + user4.firstname ;
            titleNotJuan.className = 'titleData' ;
            divNot.appendChild(titleNotJuan) ;
        arrayNotJuan.forEach(notJuan => {
            const contNotJuan = document.createElement('div') ;
            let listNotJuan = document.createTextNode(`${notJuan.text}`) ;
                listNotJuan.className = 'textData' ;
                mainDashboard.appendChild(divNot) ;
                divNot.appendChild(contNotJuan) ;
                contNotJuan.appendChild(listNotJuan) ;
        });
    });

    menuMeeting.addEventListener('click', () => {
        const divMeeting = document.createElement('div') ;
            divMeeting.className = 'divData' ;
            divMeeting.id = 'divMeeting' ;
        const titleMeet = document.createElement('h4') ;
            titleMeet.innerHTML = "Meetings" ;
            titleMeet.className = 'titleData' ;
            divMeeting.appendChild(titleMeet) ;
        arrayMeet.forEach(Meet => {
            const contMeeting = document.createElement('div') ;
            let listMeeting = document.createTextNode(`TITLE: ${Meet.title} | DATE: ${Meet.date} | TEXT: ${Meet.text}`) ;
                listMeeting.className = 'textData' ;
                mainDashboard.appendChild(divMeeting);
                divMeeting.appendChild(contMeeting) ;
                contMeeting.appendChild(listMeeting) ;
        });
    });

    menuActivity.addEventListener('click',()=>{
        const divActivity = document.createElement('div') ;
            divActivity.className = 'divData' ;
            divActivity.id = 'divActivity' ;
        const titleAct = document.createElement('h4') ;
            titleAct.innerHTML = "Activitys" ;
            titleAct.className = 'titleData' ;
            divActivity.appendChild( titleAct ) ;
        arrayAct.forEach(act => {
            const contActivity = document.createElement('div') ;
            let listActivity = document.createTextNode(`ACTIVITY: ${act.title} | DATE: ${act.date} | TEXT ${act.text}`) ;
                listActivity.className = 'textData' ;
                mainDashboard.appendChild( divActivity ) ;
                divActivity.appendChild( contActivity ) ;
                contActivity.appendChild( listActivity ) ;
        })
    })

    menuMoney.addEventListener('click',()=>{
        const divMoney = document.createElement('div') ;
            divMoney.className = 'divData' ;
            divMoney.id = 'divMoney' ;
        const titleMon = document.createElement('h4') ;
            titleMon.innerHTML = "Money" ;
            titleMon.className = 'titleData' ;
            divMoney.appendChild( titleMon ) ;
        arrayMon.forEach(mon => {
            const contMoney = document.createElement('div') ;
            let listMoney = document.createTextNode(`REASON ${mon.title} |  DEBT $${mon.debt} | TEXT ${mon.text}`) ;
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

    const btnAddWelcome = document.createElement('button') ;
        mainWelcome.appendChild( btnAddWelcome ) ;
        btnAddWelcome.className = 'btnAddWelcome' ;
    const imgBtnWeolcome = document.createElement('img') ;
        btnAddWelcome.appendChild( imgBtnWeolcome ) ;
        imgBtnWeolcome.className = 'imgBtnWeolcome' ;
        imgBtnWeolcome.src = imgAdd ;
        const textBtnWelcome = document.createTextNode("Choose One Option")
            btnAddWelcome.appendChild( textBtnWelcome ) ;
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
