function funMain(h,j,k) {
    const mainContPrin = document.createElement('main');
        body.appendChild(mainContPrin);
        mainContPrin.className ='mainContPrin';

        const mainMenu = document.createElement('div');
            mainContPrin.appendChild(mainMenu);
            mainMenu.className ='mainMenu';
            mainMenu.id ='mainMenu';

        const mainDivPrin = document.createElement('div');
            mainContPrin.appendChild(mainDivPrin);
            mainDivPrin.className ='mainDivPrin';

            const mainWelcome = document.createElement('div');
                mainDivPrin.appendChild(mainWelcome);
                mainWelcome.className ='mainWelcome';

                let mainWelcomeTitle = document.createElement('h2');
                    mainWelcome.appendChild(mainWelcomeTitle);
                    mainWelcomeTitle.className ='mainWelcomeTitle';
                    mainWelcomeTitle.id ='mainWelcomeTitle';
                    mainWelcomeTitle.innerHTML = "Hello "+h+"!";

                let mainWelcomeText = document.createElement('p');
                    mainWelcome.appendChild(mainWelcomeText);
                    mainWelcomeText.className ='mainWelcomeText';
                    mainWelcomeText.id ='mainWelcomeText';
                    mainWelcomeText.innerHTML = j;

                let mainWelcomeImg = document.createElement('img');
                    mainWelcome.appendChild(mainWelcomeImg);
                    mainWelcomeImg.className ='mainWelcomeImg';
                    mainWelcomeImg.id ='mainWelcomeImg';
                    mainWelcomeImg.src = k;

            const mainDashboard = document.createElement('div');
                mainDivPrin.appendChild(mainDashboard);
                mainDashboard.className ='mainDashboard';

        const mainDivSecond = document.createElement('div');
            mainContPrin.appendChild(mainDivSecond);
            mainDivSecond.className ='mainDivSecond';

            const secondCalificatios = document.createElement('div');
                mainDivSecond.appendChild(secondCalificatios);
                secondCalificatios.className ='secondCalificatios';

            const secondNotes = document.createElement('div');
                mainDivSecond.appendChild(secondNotes);
                secondNotes.className ='secondNotes'

                const notesInput =  document.createElement('input');
                    secondNotes.appendChild(notesInput);
                    notesInput.className ='notesInput';
                    notesInput.innerHTML ="Write your text";

                const notesBtn = document.createElement('button');
                    secondNotes.appendChild(notesBtn);
                    notesBtn.className ='notesBtn';
                    notesBtn.innerHTML ="Add Notes";
}