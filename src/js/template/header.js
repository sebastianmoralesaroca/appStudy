function funHeader() {
    const heraderCont = document.createElement('div');
    body.appendChild(heraderCont);
    heraderCont.id = 'heraderCont';
    heraderCont.className = 'heraderCont';

        const headerDiv1 = document.createElement('div');
        heraderCont.appendChild(headerDiv1);
        headerDiv1.id ='headerDiv1';
        headerDiv1.className ='headerDiv1';

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
            headerLogo3.innerHTML = "Nine"

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
            headerNamePerson.innerHTML ="Sebastian Morales H";

            const headerImgPerson = document.createElement('img');
            headerDiv2.appendChild(headerImgPerson);
            headerImgPerson.id = 'headerImgPerson';
            headerImgPerson.className = 'headerImgPerson';
            headerImgPerson.src = teacherMan;
}