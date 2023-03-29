new WOW().init();

window.onload = function () {
    let pLoader = document.getElementById("ploader");
    document.body.style.overflow = "visible";
    pLoader.style.opacity = 0;
    pLoader.ontransitionend = () => pLoader.style.zIndex = "-1024";
}

function faBounceEnabled(elmRoot) {
    elmRoot.querySelector(".fa-flash-lending-type").classList.add("fa-bounce");
}

function faBounceDisabled(elmRoot) {
    elmRoot.querySelector(".fa-flash-lending-type").classList.remove("fa-bounce");
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