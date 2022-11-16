alert("Christmas is on a Sunday this year\nBut for you, maybe it's early?");

// random selector array
 const emojiArray = [
        '⛄',
        '🎅',
        '🦌',
    ]
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
const christmasPresentsEls = {
    slot1: document.querySelector('#present1'),
    slot2: document.querySelector('#present2'),
    slot3: document.querySelector('#present3'),
};


// next thing to do = Select each div with the div. Check the console as a reference
// update the innerText to represent an array random value
// div ids= present 1 , present 2, present 3
// random variables give you an index
// use that to grab a random value from the array
// once completed, you should see each square has an emoji on the webpage
init() // this is calling a function
function init(){
christmasPresentsEls.slot1.innerText = getRandom()
christmasPresentsEls.slot2.innerText = getRandom()
christmasPresentsEls.slot3.innerText = getRandom()
}


// create a play button that generates 3 at random. event listener to play button

// document.getElementById("button").addEventListener("click here", getrandom());

const button = document.querySelector('button');
button.addEventListener('click', playChristmas);

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', init);

// document.getElementById("Is Christmas coming early? Click here to find out!!').addEventListener('click',playChristmas);

function playChristmas(e){
    // console.log('Happy Holidays');
    christmasPresentsEls.slot1.innerText = getRandom();
    christmasPresentsEls.slot2.innerText = getRandom();
    christmasPresentsEls.slot3.innerText = getRandom();

// if (condition) {
//     statement
// }
// else if (somethingElse) {
//     statement2
// }
const winner = '🎅';
let spins = {
    player: 0,
}

if (christmasPresentsEls.slot1 === christmasPresentsEls.slot2 && christmasPresentsEls.slot1 === christmasPresentsEls.slot3 && christmasPresentsEls.slot2 === christmasPresentsEls.slot3) {
    document.getElementById("") = "Santa thought you were nice this year"
    console.log('Get your milk and cookies');
} else {
    display = "Please try again"
    console.log('The Grinch stole Christmas! Please go again.');
}
spins.player += 1


}