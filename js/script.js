window.onload = () => {
    let WOW_OBJ_INIT = new WOW().init();
    let pLoader = document.querySelector(".preloader");
    document.body.style.overflow = "visible";
    pLoader.style.opacity = 0;
    pLoader.ontransitionend = () => pLoader.style.zIndex = "-1024";
}

let scrollBtn = document.querySelector(".scroll-up");

scrollBtn.onclick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

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

window.onscroll = () => {
    scrollObsrv();
}

let lendingBlocks = document.querySelectorAll(".m-l-block");

for (let lendingBlock of lendingBlocks) {
    lendingBlock.onmouseover = () => {
        lendingBlock.querySelector("[class*=\"fa-flash\"]").classList.add("fa-bounce");
    }
    lendingBlock.onmouseout = () => {
        lendingBlock.querySelector("[class*=\"fa-flash\"]").classList.remove("fa-bounce");
    }
}












function galleryImgVisible(boolVisibility) {
    let galleryAllImages = document.querySelectorAll("[data-unique-name]");
    if (boolVisibility) {
        for (let gImg of galleryAllImages) {
            /* gImg.style.width = "288px";
            gImg.style.opacity = "1"; */
            gImg.style.display = "flex";
        }
    }
    else {
        for (let gImg of galleryAllImages) {
            /* gImg.style.width = "0px";
            gImg.style.opacity = "0"; */
            gImg.style.display = "none";
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
            /* gImg.style.width = "288px";
            gImg.style.opacity = "1"; */
            gImg.style.display = "flex";
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