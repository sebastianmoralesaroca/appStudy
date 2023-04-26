function funHeader() {
    const heraderCont = document.createElement('div');
    body.appendChild(heraderCont);
    heraderCont.id = 'heraderCont';
    heraderCont.className = 'heraderCont';

    const headerLogo1 = document.createElement('img');
    heraderCont.appendChild(headerLogo1);
    headerLogo1.id = 'adminLogo1';
    headerLogo1 .className = 'adminLogo1';

    const headerLogo2 = document.createElement('h2');
    heraderCont.appendChild(headerLogo2);
    headerLogo2.id = 'headerLogo2';
    headerLogo2.className = 'headerLogo2';

    const headerLogo3 = document.createElement('h2');
    heraderCont.appendChild(headerLogo3);
    headerLogo3.id = 'headerLogo3';
    headerLogo3.className = 'headerLogo3';

    const headerBtnMessage = document.createElement('button');
    heraderCont.appendChild(headerBtnMessage);
    headerBtnMessage.id = 'headerBtnMessage';
    headerBtnMessage.className = 'headerBtnMessage';

    const headerBtnNoti = document.createElement('button');
    heraderCont.appendChild(headerBtnNoti);
    headerBtnNoti.id = 'headerBtnNoti';
    headerBtnNoti.className = 'headerBtnNoti';

    const headerNamePerson = document.createElement('h2')
    heraderCont.appendChild(headerNamePerson);
    headerNamePerson.id = 'headerNamePerson';
    headerNamePerson.className = 'headerNamePerson';

    const headerImgPerson = document.createElement('img');
    heraderCont.appendChild(headerImgPerson);
    headerImgPerson.id = 'headerImgPerson';
    headerImgPerson.className = 'headerImgPerson';
}