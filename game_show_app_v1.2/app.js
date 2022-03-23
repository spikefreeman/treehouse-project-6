
// Elements from HTML file
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const resetBtn = document.getElementsByClassName('.btn_reset');
const overlay = document.getElementById('overlay');

// Number of wrong guesses
let missed = 0;

//Array of phrases
const words = ["As Good As It Gets", 
                "Tough Love", 
                "Long Live The Queen", 
                "Any Port In A Storm", 
                "Saved By The Bell"];

//---------------Functions ------------------------------------------------------------

//Hide Overlay
resetBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

