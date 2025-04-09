const textArray = [
    "Welcome to Blogging World!",
    "Write your thoughts...",
    "Share your stories...",
    "Inspire others through words!"
];

let textIdx = 0;
let charIdx = 0;
const typyingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenTexts = 2000;
const typedText = document.getElementById("typed-text");

function type(){
    if(charIdx < textArray[textIdx].length){
        typedText.textContent += textArray[textIdx].charAt(charIdx);
        charIdx++;
        setTimeout(type, typyingSpeed);
    } else{
        setTimeout(erase, delayBetweenTexts);
    }
}

function erase(){
    if(charIdx > 0){
        typedText.textContent = textArray[textIdx].substring(0, charIdx-1);
        charIdx--;
        setTimeout(erase, erasingSpeed)
    } else {
        textIdx++;
        if(textIdx >= textArray.length) textIdx = 0;
        setTimeout(type, typyingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", function(){
    setTimeout(type, delayBetweenTexts);
})