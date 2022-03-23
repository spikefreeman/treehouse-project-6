
// Elements from HTML file
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startBtn = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');

// Number of wrong guesses
let missed = 0;

//Array of phrases
const phrases = ["As Good As It Gets", 
                "Tough Love", 
                "Long Live The Queen", 
                "Any Port In A Storm", 
                "Saved By The Bell"];





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
    //Return statement
    return randomPhrase.split('');
};

//Call get random phrase 
const phraseArray = getRandomPhraseAsArray(phrases);



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
    const correct = document.querySelectorAll('li');
    let match = null;

    //Loop throught to check if correct
    for (i = 0; i < checkLetter.length; i++){
        //if clicked button is equal to a letter in the phrase index (to lowercase)
        if (button.textContent === correct[i].textContent.toLowerCase()){
            correct[i].classList.add('show');
            match = button.textContent;
        } 
    }

    //return statement
    return match;
}

checkLetter(addPhraseToDisplay);


//Listen for selecting a letter 
qwerty.addEventListener('click', (e) => {

    //Place clicked variable
    let clicked = e.target;

    //Check if clicked button and if not chosen
    if (clicked.tagName === "BUTTON" || clicked.className != "chosen"){
        clicked.className = 'chosen';
        let letterFound = checkLetter(clicked);
    } 
});