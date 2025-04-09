// Dialogs
const dialogGift = document.getElementById('dialogGift');
const dialogGiftConfirmation = document.getElementById('dialogGiftConfirmation');
const dialogNameConfirmation = document.getElementById('dialogNameConfirmation');
const dialogNameConfirmation2 = document.getElementById('dialogNameConfirmation2');
const formDialog1 = document.getElementById('formDialog1');
const formDialog2 = document.getElementById('formDialog2');
const dialogConfidentialGift = document.getElementById('dialogConfidentialGift');

// error messages
const dialogGiftError = document.getElementById('dialogGiftError');
const ageError = document.getElementById('ageError');
const dialogNameConfirmationError = document.getElementById('dialogNameConfirmationError');
const dialogNameConfirmation2Error = document.getElementById('dialogNameConfirmation2Error');

const formDialog1FirstNameError = document.getElementById('formDialog1FirstNameError');
const formDialog1MiddleNameError = document.getElementById('formDialog1MiddleNameError');
const formDialog1AgeError = document.getElementById('formDialog1AgeError');
const formDialog1beautyError = document.getElementById('formDialog1beautyError');

const formDialog2fullNameError = document.getElementById('formDialog2fullNameError');
const boyfriendAge = document.getElementById('formDialog2fullNameError');
const formDialog2BoyfriendNameError = document.getElementById('formDialog2BoyfriendNameError');
const formDialog2WantGiftError = document.getElementById('formDialog2WantGiftError');
const formDialog2WantGiftError2 = document.getElementById('formDialog2WantGiftError2');





// Dialog buttons
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

const okButtonGiftConfirmation = document.getElementById('okButtonGiftConfirmation');

const yesButtonNameConfirmation = document.getElementById('yesButtonNameConfirmation');
const noButtonNameConfirmation = document.getElementById('noButtonNameConfirmation');

const yesButtonNameConfirmation2 = document.getElementById('yesButtonNameConfirmation2');
const noButtonNameConfirmation2 = document.getElementById('noButtonNameConfirmation2');


// Envelope
const envelopeContainer = document.getElementById('envelopeContainer');
const envelopeFront = document.getElementById('envelopeFront');
const letter = document.getElementById('letter');
const hearts = document.getElementById('hearts');
const toggleEnvelope = document.getElementById('toggleEnvelope');

let moveCount = 0; // Move yes button
const maxMoves = Math.floor(Math.random() * 6) + 5; // Random between 5 and 10
let showFormDialog2WantGiftError2 = true;

// Gambiarra
dialogGift.style.display = 'flex';
dialogGift.style.display = 'block';

// Function to move the "Yes" button to a random position
function moveYesButton() {

    if (moveCount < maxMoves) {
        moveCount++;

        // Add floating class for absolute positioning only when moving
        if (moveCount === 1) {
            yesButton.classList.add('floating');
        }

        const maxX = window.innerWidth - yesButton.offsetWidth - 20;
        const maxY = window.innerHeight - yesButton.offsetHeight - 20;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        yesButton.style.left = randomX + 'px';
        yesButton.style.top = randomY + 'px';
    }
}


// Attach event listener to move the button on hover
yesButton.addEventListener('mouseover', () => {
    moveYesButton();
});


/*
// Handle Yes button click
yesButton.addEventListener('click', () => {
  //giftQuestion.style.display = 'none';
  dialogGift.style.display = 'block';
  
  //
  dialog1.style.display = 'none';
  envelopeContainer.style.display = 'flex';
  
});
*/

// dialogGift buttons
yesButton.addEventListener('click', () => {
    dialogGift.style.display = 'none';
    envelopeContainer.style.display = 'flex';
    //dialog2.style.display = 'block';
});

noButton.addEventListener('click', () => {
    //alert('Tem certeza? Vamos tentar novamente! 😊');
    dialogGiftError.style.display = 'block';
});

// dialogGiftConfirmation button
okButtonGiftConfirmation.addEventListener('click', () => {
    dialogGiftConfirmation.style.display = 'none';

    dialogNameConfirmation.style.display = 'flex';
    dialogNameConfirmation.style.display = 'block';
    //envelopeContainer.style.display = 'flex';
    //dialog2.style.display = 'block';
});

// dialogNameConfirmation buttons
yesButtonNameConfirmation.addEventListener('click', () => {

    dialogNameConfirmation.style.display = 'none';

    dialogNameConfirmation2.style.display = 'flex';
    dialogNameConfirmation2.style.display = 'block';

});

noButtonNameConfirmation.addEventListener('click', () => {
    dialogNameConfirmationError.style.display = 'block';
});

// dialogNameConfirmation 2 buttons 
yesButtonNameConfirmation2.addEventListener('click', () => {
    dialogNameConfirmation2.style.display = 'none';

    formDialog1.style.display = 'block';
    //dialog2.style.display = 'block';
});

noButtonNameConfirmation2.addEventListener('click', () => {
    dialogNameConfirmation2Error.style.display = 'block';
});

// formDialog1 buttons
nextPage1.addEventListener('click', () => {
    const firstName = document.getElementById('firstName').value;
    const middleName = document.getElementById('middleName').value;
    const age = document.getElementById('age').value;
    const beauty = document.getElementById('beauty').value;

    clearErrorMessages();
    if (firstName.trim().toLowerCase() !== 'marianne') {
        formDialog1FirstNameError.style.display = 'block';
    } else if (middleName.trim().toLowerCase() !== 'sousa') {
        formDialog1MiddleNameError.style.display = 'block';
    } else if (age !== "14") {
        formDialog1AgeError.style.display = 'block';
    } else if (beauty <= 100000) {
        formDialog1beautyError.style.display = 'block';
        document.getElementById('beauty').value = "9999999";
    } else {
        formDialog1.style.display = 'none';
        formDialog2.style.display = 'block';
    }
});

// formDialog2 buttons
nextPage2.addEventListener('click', () => {
    let fullName = document.getElementById('fullName').value;
    fullName = fullName.trim().toLowerCase();

    let boyfriendName = document.getElementById('boyfriendName').value;
    boyfriendName = boyfriendName.trim().toLowerCase();

    let boyfriendAge = document.getElementById('boyfriendAge').value;

    let wantGift = document.getElementById('wantGift').value;
    wantGift = wantGift.trim().toLowerCase();

    clearErrorMessages();
    if (fullName !== 'marianne sousa medeiros') {
        formDialog2fullNameError.style.display = 'block';
    } else if (boyfriendAge !== "23") {
        ageError.style.display = 'block';
    } else if (boyfriendName !== 'césar' && boyfriendName !== 'cesar') {
        formDialog2BoyfriendNameError.style.display = 'block';
    } else if (wantGift !== 'sim' && wantGift !== 'nao' && wantGift !== 'não') {
        formDialog2WantGiftError.style.display = 'block';
    } else if (wantGift === 'sim' && showFormDialog2WantGiftError2 === true) {
        showFormDialog2WantGiftError2 = false;
        formDialog2WantGiftError2.style.display = 'block';
        document.getElementById('wantGift').value = 'NÃO';
    } else if (wantGift === 'nao' || wantGift === 'não') {
        formDialog2WantGiftError2.style.display = 'block';
    } else {
        formDialog2.style.display = 'none';
        envelopeContainer.style.display = 'flex';
    }
});

function clearErrorMessages() {
    formDialog1FirstNameError.style.display = 'none';
    formDialog1MiddleNameError.style.display = 'none';
    formDialog1AgeError.style.display = 'none';
    formDialog1beautyError.style.display = 'none';

    formDialog2fullNameError.style.display = 'none';
    formDialog2BoyfriendNameError.style.display = 'none';
    ageError.style.display = 'none';
    formDialog2WantGiftError.style.display = 'none';
    formDialog2WantGiftError2.style.display = 'none';
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

// Handle envelope toggle
let isEnvelopeOpenFirstTime = false;
let isEnvelopeOpen = false;
toggleEnvelope.addEventListener('click', () => {
    if (isEnvelopeOpenFirstTime === false) {
        isEnvelopeOpenFirstTime = true;

        envelopeContainer.style.display = 'none';

        dialogGiftConfirmation.style.display = 'flex';
        dialogGiftConfirmation.style.display = 'block';
    } else {
        isEnvelopeOpen = !isEnvelopeOpen;

        if (isEnvelopeOpen) {

            openEnvelope();
            openLetter();


        } else {
            letter.classList.remove('open');
            toggleEnvelope.textContent = 'Abrir Envelope';

            //closeEnvelope();
        }
    }
});

async function openEnvelope() {
    document.querySelector('.triangle-top').classList.add('open');
    document.querySelector('.triangle-top-outline').classList.add('open');

    /* Changes z-index when the envelope is fully open*/
    await wait(500);
    document.querySelector('.triangle-top').classList.add('opened');
    document.querySelector('.triangle-top-outline').classList.add('opened');
}

async function openLetter() {
    await wait(500); // time the letter takes to go up
    letter.classList.add('open');
    toggleEnvelope.style.display = "none";

    await wait(2000); // time the letter takes to disappear
    fadeOutEnvelope();

    //toggleEnvelope.textContent = 'Fechar Envelope';
}

async function fadeOutEnvelope() {
    envelopeContainer.classList.add('hidden');
    setTimeout(() => {
        envelopeContainer.style.display = 'none';
    }, 500);

    await wait(500); // wait for the animation end



    //showConfidentialGift();
    fadeInConfidentialGift()
}

function fadeInConfidentialGift() {
    dialogConfidentialGift.classList.add('hidden');
    dialogConfidentialGift.style.display = 'flex';

    // opacity comes back to 1 on the next frame
    requestAnimationFrame(() => {
        dialogConfidentialGift.classList.remove('hidden');
    });
}

async function closeEnvelope() {
    await wait(500);
    document.querySelector('.triangle-top').classList.remove('open');
    document.querySelector('.triangle-top-outline').classList.remove('open');

    /* Changes z-index when the envelope is fully cloesed*/
    document.querySelector('.triangle-top').classList.remove('opened');
    document.querySelector('.triangle-top-outline').classList.remove('opened');
}

async function showConfidentialGift() {
    //await wait(4000);
    envelopeContainer.style.display = 'none';

    dialogConfidentialGift.style.display = 'flex';
    dialogConfidentialGift.style.display = 'block';
}