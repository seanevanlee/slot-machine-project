// a welcome alert upon opening the browser link
alert("Christmas is on a Sunday this year\nBut for you, maybe it's early?");

// random selector array, 3 sounds like a manageable number
 const emojiArray = [
        '⛄',
        '🎅',
        '🦌',
    ]

// create a way to get one of the 3 emojis, it doesn't matter which so it keeps the game fun
function getRandom(){
    // const emojiArray = [
    //     '⛄',
    //     '🎅',
    //     '🦌',
    // ]
    const random = Math.floor(Math.random() * 3);
    // console.log(random);
    return emojiArray[random];
};


// use that each time the page is updating
// reset function to start the game back up from scratch
// onclick 
// one for all 3 santas = you win (Santa is the winning emoji)
// one for not = you lose (3 of snowmen or 3 of reindeer get you nothing)
// for loop to run through the game 5 times to try to win
// const christmasPresentsEls = {
//     slot1: document.querySelector('#present1'),
//     slot2: document.querySelector('#present2'),
//     slot3: document.querySelector('#present3'),
// };

let slot1 = document.querySelector('#present1')
let slot2 = document.querySelector('#present2')
let slot3 = document.querySelector('#present3')


// next thing to do = Select each div with the div. Check the console as a reference
// update the innerText to represent an array random value
// div ids= present 1 , present 2, present 3
// random variables give you an index
// use that to grab a random value from the array
// once completed, you should see each square has an emoji on the webpage
init() // this is calling a function
function init(){
slot1.innerText = getRandom()
slot2.innerText = getRandom()
slot3.innerText = getRandom()
}


// create a play button that generates 3 at random. event listener to play button
// the play function below tells the game to make a sound when the button is clicked as well as display different messages in the console.log. 
function play() {
    const audio = document.getElementById("audio");
    audio.play();
    if ((slot1.innerText === slot2.innerText) && (slot1.innerText === slot3.innerText) && (slot2.innerText === slot3.innerText)) {
        // document.getElementById("") = "Santa thought you were nice this year"
        console.log('Get your milk and cookies');
    } else {
        // display = "Please try again"
        console.log('The Grinch stole Christmas! Please go again.');
    }
  }
  
const button = document.querySelector('button');
button.addEventListener('click', playChristmas);

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', init);

// document.getElementById("Is Christmas coming early? Click here to find out!!').addEventListener('click',playChristmas);

function playChristmas(e){
    // console.log('Happy Holidays');
    slot1.innerText = getRandom();
    slot2.innerText = getRandom();
    slot3.innerText = getRandom();


}



// javascript to have everything start as blank (no emojis). emojis only pop up when the user hits play first.

// dom lessions, function lessons