let textElement = document.getElementById("typing-text");
let wordsArray = textElement.getAttribute("data-typing-words").split(", ");

let wordsIndex = 0;
let isDeleting = false;
let tempText = "";

/*BEGIN - CONTROL*/
const SPEED_TYPING_TEXT = 128;
const WAIT_TYPING_TEXT = 1536;
const SPEED_DELETING_TEXT = 128;
const WAIT_DELETING_TEXT = 128;
/*ENDED - CONTROL*/

var k = ["red","blue"]
var k_index = 0;

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
            setTimeout(() => {

                if(k_index > k.length+1){
                    k_index = 0;
                    document.body.style.backgroundColor = k[k_index];
                }
                else{
                    document.body.style.backgroundColor = k[k_index];
                    k_index++;
                }



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