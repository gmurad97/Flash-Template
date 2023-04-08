let textElement = document.getElementById("typing-text");
let wordsArray = textElement.getAttribute("data-typing-words").split(", ");
let headerElement = document.querySelector(".header");

let wordsIndex = 0;
let isDeleting = false;
let tempText = "";

/*BEGIN - CONTROL*/
const SPEED_TYPING_TEXT = 128;
const WAIT_TYPING_TEXT = 1536;
const SPEED_DELETING_TEXT = 128;
const WAIT_DELETING_TEXT = 128;
/*ENDED - CONTROL*/

function typingText() {
    const currentWord = wordsArray[wordsIndex];
    if (!isDeleting) {
        tempText = currentWord.substring(0, tempText.length + 1);
        textElement.innerHTML = tempText;
        if (tempText === currentWord) {
            isDeleting = true;
            setTimeout(() => {
                typingText();
            }, WAIT_TYPING_TEXT);
        }
        else {
            setTimeout(() => {

                typingText();
            }, SPEED_TYPING_TEXT);
        }
    }
    else {
        tempText = currentWord.substring(0, tempText.length - 1);
        textElement.innerHTML = tempText;
        if (tempText === "") {
            isDeleting = false;
            wordsIndex = (wordsIndex + 1) % wordsArray.length;
            /*BEGIN - CHANGER BACKGROUND || SLIDER*/
            if (!currentWord.toLowerCase().includes("delivery")) {
                headerElement.style.backgroundImage = "url('img/content/header/bg-delivery.jpg')"
            }
            else {
                headerElement.style.backgroundImage = "url('img/content/header/bg-warehouse.jpg')"
            }
            /*ENDED - CHANGER BACKGROUND || SLIDER*/
            setTimeout(() => {
                typingText();
            }, WAIT_DELETING_TEXT);
        }
        else {
            setTimeout(() => {
                typingText();
            }, SPEED_DELETING_TEXT);
        }
    }
}

typingText();