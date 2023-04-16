"use strict"

const pLoader = this.document.querySelector(".preloader");
const bodyElement = document.body;
const docElement = document.documentElement;

window.addEventListener("load", function () {
    new WOW().init();
    bodyElement.style.overflow = "visible";
    pLoader.style.opacity = 0;
    pLoader.addEventListener("transitionend", function () {
        pLoader.style.zIndex = "-1024";
    });
});

const scrollBtn = document.querySelector(".scroll-up");
const headerNavBar = document.querySelector(".h-navbar");
const headerNavBarLogo = document.querySelector(".h-n-logo>a>img");

scrollBtn.addEventListener("click", function () {
    bodyElement.scrollTop = 0;
    docElement.scrollTop = 0;
});

function ScrollVisibility() {
    if (bodyElement.scrollTop > 20 || docElement.scrollTop > 20) {
        scrollBtn.style.opacity = "1";
        scrollBtn.addEventListener("transitionend", function () {
            scrollBtn.style.zIndex = "1024";
        });
        headerNavBar.style.backgroundColor = "var(--theme-panel-alpha64-color)";
        headerNavBarLogo.style.width = "80px";
    }
    else {
        scrollBtn.style.opacity = "0";
        scrollBtn.addEventListener("transitionend", function () {
            scrollBtn.style.zIndex = "-1024";
        });
        headerNavBar.style.backgroundColor = "var(--theme-panel-alpha32-color)";
        headerNavBarLogo.style.width = "111px";
    }
}

window.addEventListener("scroll", function () {
    ScrollVisibility();
});

const faBounceBlocks = document.querySelectorAll(".m-l-block, .m-price-block, .m-l-counter-block");

for (let faBounceBlock of faBounceBlocks) {
    faBounceBlock.addEventListener("mouseover", function () {
        faBounceBlock.querySelector("[class*=\"fa-flash\"]").classList.add("fa-bounce");
    });
    faBounceBlock.addEventListener("mouseout", function () {
        faBounceBlock.querySelector("[class*=\"fa-flash\"]").classList.remove("fa-bounce");
    });
}

const galleryImages = document.querySelectorAll("[data-unique-name]");

function galleryImgsVisible(boolVisibility) {
    if (boolVisibility) {
        for (let galleryImage of galleryImages) {
            galleryImage.classList.remove("m-gallery-img-hidden");
            galleryImage.classList.add("m-gallery-img-visible");
        }
    }
    else {
        for (let galleryImage of galleryImages) {
            galleryImage.classList.remove("m-gallery-img-visible");
            galleryImage.classList.add("m-gallery-img-hidden");
        }
    }
}

function filterImage(uniqueName) {
    let galleryFilteringImages = document.querySelectorAll(`[data-unique-name="${uniqueName}"]`);
    if (uniqueName === "all-flash-img") {
        galleryImgsVisible(true);
    }
    else {
        galleryImgsVisible(false);
        for (let galleryFilteringImage of galleryFilteringImages) {
            galleryFilteringImage.classList.remove("m-gallery-img-hidden");
            galleryFilteringImage.classList.add("m-gallery-img-visible");
        }
    }
}

const menuToClassMap = {
    "all": "all-flash-img",
    "ümumi": "all-flash-img",
    "все": "all-flash-img",
    "warehouse": "warehouse",
    "anbar": "warehouse",
    "склад": "warehouse",
    "delivery": "delivery",
    "daşınma": "delivery",
    "доставка": "delivery",
    "partners": "partners",
    "партнеры": "partners",
    "partnyorlar": "partners"
};

const galleryLiMenu = document.querySelectorAll(".m-gallery-control>ul>li");

for (let liMenu of galleryLiMenu) {
    if (menuToClassMap[liMenu.textContent.toLowerCase()]) {
        liMenu.addEventListener("click", function () {
            filterImage(menuToClassMap[liMenu.textContent.toLowerCase()]);
        });
    }
}















const counterStatsElements = document.querySelectorAll("[data-stats-counter]");



const ANIMATION_DURATION = 2048;

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
                const countTo = element.getAttribute("data-stats-counter");
                animationCounterStats(element, 0, countTo, ANIMATION_DURATION);
                observer.disconnect();
            })
        }
    })
}

const galleryAllImages = document.querySelectorAll(".m-gallery-img>img");
const modalContainer = document.querySelector(".modal-container");
const modalImage = document.querySelector(".modal-content>img");
const closeBtnModal = document.querySelector("#modal-img-close-btn");
const prevBtnModal = document.querySelector("#modal-img-left-btn");
const nextBtnModal = document.querySelector("#modal-img-right-btn");

galleryAllImages.forEach(image => {
    image.addEventListener("click", () => {
        const imageUrl = image.getAttribute("src");
        modalImage.setAttribute("src", imageUrl);
        modalContainer.style.zIndex = "1024";
        modalContainer.style.transform = "translate(-50%, -50%) scale(1)";
        modalContainer.ontransitionend = () => {
            modalContainer.style.zIndex = "1024";
        };
    });
});

closeBtnModal.addEventListener("click", () => {
    modalContainer.ontransitionend = () => {
        modalContainer.style.zIndex = "-1024";
    };
    modalContainer.style.transform = "translate(-50%, -50%) scale(0)";
});

nextBtnModal.addEventListener("click", () => {
    const currentImage = modalImage.getAttribute("src");
    let nextImage;
    for (let i = 0; i < galleryAllImages.length; i++) {
        if (galleryAllImages[i].getAttribute("src") === currentImage) {
            if (i === galleryAllImages.length - 1) {
                nextImage = galleryAllImages[0].getAttribute("src");
            } else {
                nextImage = galleryAllImages[i + 1].getAttribute("src");
            }
            break;
        }
    }
    modalImage.setAttribute("src", nextImage);
});

prevBtnModal.addEventListener("click", () => {
    const currentImage = modalImage.getAttribute("src");
    let prevImage;
    for (let i = 0; i < galleryAllImages.length; i++) {
        if (galleryAllImages[i].getAttribute("src") === currentImage) {
            if (i === 0) {
                prevImage = galleryAllImages[galleryAllImages.length - 1].getAttribute("src");
            } else {
                prevImage = galleryAllImages[i - 1].getAttribute("src");
            }
            break;
        }
    }
    modalImage.setAttribute("src", prevImage);
});














function darkMode(enabled){
    if(enabled){
    //darkmode
    //operating body => bodyelement
    }
    else{
    //light mode
    //operating body => bodyelement
    }
}

let dateNow = new Date();

if(dateNow.getHours() >= 18 || dateNow.getHours() <= 6){
    darkMode(true);
}
else{
    darkMode(false);
}