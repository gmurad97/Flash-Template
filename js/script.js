new WOW().init();

window.onload = function () {
    let pLoaderStyle = document.getElementById("ploader").style
    document.body.style.overflow = "visible";
    pLoaderStyle.opacity = 0;
    setTimeout(function () {
        pLoaderStyle.zIndex = "-1024";
    }, 320);
}

function faBounceEnabled(elmRoot) {
    elmRoot.querySelector(".fa-flash-second-type").classList.add("fa-bounce");
}

function faBounceDisabled(elmRoot) {
    elmRoot.querySelector(".fa-flash-second-type").classList.remove("fa-bounce");
}

let scrollBtn = document.getElementById("scrll-up");

function scrollObsrv() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.opacity = "1";
        scrollBtn.style.height = "50px";
        scrollBtn.style.width = "50px";
    }
    else {
        scrollBtn.style.opacity = "0";
        scrollBtn.style.height = "0px";
        scrollBtn.style.width = "0px";
    }
}

window.onscroll = function () {
    scrollObsrv();
}

function scrollDefTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}