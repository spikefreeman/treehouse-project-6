
// Elements from HTML file
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startBtn = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const title = document.querySelector('.title')

// Number of wrong guesses
let missed = 0;

//Array of phrases
const phrases = [
    "As Good As It Gets", 
    "Tough Love", 
    "Long Live The Queen", 
    "Any Port In A Storm", 
    "Saved By The Bell"
];



//Hide Overlay
startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
})



//Get a random phrase from the Phrases Array and display it as an Array
function getRandomPhraseAsArray(arr){
    //Random number based on length of array
    const randomNumber = Math.floor(Math.random() * arr.length);
    //Select an index inside the array
    const randomPhrase = arr[randomNumber];
    //Return statement splitting
    return randomPhrase.split('');
};


//Get random phrase and store it
let phraseArray = getRandomPhraseAsArray(phrases);
//Call add phrase to display
addPhraseToDisplay(phraseArray);



//Puts phrase up on the board
function addPhraseToDisplay(arr){

    //The display HTML area
    const phrase = document.querySelector('#phrase ul');

    // do stuff any arr that is passed in, and add to `#phrase ul`
    for (i = 0; i < phraseArray.length; i++){
        let list = document.createElement('li');
        list.textContent = arr[i];
        phrase.appendChild(list);

        // Assign letters and spaces to classes
        if ( arr[i] === ' ' ) {
            list.className = 'space';
        } else {
            list.className = 'letter';
        }
    }
}





//Check the selected letter against the answer 
function checkLetter (button){
    //Store correct letters 
    const checkLetter = document.querySelectorAll('li');
    let match = null;

    //Loop throught to check if correct
    for (i = 0; i < checkLetter.length; i++){
        //if clicked button is equal to a letter in the phrase index (to lowercase)
        if (button.textContent === checkLetter[i].textContent.toLowerCase() ) {
            checkLetter[i].classList.add('show');
            match = button.textContent;
        } 
    }

    //return statement
    return match;
}

//checkLetter(addPhraseToDisplay);
const checkWin = () => {
    const letters = document.querySelectorAll('.letter');
    const show = document.querySelectorAll('.show');

    if(letters.length === show.length){
        overlay.className = 'win';
        title.textContent = "You Win!";
        overlay.style.display = 'flex';
    }

    if (missed > 4) {
        overlay.className = 'lose';
        title.textContent = `You lost! Please try again!'`;
        overlay.style.display = 'flex';
        startBtn.textContent = 'Try Again!';
    }
};


///Listen for button click on screen keyboard
qwerty.addEventListener('click', (e) => {
        
    let buttonClick = e.target;
    // Check if button has chosen class
    if (buttonClick.tagName === 'BUTTON' || buttonClick.className === 'chosen') {
        buttonClick.className = 'chosen'; // Add the chosen class to the button that was pressed.
        buttonClick.disabled =  true; // Disabled button once clicked
        const letterFound = checkLetter(buttonClick);
        
        // Check if function find a letter, and remove heart and increment missed counter
        if ( letterFound === null ) {
            const lost = document.querySelectorAll('.tries img');
            lost[missed].src = 'images/lostHeart.png';
            lost.className = 'lost';
            missed++;
        }
    }
    checkWin();
});


