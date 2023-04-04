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

function galleryImgVisible(boolVisibility) {
    let galleryAllImages = document.querySelectorAll("[data-unique-name]");
    if (boolVisibility) {
        for (let gImg of galleryAllImages) {
            gImg.style.width = "288px";
            gImg.style.opacity = "1";
        }
    }
    else {
        for (let gImg of galleryAllImages) {
            gImg.style.width = "0px";
            gImg.style.opacity = "0";
        }
    }
}

function filterImage(uniqueName) {
    let galleryTargetImages = document.querySelectorAll(`[data-unique-name="${uniqueName}"]`);
    if (uniqueName === "all-flesh-img") {
        galleryImgVisible(true);
    }
    else {
        galleryImgVisible(false);
        for (let gImg of galleryTargetImages) {
            gImg.style.width = "288px";
            gImg.style.opacity = "1";
        }
    }
}

const counterStatsElements = document.querySelectorAll("[data-stats-counter]");
const ANIMATION_DURATION = 1536;

function animationCounterStats(element, start, end, animationDuration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const animationProgress = Math.min((timestamp - startTimestamp) / animationDuration, 1);
        element.textContent = Math.floor(animationProgress * (end - start) + start);
        if (animationProgress < 1) {
            window.requestAnimationFrame(step);
        } else {
            element.textContent = parseInt(end);
        }
    };
    window.requestAnimationFrame(step);
}

let options = {
    threshold: [0]
};

let observer = new IntersectionObserver(entries, options);
observer.observe(document.querySelector(".m-lending-counter"));

function entries(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            counterStatsElements.forEach((element) => {
                const countTo = element.getAttribute('data-stats-counter');
                animationCounterStats(element, 0, countTo, ANIMATION_DURATION);
                observer.disconnect();
            })
        }
    })
}