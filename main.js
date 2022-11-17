// A welcome alert upon opening the browser link. We'll continue to use meaningful descriptions when given the opportunity for variable names, array names, etc
alert("Christmas is on a Sunday this year\nBut for you, maybe it's early?");

// The random array below shows that we have 3 emojis to choose from and they will remain the same hence the "const".
 const emojiArray = [
        '⛄',
        '🎅',
        '🦌',
    ]

// We'll call this function below. Floor and random work together to return a random emoji from the array mentioned above. 
function getRandom(){
    const random = Math.floor(Math.random() * 3);
    return emojiArray[random];
};



// We'll say "let" below since the slots 1-3 are meant to change as the game goes on. We've already given the divs IDs in the HTML so we'll get 3 separate emojis on the page. A HTML banner will pop up towards the top of the page to signal win/loss.
let slot1 = document.querySelector('#present1')
let slot2 = document.querySelector('#present2')
let slot3 = document.querySelector('#present3')
let resultMessage = document.querySelector('#resultMessage')


// Below, we'll call a function init which will act as the reset button, triggering a noise which is denoted by "audio2" so it's a different noise than the other button. The button will also set the innerText strings so the user can start fresh with no emojis and winning message showing up on the screen.
function init(){
    slot1.innerText = ""
    slot2.innerText = ""
    slot3.innerText = ""
    resultMessage.innerText = ""
    const audio = document.getElementById('audio2');
    audio.play();
    render();
}


// The play function below tells the game to make a sound when the button is clicked as well as display different messages in the console.log. Using the transitive property, we can set the slots' logic (the lines commented out) to win only if Santa appears on all 3 spots. The HTML at the top will change as it was assigned a HTML ID and a innerText property.
function play() {
    const audio = document.getElementById('audio');
    audio.play();
    slot1.innerText = getRandom()
    slot2.innerText = getRandom()
    slot3.innerText = getRandom()
    if ((slot1.innerText === slot2.innerText) && (slot1.innerText === slot3.innerText) && (slot1.innerText === '🎅')) {
        console.log('Get your milk and cookies');
        resultMessage.innerText = 'Get your milk and cookies!'
    } else {
        console.log('The Grinch stole Christmas! Please go again.');
        resultMessage.innerText = 'The Grinch stole Christmas! Please go again.'
    }
    
  }

//   After init, call render to update the newly state visually on the DOM page
  function render(){
    slot1.innerText = ""
    slot2.innerText = ""
    slot3.innerText = ""
    resultMessage.innerText = ""
  }