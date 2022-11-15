const emojiArray = [
    '⛄',
    '🎅',
    '🪨',
];

// random selector array
const random = Math.floor(math.random() * emojiArray.length);
console.log(random, emojiArray[random]);

// reset function to start the game back up from scratch
// onclick 
// one for all 3 santas = you win
// one for not = you lose
// for loop to run through the game 5 times to try to win
const christmasPresentsEls = {
    slot1: document.querySelector('christmasPresent'),
    slot2: document.querySelector('christmasPresent'),
    slot3: document.querySelector('christmasPresent'),
};
