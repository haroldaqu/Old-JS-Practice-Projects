//Make a function that will make the audio play
window.addEventListener('keydown', playSound)
function playSound (e) {
    // In this function, when the user presses the key down we want:
    // 1. For the sound to play
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        // this is reaching into a specific element, we want to reach into a specific audio key code
        // e.keycode will find the right key code when it detects the user pressing the key
    audio.currentTime = 0;
    audio.play();
    // This plays the audio
    if (!audio) return; 
    // 2. For the border colors to change
    //  stops audio function if one of the key pressed is not identified
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
}
 

// We need to make something that will make the attribute key back to the original attribute and cancelling the key = playing

let allKeys = document.querySelectorAll('.key')

allKeys.forEach(key => key.addEventListener('transitionend', stopTransition))

function stopTransition(event){
    if(event.propertyName !== 'transform') return;
    event.target.classList.remove('playing');
}











