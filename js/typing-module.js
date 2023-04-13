"use strict"

const textElement = document.querySelector("#typing-text");
const headerElement = document.querySelector(".header");

let wordsIndex = 0;
let tempText = "";
let isDeleting = false;

function typingText() {

    const SPEED_TYPING_TEXT = 128;
    const WAIT_TYPING_TEXT = 1536;
    const SPEED_DELETING_TEXT = 128;
    const WAIT_DELETING_TEXT = 128;
    const wordsArray = textElement.dataset.typingWords.split(", ");
    const imageArray = {
        "Anbar xidməti": "url('img/content/header/bg-warehouse.jpg')",
        "Warehouse": "url('img/content/header/bg-warehouse.jpg')",
        "Услуги склада": "url('img/content/header/bg-warehouse.jpg')",
        "Daşınma xidməti": "url('img/content/header/bg-delivery.jpg')",
        "Delivery": "url('img/content/header/bg-delivery.jpg')",
        "Услуги доставки": "url('img/content/header/bg-delivery.jpg')"
    };
    const currentWord = wordsArray[wordsIndex];
    const currentImage = imageArray[currentWord];
    headerElement.style.backgroundImage = currentImage;
    if (!isDeleting) {
        tempText = currentWord.slice(0, tempText.length + 1);
        textElement.innerHTML = tempText;
        if (tempText === currentWord) {
            isDeleting = true;
            requestAnimationFrame(() => setTimeout(typingText, WAIT_TYPING_TEXT));
        } else {
            requestAnimationFrame(() => setTimeout(typingText, SPEED_TYPING_TEXT));
        }
    } else {
        tempText = currentWord.slice(0, tempText.length - 1);
        textElement.innerHTML = tempText;
        if (tempText === "") {
            isDeleting = false;
            wordsIndex = (wordsIndex + 1) % wordsArray.length;
            requestAnimationFrame(() => setTimeout(typingText, WAIT_DELETING_TEXT));
        } else {
            requestAnimationFrame(() => setTimeout(typingText, SPEED_DELETING_TEXT));
        }
    }
}

typingText();