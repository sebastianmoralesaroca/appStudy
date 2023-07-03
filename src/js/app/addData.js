function funElectionData() {
    const contAddData = document.getElementById('contAddData');
    const titleData = document.getElementById('titleData');

    const contElectionData = document.createElement('div') ;
    contElectionData.className = 'contElectionData' ;
    contAddData.appendChild(contElectionData) ;

        const btnAddCal = document.createElement('button') ;
        btnAddCal.className = 'btnAdd' ;
        contElectionData.appendChild(btnAddCal) ;
            const imgAddCal = document.createElement('img') ;
            imgAddCal.className = 'imgAdd' ;
            imgAddCal.src = imgcalifications ;
            btnAddCal.appendChild(imgAddCal) ;
                const textMenuCalification = document.createTextNode("Add Califications") ;
                btnAddCal.appendChild( textMenuCalification ) ;

        const btnAddExa = document.createElement('button'); ;
        btnAddExa.className = 'btnAdd' ;
        contElectionData.appendChild(btnAddExa) ;
            const imgAddExa = document.createElement('img') ;
            imgAddExa.className = 'imgAdd' ;
            imgAddExa.src = imgExamn ;
            btnAddExa.appendChild(imgAddExa) ;
                const textMenuExamn = document.createTextNode("Add Examn") ;
                btnAddExa.appendChild( textMenuExamn ) ;

        const btnAddHW = document.createElement('button') ;
        btnAddHW.className = 'btnAdd' ;
        contElectionData.appendChild(btnAddHW) ;
            const imgAddHW = document.createElement('img') ;
            imgAddHW.className = 'imgAdd' ;
            imgAddHW.src = imgtask ;
            btnAddHW.appendChild(imgAddHW) ;
                const textMenuHomeWork = document.createTextNode("Add HomeWork") ;
                btnAddHW.appendChild( textMenuHomeWork ) ;

        const btnAddNotes = document.createElement('button') ;
        btnAddNotes.className = 'btnAdd' ;
        contElectionData.appendChild(btnAddNotes) ;
            const imgAddNotes = document.createElement('img') ;
            imgAddNotes.className = "imgAdd" ;
            imgAddNotes.src = imgcoment ;
            btnAddNotes.appendChild(imgAddNotes) ;
                const textMenuNotes = document.createTextNode("Add Notes") ;
                btnAddNotes.appendChild( textMenuNotes ) ;

        const btnAddMeet = document.createElement('button') ;
        btnAddMeet.className = 'btnAdd' ;
        contElectionData.appendChild(btnAddMeet) ;
            const imgAddMeet = document.createElement('img') ;
            imgAddMeet.className = 'imgAdd' ;
            imgAddMeet.src = imgMeeting ;
            btnAddMeet.appendChild(imgAddMeet) ;
                const textMenuMeeting = document.createTextNode("Add Meeting") ;
                btnAddMeet.appendChild( textMenuMeeting ) ;

        const btnAddAct = document.createElement('button') ;
        btnAddAct.className = 'btnAdd' ;
        contElectionData.appendChild(btnAddAct) ;
            const imgAddAct = document.createElement('img') ;
            imgAddAct.className = 'imgAdd' ;
            imgAddAct.src = imgActivity ;
            btnAddAct.appendChild(imgAddAct) ;
                const textMenuActivity = document.createTextNode("Add Activity") ;
                btnAddAct.appendChild( textMenuActivity ) ;

        const btnAddMon = document.createElement('button') ;
        btnAddMon.className = 'btnAdd' ;
        contElectionData.appendChild(btnAddMon) ;
            const imgAddMon = document.createElement('img') ;
            imgAddMon.className = 'imgAdd' ;
            imgAddMon.src = imgmoney ;
            btnAddMon.appendChild(imgAddMon) ;
                const textMenuMoney = document.createTextNode("Add Money") ;
                btnAddMon.appendChild( textMenuMoney ) ;


    btnAddCal.addEventListener( 'click', ()=>{
        contElectionData.remove();
        titleData.innerHTML = "Califications" ;

        const contFormCal = document.createElement('div') ;
        contFormCal.className = 'contFormPush' ;
        contAddData.appendChild(contFormCal) ;
            const inpCalNameStudent = document.createElement('input') ;
            inpCalNameStudent.className = 'inputForm' ;
            inpCalNameStudent.placeholder = "Name Student" ;
            contFormCal.appendChild(inpCalNameStudent) ;

            const inpCalSubect = document.createElement('input') ;
            inpCalSubect.className = 'inputForm' ;
            inpCalSubect.placeholder = "Subject" ;
            contFormCal.appendChild(inpCalSubect) ;

            const inpCalification = document.createElement('input') ;
            inpCalification.className = 'inputForm' ;
            inpCalification.placeholder = "Calification Student" ;
            inpCalification.type = 'number' ;
            contFormCal.appendChild(inpCalification) ;

            const btnCalPush = document.createElement('button') ;
            btnCalPush.className = 'btnPush' ;
            btnCalPush.innerHTML = "Push Calification" ;
            contFormCal.appendChild(btnCalPush) ;

            btnCalPush.addEventListener('click', () => {
            if (inpCalNameStudent.value === user4.firstname +" "+ user4.lastname) {
                let newCal = {subject: inpCalSubect.value, calification: inpCalification.value} ;
                arrayCalJuan.push(newCal) ;
                console.log(user2.position +" "+ user2.firstname +" "+ user2.lastname +" "+ "Added Calification" +" "+ user4.firstname +" "+ user4.lastname) ;
                alert("Added Calification" +" "+ inpCalSubect.value +" "+ inpCalification.value +" "+ user4.firstname +" "+ user4.lastname) ;
            }
            else if ( inpCalNameStudent.value === user3.firstname ) {
                let newCal = {subject: inpCalSubect.value, calification: inpCalification.value} ;
                arrayCalFernanda.push(newCal) ;
                console.log(user2.position +" "+ user2.firstname +" "+ user2.lastname +" "+ "Added Calification" +" "+ user3.firstname +" "+ user3.lastname) ;
                alert("Added Calification" +" "+ inpCalSubect.value +" "+ inpCalification.value +" "+ user3.firstname +" "+ user3.lastname) ;
            }
            else {
                console.log("Error Name Student") ;
                alert("Error Name Student") ;
            }
        })
    })


    btnAddExa.addEventListener('click', ()=>{
        contElectionData.remove() ;
        titleData.innerHTML = "Examns" ;

        const contFormExa = document.createElement('div') ;
            contFormExa.className = 'contFormPush' ;
            contAddData.appendChild(contFormExa) ;

                const inpExaSubject = document.createElement('input') ;
                inpExaSubject.className = 'inputForm' ;
                inpExaSubject.placeholder = "Election Subject" ;
                contFormExa.appendChild(inpExaSubject) ;

                const inpExaDate = document.createElement('input') ;
                inpExaDate.className = 'inputForm' ;
                inpExaDate.type = 'date' ;
                contFormExa.appendChild(inpExaDate) ;

                const inpExaReviw = document.createElement('textarea') ;
                inpExaReviw.className = 'inpReviw' ;
                inpExaReviw.placeholder = "Add You Reviw For Examn" ;
                contFormExa.appendChild(inpExaReviw) ;

                const btnExaPush = document.createElement('button') ;
                btnExaPush.className = 'btnPush' ;
                btnExaPush.innerHTML = "Push Examn" ;
                contFormExa.appendChild(btnExaPush) ;

        btnExaPush.addEventListener('click', () =>{
            let newExamn = { subject: inpExaSubject.value, date: inpExaDate.value, text: inpExaReviw.value } ;
            arrayExa.push(newExamn) ;

            let newNoti = { position: user2.position, name: user2.firstname +" "+ user2.lastname, category: "Examn", subject: inpExaSubject.value } ;
            arrayNotifications.push(newNoti) ;

            console.log("Added New Examn" +" "+ inpExaSubject.value +" "+ inpExaDate.value) ;
            alert(user2.position +" "+ user2.firstname +" "+ user2.lastname +" "+ "Added New Examn" +" "+ inpExaSubject.value +" "+ inpExaDate.value) ;
        })
    })


    btnAddHW.addEventListener('click', ()=>{
        contElectionData.remove() ;
        titleData.innerHTML = "HomeWork" ;

        const contFormHW = document.createElement('div') ;
            contFormHW.className = 'contFormPush' ;
            contAddData.appendChild(contFormHW) ;

            const inpHWSubject = document.createElement('input') ;
            inpHWSubject.className = 'inputForm' ;
            inpHWSubject.type = 'text' ;
            inpHWSubject.placeholder = 'Election Subject' ;
            contFormHW.appendChild(inpHWSubject) ;

            const inpHWData = document.createElement('input') ;
            inpHWData.className = 'inputForm' ;
            inpHWData.type = 'date' ;
            contFormHW.appendChild(inpHWData) ;

            const inpHWReviw = document.createElement('textarea') ;
            inpHWReviw.className = 'inpReviw' ;
            inpHWReviw.placeholder = "Add You Reviw for HomeWork" ;
            contFormHW.appendChild(inpHWReviw) ;

            const btnHWPush = document.createElement('button') ;
            btnHWPush.className = 'btnPush' ;
            btnHWPush.innerHTML = "Push HomeWork" ;
            contFormHW.appendChild(btnHWPush) ;

        btnHWPush.addEventListener('click', () => {
            let newHW = {subject: inpHWSubject.value, date: inpHWData.value, text: inpHWReviw.value} ;
            arrayHW.push(newHW) ;
            console.log(user2.position +" "+ user2.firstname +" "+ user2.lastname +" "+ "Added New HomeWork" +" "+ inpHWSubject.value +" "+ inpHWData.value);
            alert("Added New HomeWork" +" "+ inpHWSubject.value +" "+ inpHWData.value)
        })
    })


    btnAddNotes.addEventListener( 'click', ()=>{
        contElectionData.remove() ;
        titleData.innerHTML = "Notes"

        const contFormNot = document.createElement("div") ;
        contFormNot.className = 'contFormPush' ;
        contAddData.appendChild(contFormNot) ;

            const inpNotNameSudent = document.createElement('input') ;
            inpNotNameSudent.className = 'inputForm' ;
            inpNotNameSudent.placeholder = "Name Student" ;
            inpNotNameSudent.type = 'text' ;
            contFormNot.appendChild(inpNotNameSudent) ;

            const inpNotReviw = document.createElement('textarea') ;
            inpNotReviw.className = 'inpReviw' ;
            inpNotReviw.placeholder = "Add Your Reviw For The Student" ;
            contFormNot.appendChild(inpNotReviw) ;

            const btnNotPush = document.createElement('button') ;
            btnNotPush.className = 'btnPush' ;
            btnNotPush.innerHTML = "Push Note" ;
            contFormNot.appendChild(btnNotPush) ;

        btnNotPush.addEventListener('click', () => {
            if (inpNotNameSudent.value === user4.firstname +" "+ user4.lastname) {
                let newNotJuan = {text: inpNotReviw.value}
                arrayNotJuan.push(newNotJuan) ;
                console.log(user2.position +" "+ user2.firstname +" "+ user2.lastname +" "+ "Added Note" +" "+ user4.firstname +" "+ user4.lastname) ;
                alert("Added Note" +" "+ user4.firstname +" "+ user4.lastname) ;
            }
            else if ( inpNotNameSudent.value === user3.firstname +" "+ user3.lastname) {
                let newNotFer = {text: inpNotReviw.value} ;
                arrayNotFernanda.push(newNotFer) ;
                console.log(user2.position +" "+ user2.firstname +" "+ user2.lastname +" "+ "Added Note" +" "+ user3.firstname +" "+ user3.lastname) ;
                alert("Added Note" +" "+ user3.firstname +" "+ user3.lastname) ;
            }
            else {
                console.log("Error Name Student") ;
                alert("Error Name Student") ;
            }
        })
    })


    btnAddMeet.addEventListener('click',()=>{
        contElectionData.remove() ;
        titleData.innerHTML = "Meetings" ;

        const contFormMeet = document.createElement('div') ;
        contFormMeet.className = 'contFormPush' ;
        contAddData.appendChild(contFormMeet) ;

            const inpMeetTitle = document.createElement('input') ;
            inpMeetTitle.className = 'inputForm' ;
            inpMeetTitle.type = 'text' ;
            inpMeetTitle.placeholder = "Title Meeting" ;
            contFormMeet.appendChild(inpMeetTitle) ;

            const inpMeetDate = document.createElement('input') ;
            inpMeetDate.className = 'inputForm' ;
            inpMeetDate.type = 'date' ;
            contFormMeet.appendChild(inpMeetDate) ;

            const inpMeetReviw = document.createElement('textarea') ;
            inpMeetReviw.className = 'inpReviw' ;
            inpMeetReviw.placeholder = "Add Information For The Meeting" ;
            contFormMeet.appendChild(inpMeetReviw) ;

            const btnMeetPush = document.createElement('button') ;
            btnMeetPush.className = 'btnPush' ;
            btnMeetPush.innerHTML = "Push Meeting" ;
            contFormMeet.appendChild(btnMeetPush) ;

        btnMeetPush.addEventListener('click', () => {
            let newMeet = {title: inpMeetTitle.value, date: inpMeetDate.value, text: inpMeetReviw.value} ;
            arrayMeet.push(newMeet) ;
            console.log(user2.position +" "+ user2.firstname +" "+ user2.lastname +" "+ "Added New Meeting" +" "+ inpMeetTitle.value +" "+ inpMeetDate.value) ;
            alert("Added New Meeting" +" "+ inpMeetTitle.value +" "+ inpMeetDate.value) ;
        })
    })


    btnAddAct.addEventListener('click',()=>{
        contElectionData.remove();
        titleData.innerHTML = "Activity" ;

        const contFormAct = document.createElement('div') ;
        contFormAct.className = 'contFormPush' ;
        contAddData.appendChild(contFormAct) ;

            const inpActTitle = document.createElement('input') ;
            inpActTitle.className = 'inputForm' ;
            inpActTitle.type = 'text' ;
            inpActTitle.placeholder = "Title Activity" ;
            contFormAct.appendChild(inpActTitle) ;

            const inpActDate = document.createElement('input') ;
            inpActDate.className = 'inputForm' ;
            inpActDate.type = 'date' ;
            contFormAct.appendChild(inpActDate) ;

            const inpActReviw = document.createElement('textarea') ;
            inpActReviw.className = 'inpReviw' ;
            inpActReviw.placeholder = "Add Information For The Activity" ;
            contFormAct.appendChild(inpActReviw) ;

            const btnActPush = document.createElement('button') ;
            btnActPush.className = 'btnPush' ;
            btnActPush.innerHTML = "Push Activity" ;
            contFormAct.appendChild(btnActPush) ;

        btnActPush.addEventListener('click', () => {
            let newAct = {title: inpActTitle.value, date: inpActDate.value, text: inpActReviw.value} ;
            arrayAct.push(newAct) ;
            console.log(user2.position +" "+ user2.firstname +" "+ user2.lastname +" "+ "Added Activity" +" "+ inpActTitle.value) ;
            alert("Added activity" +" "+ inpActTitle.value +" "+ inpActDate.value) ;
        })
    })


    btnAddMon.addEventListener('click',()=>{
        contElectionData.remove() ;
        titleData.innerHTML = "Money" ;

        const contFormMon = document.createElement('div') ;
        contFormMon.className = 'contFormPush' ;
        contAddData.appendChild(contFormMon) ;

            const inpMonReason = document.createElement('input') ;
            inpMonReason.className = 'inputForm' ;
            inpMonReason.type = 'text' ;
            inpMonReason.placeholder = "Name Debt" ;
            contFormMon.appendChild(inpMonReason) ;

            const inpMonMoney = document.createElement('input') ;
            inpMonMoney.className = 'inputForm' ;
            inpMonMoney.placeholder = "Add Debt" ;
            inpMonMoney.type = 'number' ;
            contFormMon.appendChild(inpMonMoney) ;

            const inpMonReviw = document.createElement('textarea') ;
            inpMonReviw.className = 'inpReviw' ;
            inpMonReviw.type = 'textarea' ;
            inpMonReviw.placeholder = "Add Iformation For The Debt" ;
            contFormMon.appendChild(inpMonReviw) ;

            const btnMonPuch = document.createElement('button') ;
            btnMonPuch.className = 'btnPush';
            btnMonPuch.innerHTML = "Push Debt" ;
            contFormMon.appendChild(btnMonPuch);

        btnMonPuch.addEventListener('click', () => {
            let newMon = {title: inpMonReason.value, debt: inpMonMoney.value, text: inpMonReviw.value} ;
            arrayMon.push(newMon) ;
            console.log( user2.position +" "+ user2.firstname +" "+user2.lastname +" "+ "Added Money" +" "+ inpMonReason.value +" "+"$"+ inpMonMoney.value) ;
            alert("Added Money" +" "+ inpMonReason.value +" "+"$"+ inpMonMoney.value) ;
        })
    })
}


function funDataUsers () {
    const contAddData = document.getElementById('contAddData');
    const titleData = document.getElementById('titleData');

    const contElectionData = document.createElement('div') ;
    contElectionData.className = 'contElectionData' ;
    contAddData.appendChild(contElectionData) ;

        const btnLookUsers = document.createElement('button') ;
        btnLookUsers.className = 'btnAdd' ;
        contElectionData.appendChild(btnLookUsers) ;
            const imgLookUsers = document.createElement('img') ;
            imgLookUsers.className = 'imgAdd' ;
            imgLookUsers.src = imgUsers ;
            btnLookUsers.appendChild(imgLookUsers) ;
                const textMenuLookUsers = document.createTextNode("Look Users") ;
                btnLookUsers.appendChild(textMenuLookUsers) ;

        const btnAddUser = document.createElement('button') ;
        btnAddUser.className = 'btnAdd' ;
        contElectionData.appendChild(btnAddUser) ;
            const imgAddUser = document.createElement('img') ;
            imgAddUser.className = 'imgAdd' ;
            imgAddUser.src = imgAddedUser ;
            btnAddUser.appendChild(imgAddUser) ;
                const textMenuAddUser = document.createTextNode("Add User") ;
                btnAddUser.appendChild(textMenuAddUser) ;

        const btnDelUser = document.createElement('button') ;
        btnDelUser.className = 'btnAdd' ;
        contElectionData.appendChild(btnDelUser) ;
            const imgDelUser = document.createElement('img') ;
            imgDelUser.className = 'imgAdd' ;
            imgDelUser.src = imgDeleteUser ;
            btnDelUser.appendChild(imgDelUser) ;
                const textMenuDelUser= document.createTextNode("Delete User") ;
                btnDelUser.appendChild(textMenuDelUser) ;

        const btnApliUser = document.createElement('button') ;
        btnApliUser.className = 'btnAdd' ;
        contElectionData.appendChild(btnApliUser) ;
            const imgApliUser = document.createElement('img') ;
            imgApliUser.className = 'imgAdd' ;
            imgApliUser.src = imgAplications ;
            btnApliUser.appendChild(imgApliUser) ;
                const textMenuApliUser= document.createTextNode("Aplications") ;
                btnApliUser.appendChild(textMenuApliUser) ;

        const textApli = document.createElement("p") ;
        textApli.className = 'textApli' ;
        textApli.innerHTML = textAplications ;
        contAddData.appendChild(textApli) ;


    btnLookUsers.addEventListener('click', () => {
        const divUsers = document.createElement('div') ;
        divUsers.className = 'divData' ;
        divUsers.id = 'divUsers' ;
            const titleUsers = document.createElement('h4') ;
            titleUsers.innerHTML = "List Users" ;
            titleUsers.className = 'titleData' ;
            divUsers.appendChild( titleUsers )
        users.forEach( use => {
            const contUser = document.createElement('div') ;
            let listUsers = document.createTextNode(`FIRSTNAME: ${use.firstname} ${use.lastname} | POSITION: ${use.position} | SEXO: ${use.sexo}`) ;
            listUsers.className = 'textData' ;
            mainDashboard.appendChild( divUsers ) ;
            divUsers.appendChild( contUser ) ;
            contUser.appendChild( listUsers ) ;
        })
        console.log(user1.position +" "+ user1.firstname +" "+ user1.lastname +" "+ "Print Users") ;
        alert("Tus datos se imprimeron en el Dashboard") ;
    })


    btnAddUser.addEventListener('click', () => {
        contElectionData.remove() ;
        titleData.innerHTML = "Add User" ;
    
        const contFormUsers = document.createElement('div') ;
        contFormUsers.className = 'contFormPush' ;
        contAddData.appendChild(contFormUsers) ;
    
            const inpAddUseFrist = document.createElement('input') ;
            inpAddUseFrist.className = 'inputForm' ;
            inpAddUseFrist.type = 'text' ;
            inpAddUseFrist.placeholder = "Type FristName" ;
            contFormUsers.appendChild(inpAddUseFrist) ;
        
            const inpAddUseLast = document.createElement('input') ;
            inpAddUseLast.className = 'inputForm' ;
            inpAddUseLast.placeholder = "Type LastName" ;
            inpAddUseLast.type = 'text' ;
            contFormUsers.appendChild(inpAddUseLast) ;
        
            const inpAddUsePosition = document.createElement('input') ;
            inpAddUsePosition.className = 'inputForm' ;
            inpAddUsePosition.placeholder = "Type Position" ;
            inpAddUsePosition.type = 'text' ;
            contFormUsers.appendChild(inpAddUsePosition) ;
        
            const inpAddUseSexo = document.createElement('input') ;
            inpAddUseSexo.className = 'inputForm' ;
            inpAddUseSexo.placeholder = "Type Sexo" ;
            inpAddUseSexo.type = 'text' ;
            contFormUsers.appendChild(inpAddUseSexo) ;
        
            const btnUserAddPush = document.createElement('button') ;
            btnUserAddPush.className = 'btnPush';
            btnUserAddPush.innerHTML = "Push User" ;
            contFormUsers.appendChild(btnUserAddPush);
        
        btnUserAddPush.addEventListener('click', () => {
            let newAplicationAdd = {firstname: inpAddUseFrist.value, lastname: inpAddUseLast.value, position: inpAddUsePosition.value, sexo: inpAddUseSexo.value} ;
            arrayAplicationAdd.push(newAplicationAdd) ;
            console.log( user1.position +" "+ user1.firstname +" "+user1.lastname +" "+ "Aplication Added User") ;
            alert("Aplication Added User" +" "+ inpAddUseFrist.value +" "+ inpAddUseLast.value +" "+ inpAddUsePosition.value +" "+ inpAddUseSexo.value) ;
        })
    })


    btnDelUser.addEventListener('click', () => {
        contElectionData.remove() ;
        titleData.innerHTML = "Delete User" ;
    
        const contFormUsers = document.createElement('div') ;
        contFormUsers.className = 'contFormPush' ;
        contAddData.appendChild(contFormUsers) ;
    
            const inpDelUseFrist = document.createElement('input') ;
            inpDelUseFrist.className = 'inputForm' ;
            inpDelUseFrist.type = 'text' ;
            inpDelUseFrist.placeholder = "Type FristName" ;
            contFormUsers.appendChild(inpDelUseFrist) ;
        
            const inpDelUseLast = document.createElement('input') ;
            inpDelUseLast.className = 'inputForm' ;
            inpDelUseLast.placeholder = "Type LastName" ;
            inpDelUseLast.type = 'text' ;
            contFormUsers.appendChild(inpDelUseLast) ;
        
            const inpDelUsePosition = document.createElement('input') ;
            inpDelUsePosition.className = 'inputForm' ;
            inpDelUsePosition.placeholder = "Type Position" ;
            inpDelUsePosition.type = 'text' ;
            contFormUsers.appendChild(inpDelUsePosition) ;
        
            const inpDelUseSexo = document.createElement('input') ;
            inpDelUseSexo.className = 'inputForm' ;
            inpDelUseSexo.placeholder = "Type Sexo" ;
            inpDelUseSexo.type = 'text' ;
            contFormUsers.appendChild(inpDelUseSexo) ;
        
            const btnUserDelPush = document.createElement('button') ;
            btnUserDelPush.className = 'btnPush';
            btnUserDelPush.innerHTML = "Push User" ;
            contFormUsers.appendChild(btnUserDelPush);

        btnUserDelPush.addEventListener('click', () => {
            let newAplicationDel = {firstname: inpDelUseFrist.value, lastname: inpDelUseLast.value, position: inpDelUsePosition.value, sexo: inpDelUseSexo.value} ;
            arrayAplicationDel.push(newAplicationDel) ;
            console.log( user1.position +" "+ user1.firstname +" "+user1.lastname +" "+ "Aplication Delete User") ;
            alert("Aplication Delete User" +" "+ inpDelUseFrist.value +" "+ inpDelUseLast.value +" "+ inpDelUsePosition.value +" "+ inpDelUseSexo.value) ;
        })
    })


    btnLookUsers.addEventListener('click', () => {
        const divUsers = document.createElement('div') ;
        divUsers.className = 'divData' ;
        divUsers.id = 'divUsers' ;
            const titleUsers = document.createElement('h4') ;
            titleUsers.innerHTML = "List Users" ;
            titleUsers.className = 'titleData' ;
            divUsers.appendChild( titleUsers )

        users.forEach( use => {
            const contUser = document.createElement('div') ;
            let listUsers = document.createTextNode(`FIRSTNAME: ${use.firstname} ${use.lastname} | POSITION: ${use.position} | SEXO: ${use.sexo}`) ;
            listUsers.className = 'textData' ;
            mainDashboard.appendChild( divUsers ) ;
            divUsers.appendChild( contUser ) ;
            contUser.appendChild( listUsers ) ;
        })
        console.log(user1.position +" "+ user1.firstname +" "+ user1.lastname +" "+ "Print Users") ;
        alert("Tus datos se imprimeron en el Dashboard") ;
    })


    btnApliUser.addEventListener('click', () => {
        const divApli = document.createElement('div') ;
        divApli.className = 'divData' ;
        mainDashboard.appendChild(divApli) ;
        const titleApliAdd = document.createElement('h4') ;
        titleApliAdd.innerHTML = "Aplications Added" ;
        titleApliAdd.className = 'titleData' ;
        divApli.appendChild(titleApliAdd) ;

        arrayAplicationAdd.forEach(apliAdd => {
            const contApliAdd = document.createElement('div') ;
            let listApliAdd = document.createTextNode(`FIRSTNAME: ${apliAdd.firstname} | LASTNAME: ${apliAdd.lastname} | POSITION: ${apliAdd.position} | SEXO: ${apliAdd.sexo}`) ;
            listApliAdd.className = 'textData' ;
            divApli.appendChild(contApliAdd) ;
            contApliAdd.appendChild(listApliAdd) ;
    });
        const titleApliDel = document.createElement('h4') ;
        titleApliDel.innerHTML = "Aplications Delete" ;
        titleApliDel.className = 'titleData' ;
        divApli.appendChild(titleApliDel) ;

        arrayAplicationDel.forEach(apliDel => {
            const contApliDel = document.createElement('div') ;
            let listApliDel = document.createTextNode(`FIRSTNAME: ${apliDel.firstname} | LASTNAME: ${apliDel.lastname} | POSITION: ${apliDel.position} | SEXO: ${apliDel.sexo}`) ;
            listApliDel.className = 'textData' ;
            divApli.appendChild(contApliDel) ;
            contApliDel.appendChild(listApliDel) ;
        })
        console.log(user1.position +" "+ user1.firstname +" "+ user1.lastname +" "+ "Print Aplications") ;
        alert("Tus datos se imprimeron en el Dashboard") ;
    })
}