function funUserTeacher() {
    const mainMenu = document.getElementById('mainMenu');
        const menuAddCal = document.createElement('button');
        mainMenu.appendChild(menuAddCal);
        menuAddCal.className ='menuBtn';
        menuAddCal.id = 'menuAddCal';
        menuAddCal.innerHTML ="Califications"
            const img1 = document.createElement('img');
            menuAddCal.appendChild(img1);
            img1.className ='menuImg';
            img1.src = imgcalifications;
        const menuAddExm = document.createElement('button');
        mainMenu.appendChild(menuAddExm);
        menuAddExm.className ='menuBtn';
        menuAddExm.id ='menuAddExm';
        menuAddExm.innerHTML ="Examn";
            const img2 = document.createElement('img');
            menuAddExm.appendChild(img2);
            img2.className ='menuImg';
            img2.src = imgtask;
        const menuAddHw = document.createElement('button');
        mainMenu.appendChild(menuAddHw);
        menuAddHw.className ='menuBtn';
        menuAddHw.id = 'menuAddHw';
        menuAddHw.innerHTML ="Homework"
            const img3 = document.createElement('img');
            menuAddHw.appendChild(img3);
            img3.className ='menuImg';
            img3.src = imgtask;
        const menuAddNot = document.createElement('button');
        mainMenu.appendChild(menuAddNot);
        menuAddNot.className = 'menuBtn';
        menuAddNot.id = 'menuAddNot';
        menuAddNot.innerHTML ="Notes";
            const img4 = document.createElement('img');
            menuAddNot.appendChild(img4);
            img4.className ='menuImg';
            img4.src = imgcoment;
        const menuAddMet = document.createElement('button');
        mainMenu.appendChild(menuAddMet);
        menuAddMet.className ='menuBtn';
        menuAddMet.id = 'menuAddMet';
        menuAddMet.innerHTML ="Meeting";
            const img5 = document.createElement('img');
            menuAddMet.appendChild(img5);
            img5.className ='menuImg';
            img5.src = imgUsers;
        const menuAddAct = document.createElement('button');
        mainMenu.appendChild(menuAddAct);
        menuAddAct.className ='menuBtn';
        menuAddAct.id ='menuAddAct';
        menuAddAct.innerHTML ="Activity";
            const img6 = document.createElement('img');
            menuAddAct.appendChild(img6);
            img6.className ='menuImg';
            img6.src = imgdashboard;
        const menuAddMon = document.createElement('button');
        mainMenu.appendChild(menuAddMon);
        menuAddMon.className ='menuBtn';
        menuAddMon.id ='menuAddMon';
        menuAddMon.innerHTML ="Money";
            const img7 = document.createElement('img');
            menuAddMon.appendChild(img7);
            img7.className ='menuImg';
            img7.src = imgmoney;

    function AddCalifications() {
        const btnAddCal = document.createElement('button');
        mainWelcome.appendChild(btnAddCal);
        btnAddCal.className='btnAddPost';
        btnAddCal.innerHTML="Add Califications";
            btnAddCal.addEventListener('click',()=>{
                const contAddCal = document.createElement('div');
                mainDashboard.appendChild(contAddCal);
                contAddCal.className='contAddCal';
                    let inpNameStudent = document.createElement('input');
                    contAddCal.appendChild(inpNameStudent);
                    inpNameStudent.type = 'text' ;
                    inpNameStudent.placeholder = "Student" ;
                    inpNameStudent.className = 'inpNameStudent' ;
                    let inpCalStudent = document.createElement('input') ;
                    contAddCal.appendChild(inpCalStudent) ;
                    inpCalStudent.type = 'inpCalStudent' ;
                    inpCalStudent.placeholder = "Calification Student" ;
                    inpCalStudent.className = 'inpCalStudent' ;
                    let inpRevStudent = document.createElement('input') ;
                    contAddCal.appendChild(inpRevStudent) ;
                    inpRevStudent.type = 'text' ;
                    inpRevStudent.placeholder = "Add Reviw Student" ;
                    inpRevStudent.className = 'inpRevStudent' ;
            })
    }

    menuAddCal.addEventListener('click',()=>{

    })
}