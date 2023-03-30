new WOW().init();

window.onload = function () {
    let pLoader = document.getElementById("ploader");
    document.body.style.overflow = "visible";
    pLoader.style.opacity = 0;
    pLoader.ontransitionend = () => pLoader.style.zIndex = "-1024";
}

function faBounceEnabled(elmRoot) {
    elmRoot.querySelector("[class*=\"fa-flash\"]").classList.add("fa-bounce");
}

function faBounceDisabled(elmRoot) {
    elmRoot.querySelector("[class*=\"fa-flash\"]").classList.remove("fa-bounce");
}

let scrollBtn = document.getElementById("scrll-up");

function scrollObsrv() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.opacity = "1";
        scrollBtn.ontransitionend = () => scrollBtn.style.zIndex = "1024";
    }
    else {
        scrollBtn.style.opacity = "0";
        scrollBtn.ontransitionend = () => scrollBtn.style.zIndex = "-1024";
    }
}

window.onscroll = function () {
    scrollObsrv();
}

function scrollToUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function filterImage(uniqueName) {
    let allImage = document.querySelectorAll("[data-unique-name]");
    let targetImage = document.querySelectorAll(`[data-unique-name="${uniqueName}"]`);
    for (let sImg of allImage) {
        sImg.style.width = "288px";
    }
    if (uniqueName === "all-flesh-img") {
        for (let sImg of allImage) {
            sImg.style.width = "288px";
        }
    }
    else {
        for (let sImg of targetImage) {
            sImg.style.width = "0px";
        }
    }
}